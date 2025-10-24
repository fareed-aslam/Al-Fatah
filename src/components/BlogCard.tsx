import Image from "next/image";
import { Plus } from "lucide-react";
import { MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: number;
  date: string;
  comments: number;
  title: string;
  description: string;
  image: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-200">
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
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
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
        <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-2">
          {post.description}
        </p>

        {/* Footer */}
        <Link href="/coming-soon">
          <button className="w-max text-gray-400 hover:text-gray-600 transition-colors">
            <Plus className="w-6 h-6" />
          </button>
        </Link>
      </div>
    </div>
  );
}
