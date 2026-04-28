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
  Rate,
  Form,
  message,
  Modal,
} from "antd";
import {
  HomeOutlined,
  SearchOutlined,
  StarOutlined,
} from "@ant-design/icons";
import type { BookReview, Book } from "@prisma/client";
import prisma from "@/model/db";

const { Title, Paragraph, Text } = Typography;

type ReviewsPageProps = {
  reviews: BookReview[];
  books: Book[];
};

export default function ReviewsPage({ reviews, books }: ReviewsPageProps) {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("ALL");
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [form] = Form.useForm();

  const bookMap = useMemo(
    () => new Map(books.map((book) => [book.id, book.title])),
    [books]
  );

  const filteredReviews = useMemo(() => {
    return reviews.filter((review) => {
      const bookTitle = bookMap.get(review.bookId) ?? "Unknown book";

      const searchText = `${review.reviewerName} ${review.review} ${bookTitle}`.toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());
      const matchesRating =
        rating === "ALL" || review.rating === Number(rating);

      return matchesSearch && matchesRating;
    });
  }, [reviews, search, rating, bookMap]);

  const handleSubmitReview = async (values: {
    reviewerName: string;
    review: string;
    rating: number;
    bookId: number;
  }) => {
    const response = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      message.error("Failed to submit review.");
      return;
    }

    message.success("Review submitted!");
    form.resetFields();
    setIsReviewModalOpen(false);
    window.location.reload();
  };

  return (
    <main style={{ minHeight: "100vh", padding: "48px", background: "#f5efe6" }}>
      <Link href="/">
        <Button icon={<HomeOutlined />}>Back Home</Button>
      </Link>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "24px",
          marginBottom: "8px",
        }}
      >
        <Title style={{ margin: 0 }}>
          <StarOutlined /> Book Reviews
        </Title>

        <Button type="primary" onClick={() => setIsReviewModalOpen(true)}>
          Write a Review
        </Button>
      </div>

      <Paragraph>Browse reviews by book title, reviewer, rating, and review text.</Paragraph>

      <Card style={{ borderRadius: "18px", marginBottom: "24px" }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Input
              size="large"
              prefix={<SearchOutlined />}
              placeholder="Search reviews..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>

          <Col xs={24} md={6}>
            <Select
              size="large"
              style={{ width: "100%" }}
              value={rating}
              onChange={setRating}
              options={[
                { value: "ALL", label: "All Ratings" },
                { value: "5", label: "5 Stars" },
                { value: "4", label: "4 Stars" },
                { value: "3", label: "3 Stars" },
                { value: "2", label: "2 Stars" },
                { value: "1", label: "1 Star" },
              ]}
            />
          </Col>

          <Col xs={24} md={6}>
            <Button
              size="large"
              block
              onClick={() => {
                setSearch("");
                setRating("ALL");
              }}
            >
              Clear Filters
            </Button>
          </Col>
        </Row>
      </Card>

      <Row gutter={[24, 24]}>
        {filteredReviews.map((review) => {
          const bookTitle = bookMap.get(review.bookId) ?? "Unknown book";

          return (
            <Col xs={24} md={12} lg={8} key={review.id}>
              <Card hoverable style={{ borderRadius: "18px" }}>
                <Title level={4}>{bookTitle}</Title>

                <Text strong>Reviewed by {review.reviewerName}</Text>

                <br />

                <Rate disabled value={review.rating} style={{ marginTop: "8px" }} />

                <Paragraph style={{ marginTop: "12px" }}>
                  {review.review}
                </Paragraph>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Modal
        title="Write a Review"
        open={isReviewModalOpen}
        onCancel={() => setIsReviewModalOpen(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmitReview}>
          <Form.Item
            label="Your Name"
            name="reviewerName"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Reviewer name" />
          </Form.Item>

          <Form.Item
            label="Book"
            name="bookId"
            rules={[{ required: true, message: "Please select a book" }]}
          >
            <Select
              placeholder="Select a book"
              options={books.map((book) => ({
                value: book.id,
                label: book.title,
              }))}
            />
          </Form.Item>

          <Form.Item
            label="Rating"
            name="rating"
            rules={[{ required: true, message: "Please select a rating" }]}
          >
            <Rate />
          </Form.Item>

          <Form.Item
            label="Review"
            name="review"
            rules={[{ required: true, message: "Please write a review" }]}
          >
            <Input.TextArea rows={4} placeholder="Write your review..." />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Submit Review
          </Button>
        </Form>
      </Modal>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<ReviewsPageProps> = async () => {
  const reviews = await prisma.bookReview.findMany();
  const books = await prisma.book.findMany();

  return {
    props: {
      reviews,
      books,
    },
  };
};
