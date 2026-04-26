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
  Rate,
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

  return (
    <main style={{ minHeight: "100vh", padding: "48px", background: "#f5efe6" }}>
      <Link href="/">
        <Button icon={<HomeOutlined />}>Back Home</Button>
      </Link>

      <Title style={{ marginTop: "24px" }}>
        <StarOutlined /> Book Reviews
      </Title>

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
