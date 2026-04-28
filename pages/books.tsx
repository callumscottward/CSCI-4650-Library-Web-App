import Link from "next/link";
import { useMemo, useState } from "react";
import type { GetServerSideProps } from "next";
import {
  Card,
  Typography,
  Button,
  Row,
  Col,
  Input,
  Select,
  Tag,
  Modal,
  Statistic,
} from "antd";
import {
  BookOutlined,
  HomeOutlined,
  SearchOutlined,
  AudioOutlined,
} from "@ant-design/icons";
import type {
  Book,
  Author,
  PhysicalBookCopy,
  AudioBookCopy,
} from "@prisma/client";
import prisma from "@/model/db";

const { Title, Paragraph, Text } = Typography;

type BookWithCopies = Book & {
  physicalBooks: PhysicalBookCopy[];
  audioBooks: AudioBookCopy[];
};

type BooksPageProps = {
  books: BookWithCopies[];
  authors: Author[];
};

export default function BooksPage({ books, authors }: BooksPageProps) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("ALL");
  const [selectedBook, setSelectedBook] = useState<BookWithCopies | null>(null);

  const authorMap = useMemo(
    () =>
      new Map(
        authors.map((author) => [
          author.id,
          `${author.firstName} ${author.lastName}`,
        ])
      ),
    [authors]
  );

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const authorName = authorMap.get(book.authorId) ?? "Unknown author";
      const searchText =
        `${book.title} ${authorName} ${book.genre} ${book.ISBN}`.toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());
      const matchesGenre = genre === "ALL" || book.genre === genre;

      return matchesSearch && matchesGenre;
    });
  }, [books, search, genre, authorMap]);

  const updateCopyStatus = async (
    type: "physical" | "audio",
    copyId: number,
    checkedOut: boolean
  ) => {
    const endpoint =
      type === "physical"
        ? `/api/physical_books/${copyId}`
        : `/api/audio_books/${copyId}`;

    const response = await fetch(endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checkedOut }),
    });

    if (!response.ok) {
      return;
    }

    window.location.reload();
  };

  return (
    <main style={{ minHeight: "100vh", padding: "48px", background: "#f5efe6" }}>
      <Link href="/">
        <Button icon={<HomeOutlined />}>Back Home</Button>
      </Link>

      <Title style={{ marginTop: "24px" }}>
        <BookOutlined /> Book Catalog
      </Title>

      <Paragraph>Browse books by title, author, genre, and ISBN.</Paragraph>

      <Card style={{ borderRadius: "18px", marginBottom: "24px" }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Input
              size="large"
              prefix={<SearchOutlined />}
              placeholder="Search books..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>

          <Col xs={24} md={6}>
            <Select
              size="large"
              style={{ width: "100%" }}
              value={genre}
              onChange={setGenre}
              options={[
                { value: "ALL", label: "All Genres" },
                { value: "FICTION", label: "Fiction" },
                { value: "FANTASY", label: "Fantasy" },
                { value: "SCIFI", label: "Sci-Fi" },
              ]}
            />
          </Col>

          <Col xs={24} md={6}>
            <Button
              size="large"
              block
              onClick={() => {
                setSearch("");
                setGenre("ALL");
              }}
            >
              Clear Filters
            </Button>
          </Col>
        </Row>
      </Card>

      <Row gutter={[24, 24]}>
        {filteredBooks.map((book) => {
          const authorName = authorMap.get(book.authorId) ?? "Unknown author";

          return (
            <Col xs={24} md={12} lg={8} key={book.id}>
              <Card
                hoverable
                style={{ borderRadius: "18px" }}
                onClick={() => setSelectedBook(book)}
              >
                <Tag color="brown">{book.genre}</Tag>
                <Title level={4}>{book.title}</Title>
                <Text>{authorName}</Text>
                <br />
                <Text type="secondary">ISBN: {book.ISBN}</Text>
                <br />
                <Text type="secondary">
                  Pages: {book.pageLength ?? "N/A"}
                </Text>

                <Paragraph style={{ marginTop: "12px" }}>
                  Click to view availability.
                </Paragraph>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Modal
        open={selectedBook !== null}
        onCancel={() => setSelectedBook(null)}
        footer={null}
        title={selectedBook?.title ?? "Book Availability"}
      >
        {selectedBook && (
          <>
            <Paragraph>
              <Text strong>
                {authorMap.get(selectedBook.authorId) ?? "Unknown author"}
              </Text>
              <br />
              <Text type="secondary">ISBN: {selectedBook.ISBN}</Text>
              <br />
              <Text type="secondary">
                Pages: {selectedBook.pageLength ?? "N/A"}
              </Text>
            </Paragraph>

            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card style={{ borderRadius: "14px" }}>
                  <Statistic
                    title="Physical Available"
                    value={
                      selectedBook.physicalBooks.filter(
                        (copy) => !copy.checkedOut
                      ).length
                    }
                    suffix={`/ ${selectedBook.physicalBooks.length}`}
                    prefix={<BookOutlined />}
                  />
                </Card>
              </Col>

              <Col span={12}>
                <Card style={{ borderRadius: "14px" }}>
                  <Statistic
                    title="Audio Available"
                    value={
                      selectedBook.audioBooks.filter(
                        (copy) => !copy.checkedOut
                      ).length
                    }
                    suffix={`/ ${selectedBook.audioBooks.length}`}
                    prefix={<AudioOutlined />}
                  />
                </Card>
              </Col>
            </Row>

            <Title level={5} style={{ marginTop: "24px" }}>
              Physical Copies
            </Title>

            {selectedBook.physicalBooks.map((copy) => (
              <Card key={copy.id} size="small" style={{ marginBottom: "8px" }}>
                <Row justify="space-between" align="middle">
                  <Col>
                    <Text>
                      Copy #{copy.id}:{" "}
                      {copy.checkedOut ? "Checked out" : "Available"}
                    </Text>
                  </Col>

                  <Col>
                    <Button
                      type={copy.checkedOut ? "default" : "primary"}
                      onClick={() =>
                        updateCopyStatus("physical", copy.id, !copy.checkedOut)
                      }
                    >
                      {copy.checkedOut ? "Return" : "Check Out"}
                    </Button>
                  </Col>
                </Row>
              </Card>
            ))}

            <Title level={5} style={{ marginTop: "24px" }}>
              Audio Copies
            </Title>

            {selectedBook.audioBooks.map((copy) => (
              <Card key={copy.id} size="small" style={{ marginBottom: "8px" }}>
                <Row justify="space-between" align="middle">
                  <Col>
                    <Text>
                      Copy #{copy.id}:{" "}
                      {copy.checkedOut ? "Checked out" : "Available"}
                    </Text>
                  </Col>

                  <Col>
                    <Button
                      type={copy.checkedOut ? "default" : "primary"}
                      onClick={() =>
                        updateCopyStatus("audio", copy.id, !copy.checkedOut)
                      }
                    >
                      {copy.checkedOut ? "Return" : "Check Out"}
                    </Button>
                  </Col>
                </Row>
              </Card>
            ))}
          </>
        )}
      </Modal>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<BooksPageProps> = async () => {
  const books = await prisma.book.findMany({
    include: {
      physicalBooks: true,
      audioBooks: true,
    },
  });

  const authors = await prisma.author.findMany();

  return {
    props: {
      books,
      authors,
    },
  };
};