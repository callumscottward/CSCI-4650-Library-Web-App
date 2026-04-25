import Link from "next/link";
import { Card, Typography, Button, Row, Col } from "antd";
import { BookOutlined, HomeOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function BooksPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "48px", background: "#f5efe6" }}>
      <Link href="/">
        <Button icon={<HomeOutlined />}>Back Home</Button>
      </Link>

      <Title style={{ marginTop: "24px" }}>
        <BookOutlined /> Book Catalog
      </Title>

      <Paragraph>
        Browse the library collection, including book titles, genres, ISBNs, and available copies.
      </Paragraph>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <Card title="Fiction" hoverable>
            View and manage fiction books in the library system.
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card title="Fantasy" hoverable>
            Track fantasy titles, authors, and physical copies.
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card title="Audiobooks" hoverable>
            Manage digital or audio versions of books.
          </Card>
        </Col>
      </Row>
    </main>
  );
}