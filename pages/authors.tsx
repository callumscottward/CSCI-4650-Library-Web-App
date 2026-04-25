import Link from "next/link";
import { Card, Typography, Button, Row, Col } from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function AuthorsPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "48px", background: "#f5efe6" }}>
      <Link href="/">
        <Button icon={<HomeOutlined />}>Back Home</Button>
      </Link>

      <Title style={{ marginTop: "24px" }}>
        <UserOutlined /> Authors
      </Title>

      <Paragraph>
        Manage author records and connect them to books in the library catalog.
      </Paragraph>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <Card title="Author Profiles" hoverable>
            Store names, biographies, and related book records.
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card title="Book Connections" hoverable>
            See which authors are connected to which books.
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card title="Library Records" hoverable>
            Keep author data organized across the system.
          </Card>
        </Col>
      </Row>
    </main>
  );
}