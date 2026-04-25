import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Card,
  Typography,
  Button,
  Row,
  Col,
  Input,
  Select,
  Tag,
} from "antd";
import {
  BookOutlined,
  HomeOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

export default function BooksPage() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("ALL");

  const books = [
    { title: "Dune", author: "Frank Herbert", genre: "SCIFI", isbn: "123" },
    { title: "1984", author: "George Orwell", genre: "FICTION", isbn: "456" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "FANTASY", isbn: "789" },
  ];

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const searchText = `${book.title} ${book.author} ${book.genre} ${book.isbn}`.toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());
      const matchesGenre = genre === "ALL" || book.genre === genre;

      return matchesSearch && matchesGenre;
    });
  }, [books, search, genre]);

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
        {filteredBooks.map((book, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
            <Card hoverable style={{ borderRadius: "18px" }}>
              <Tag color="brown">{book.genre}</Tag>
              <Title level={4}>{book.title}</Title>
              <Text>{book.author}</Text>
              <br />
              <Text type="secondary">ISBN: {book.isbn}</Text>
              <Paragraph style={{ marginTop: "12px" }}>
                Placeholder description or metadata.
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </main>
  );
}