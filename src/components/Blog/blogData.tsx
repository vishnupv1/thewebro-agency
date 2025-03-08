import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Essential Features Every Business Website Needs",
    paragraph:
      "Discover the must-have features that can make your business website stand out and attract customers.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Alex Carter",
      image: "/images/blog/author-01.png",
      designation: "Web Developer",
    },
    tags: ["web development"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "How to Boost Your Website’s SEO for More Traffic",
    paragraph:
      "Learn simple yet powerful SEO techniques to improve your website’s visibility on search engines.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Emma Johnson",
      image: "/images/blog/author-02.png",
      designation: "SEO Expert",
    },
    tags: ["SEO", "marketing"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "E-Commerce Success: Tips for Increasing Online Sales",
    paragraph:
      "Explore expert strategies to optimize your e-commerce store for higher conversions and better user experience.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "David Lee",
      image: "/images/blog/author-03.png",
      designation: "E-Commerce Strategist",
    },
    tags: ["e-commerce", "business growth"],
    publishDate: "2025",
  },
];

export default blogData;
