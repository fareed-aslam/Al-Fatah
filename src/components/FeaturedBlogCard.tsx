import Image from "next/image";
import { MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BlogPost {
  id: number;
  date: string;
  comments: number;
  title: string;
  description: string;
  image: string;
}

export default function FeaturedBlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-700">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4" />
            <span>Comments ({post.comments})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-6 line-clamp-2">
          {post.description}
        </p>

        {/* Button */}
        <Link href="/coming-soon">
          <Button className="w-max bg-teal-500 hover:bg-teal-600 text-white border-0">
            + Read More
          </Button>
        </Link>
      </div>
    </div>
  );
}
