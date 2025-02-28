"use client";

import { getPostById } from "@/api-client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

interface Post {
  content?: string;
  [key: string]: unknown; // Cho phép thêm các trường khác mà API trả về
}

export default function PostDetail() {
  const [post, setPost] = useState<Post | null>(null);
  const { postId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!postId) return;
    const fetchPost = async () => {
      try {
        const data = await getPostById(postId as string);
        if (data) {
          setPost(data as Post);
        } else {
          console.error("Không tìm thấy bài viết");
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);
  if (loading) return <p>Loading...</p>;

  if (!post) return <p>Không tìm thấy bài viết</p>;
  return (
    <main
      className="content"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(post.content || "", {
          ADD_ATTR: ["itemscope", "itemtype", "itemprop"], // Cho phép giữ các thuộc tính này
        }),
      }}
    />
  );
}
