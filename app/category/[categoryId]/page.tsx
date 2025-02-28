"use client";

import { getCategoryById } from "@/api-client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

interface Post {
  content?: string;
  [key: string]: unknown; // Cho phép thêm các trường khác mà API trả về
}

export default function PostCategoryDetail() {
  const [post, setPost] = useState<Post | undefined>();
  const { categoryId } = useParams();

  useEffect(() => {
    if (!categoryId) return;
    const fetchPost = async () => {
      try {
        const data = await getCategoryById(categoryId as string);
        if (data) {
          setPost(data as Post);
        } else {
          console.error("Không tìm thấy bài viết");
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchPost();
  }, [categoryId]);
  if (!post) return <p>Không tìm thấy bài viết</p>;

  return (
    <main
      className="content"
      suppressHydrationWarning={true}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(post.content || ""),
      }}
    />
  );
}
