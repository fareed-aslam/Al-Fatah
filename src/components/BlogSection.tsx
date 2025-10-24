import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "./BlogCard";
import Link from "next/link";

import FeaturedBlogCard from "./FeaturedBlogCard";
const blogPosts = [
  {
    id: 1,
    date: "23 Oct 2025",
    comments: 3,
    title: "The Benefits of Regular Dental Checkups",
    description:
      "Regular dental checkups help maintain oral health, prevent issues early, and ensure a bright, healthy smile for life",
    image: "/blog1.png",
  },
  {
    id: 2,
    date: "20 Oct 2025",
    comments: 4,
    title: "Why Dental Implants Are the Best Solution for Missing Teeth",
    description:
      "Dental implants provide a durable, natural-looking solution for missing teeth, restoring confidence, function, and a complete smile.",
    image: "/blog2.png",
    featured: true,
  },
  {
    id: 3,
    date: "18 Oct 2025",
    comments: 2,
    title: "Top Tips for Maintaining Your Braces or Aligners",
    description:
      "Proper care of braces or invisible aligners ensures effective results, prevents complications, and keeps your teeth healthy throughout treatment.",
    image: "/blog3.png",
  },
];

export default function BlogNewsSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <div>
            <p className="text-sm font-semibold text-muted-foreground tracking-widest mb-3">
              NEWS & BLOG
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Read Our Blog</span>
              <span className="text-muted-foreground"> & News</span>
            </h2>
          </div>
          <Link href="/coming-soon">
            <Button
              variant="outline"
              className="w-fit bg-slate-500 hover:bg-slate-600 text-white border-0"
            >
              View All Blogs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) =>
            post.featured ? (
              <FeaturedBlogCard key={post.id} post={post} />
            ) : (
              <BlogCard key={post.id} post={post} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
