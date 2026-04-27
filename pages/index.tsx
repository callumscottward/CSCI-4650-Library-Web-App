
import { Card, Col, Row, Typography, Button, Space } from "antd";
import {
  BookOutlined,
  ReadOutlined,
  UserOutlined,
  StarOutlined,
} from "@ant-design/icons";
import Link from "next/link";
const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5efe6 0%, #d8c3a5 100%)",
        padding: "48px",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "24px",
          padding: "48px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        }}
      >
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={14}>
            <Title style={{ fontSize: "48px", marginBottom: "12px" }}>
              📚 UNO Library Portal
            </Title>

            <Paragraph style={{ fontSize: "18px", color: "#555" }}>
              Browse books, manage authors, track physical and audio copies,
              and view reviews all from one clean library dashboard.
            </Paragraph>

            
          </Col>

          <Col xs={24} md={10}>
            <Card
              style={{
                borderRadius: "20px",
                textAlign: "center",
                background: "#3b2f2f",
                color: "white",
              }}
            >
              <ReadOutlined style={{ fontSize: "72px", color: "#f7d794" }} />
              <Title level={3} style={{ color: "white", marginTop: "16px" }}>
                Digital Library System
              </Title>
              <Paragraph style={{ color: "#ddd" }}>
                A simple cloud-ready app built with Next.js, Prisma, and AWS.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 24]} style={{ marginTop: "48px" }}>
          <Col xs={24} md={8}>
            <Link href="/books" style={{ display: "block" }}>
              <Card hoverable style={{ borderRadius: "18px", cursor: "pointer" }}>
                <BookOutlined style={{ fontSize: "36px", color: "#8e5a2a" }} />
                  <Title level={4}>Book Catalog</Title>
                    <Paragraph>
                      View library books with ISBNs, genres, authors, and publishing information.
                    </Paragraph>
              </Card>
            </Link>
          </Col>
          <Col xs={24} md={8}>
            <Link href="/authors" style={{ display: "block" }}>
              <Card hoverable style={{ borderRadius: "18px", cursor: "pointer" }}>
                <UserOutlined style={{ fontSize: "36px", color: "#8e5a2a" }} />
                  <Title level={4}>Author Records</Title>
                    <Paragraph>
                      Keep track of authors and connect them to the books in the library collection.
                    </Paragraph>
              </Card>
            </Link>
          </Col>
          <Col xs={24} md={8}>
            <Link href="/reviews" style={{ display: "block" }}>
              <Card hoverable style={{ borderRadius: "18px", cursor: "pointer" }}>
                <StarOutlined style={{ fontSize: "36px", color: "#8e5a2a" }} />
                  <Title level={4}>Book Reviews</Title>
                    <Paragraph>
                      Store ratings and reviews so users can see what books are worth checking out.
                    </Paragraph>
              </Card>
            </Link>
          </Col>
        </Row>
      </section>
    </main>
  );
}