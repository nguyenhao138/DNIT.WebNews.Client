"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { getBreadcrumb } from "@/api-client/post-api";
import { BreadcrumbItem } from "@/app/types";

const fetchPostData = async (postId: string) => {
  try {
    const data = await getBreadcrumb(postId as string);
    if (!data) throw new Error("No data returned from API");
    return {
      postName: data.Name,
      categoryName: data.CategoryName, // Mảng category cha-con
    };
  } catch (error) {
    console.error("Error fetching post data:", error);
    return null;
  }
};

const Breadcrumb = () => {
  const pathname = usePathname();
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([]);

  useEffect(() => {
    const generateBreadcrumb = async () => {
      // Nếu là trang Home (pathname === '/'), không hiển thị breadcrumb
      if (pathname === "/") {
        setBreadcrumbItems([]);
        return;
      }
      const postid = pathname.split("/").pop();
      // hoặc {postid} = useParams
      const post = await fetchPostData(postid as string);
      if (!post) {
        setBreadcrumbItems([]);
        return;
      }
      // Kiểm tra xem category cuối có trùng với post.name không
      // Use empty string as fallback if postName is undefined, empty array if categoryName is null
      const categories = post.categoryName ?? [];
      const postName = post.postName ?? "";

      const lastCategory = categories[categories.length - 1];
      const isLastCategorySameAsPostName =
        lastCategory && lastCategory.toLowerCase() === postName.toLowerCase();

      // Nếu category cuối trùng với post.name, loại bỏ category cuối
      const filteredCategories = isLastCategorySameAsPostName
        ? categories.slice(0, -1)
        : categories;

      // Tạo mảng breadcrumb items, luôn bắt đầu bằng Home
      setBreadcrumbItems([
        { label: "Home", href: "/" },
        ...filteredCategories.map((category, index) => ({
          label: category,
          href: `/category/${filteredCategories
            .slice(0, index + 1)
            .join("/")
            .toLowerCase()}`,
        })),
        { label: postName, href: pathname },
      ]);
    };

    generateBreadcrumb();
  });
  return (
    <div
      className="breadcrumb"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      <div className="wrap">
        {breadcrumbItems.map((item, index) => (
          <span key={item.href}>
            <span
              className="breadcrumb-link-wrap"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <Link
                className="breadcrumb-link"
                href={item.href ?? ""}
                itemProp="item"
              >
                <span className="breadcrumb-link-text-wrap" itemProp="name">
                  <span className={index === 0 ? "home" : ""}>
                    {item.label}
                  </span>
                </span>
              </Link>
              <meta itemProp="position" content={String(index + 1)} />
            </span>
            {index < breadcrumbItems.length - 1 && (
              <span aria-label="breadcrumb separator" className="separator">
                {" » "}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
