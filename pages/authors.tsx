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
  Tag,
  Modal,
  List,
} from "antd";
import {
  HomeOutlined,
  SearchOutlined,
  UserOutlined,
  BookOutlined,
} from "@ant-design/icons";
import type { Author, Book } from "@prisma/client";
import prisma from "@/model/db";

const { Title, Paragraph, Text } = Typography;

type AuthorWithBooks = Author & {
  books: Book[];
};

type AuthorsPageProps = {
  authors: AuthorWithBooks[];
};

export default function AuthorsPage({ authors }: AuthorsPageProps) {
  const [search, setSearch] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState<AuthorWithBooks | null>(
    null
  );

  const filteredAuthors = useMemo(() => {
    return authors.filter((author) => {
      const bookTitles = author.books.map((book) => book.title).join(" ");
      const searchText =
        `${author.firstName} ${author.lastName} ${bookTitles}`.toLowerCase();

      return searchText.includes(search.toLowerCase());
    });
  }, [authors, search]);

  return (
    <main style={{ minHeight: "100vh", padding: "48px", background: "#f5efe6" }}>
      <Link href="/">
        <Button icon={<HomeOutlined />}>Back Home</Button>
      </Link>

      <Title style={{ marginTop: "24px" }}>
        <UserOutlined /> Authors
      </Title>

      <Paragraph>Browse authors and click a card to view their books.</Paragraph>

      <Card style={{ borderRadius: "18px", marginBottom: "24px" }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={18}>
            <Input
              size="large"
              prefix={<SearchOutlined />}
              placeholder="Search authors or books..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>

          <Col xs={24} md={6}>
            <Button size="large" block onClick={() => setSearch("")}>
              Clear Search
            </Button>
          </Col>
        </Row>
      </Card>

      <Row gutter={[24, 24]}>
        {filteredAuthors.map((author) => (
          <Col xs={24} md={12} lg={8} key={author.id}>
            <Card
              hoverable
              style={{ borderRadius: "18px" }}
              onClick={() => setSelectedAuthor(author)}
            >
              <Tag color="brown">
                {author.books.length}{" "}
                {author.books.length === 1 ? "Book" : "Books"}
              </Tag>

              <Title level={4}>
                {author.firstName} {author.lastName}
              </Title>

              <Text type="secondary">Click to view books</Text>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        open={selectedAuthor !== null}
        onCancel={() => setSelectedAuthor(null)}
        footer={null}
        title={
          selectedAuthor
            ? `${selectedAuthor.firstName} ${selectedAuthor.lastName}'s Books`
            : "Author Books"
        }
      >
        {selectedAuthor?.books.length ? (
          <List
            dataSource={selectedAuthor.books}
            renderItem={(book) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<BookOutlined />}
                  title={book.title}
                  description={
                    <>
                      <Text type="secondary">ISBN: {book.ISBN}</Text>
                      <br />
                      <Tag color="brown">{book.genre}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        ) : (
          <Paragraph>No books found for this author.</Paragraph>
        )}
      </Modal>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<
  AuthorsPageProps
> = async () => {
  const authors = await prisma.author.findMany({
    include: {
      books: true,
    },
  });

  return {
    props: {
      authors,
    },
  };
};