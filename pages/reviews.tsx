import Link from "next/link";
import { Card, Typography, Button, Row, Col, Rate } from "antd";
import { StarOutlined, HomeOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function ReviewsPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "48px", background: "#f5efe6" }}>
      <Link href="/">
        <Button icon={<HomeOutlined />}>Back Home</Button>
      </Link>

      <Title style={{ marginTop: "24px" }}>
        <StarOutlined /> Book Reviews
      </Title>

      <Paragraph>
        View ratings and review information for books in the library collection.
      </Paragraph>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <Card title="Ratings" hoverable>
            Display average ratings for books in the collection.
          </Card>
        </Col>

        
      </Row>
    </main>
  );
}