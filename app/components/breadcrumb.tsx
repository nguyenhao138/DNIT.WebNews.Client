"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { getBreadcrumb } from "@/api-client/post-api";
import { BreadcrumbData, BreadcrumbItem } from "@/app/types";

const fetchPostData = async (postId: string) => {
  try {
    const data: BreadcrumbData = await getBreadcrumb(postId as string);
    if (!data) throw new Error("No data returned from API");
    return { name: data.name, categoryName: data.categoryName };
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

      const postid = pathname.split("/").pop(); // hoặc {postid} = useParams
      const post = await fetchPostData(postid as string);
      if (!post) {
        setBreadcrumbItems([]);
        return;
      }
      console.log(post);
      // Kiểm tra xem category cuối có trùng với post.name không
      // Use empty string as fallback if postName is undefined, empty array if categoryName is null
      const categories = post.categoryName ?? [];
      const postName = post.name ?? "";

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
  }, [pathname]);
  return (
    <div
      className="breadcrumb"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      <div className="wrap">
        {breadcrumbItems.map((item, index) => (
          <span
            key={item.href || item.label}
            className="breadcrumb-link-wrap"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index < breadcrumbItems.length - 1 ? (
              <Link
                className="breadcrumb-link"
                href={item.href || "#"}
                itemProp="item"
              >
                <span className="breadcrumb-link-text-wrap" itemProp="name">
                  <span className={index === 0 ? "home" : ""}>
                    {item.label}
                  </span>
                </span>
              </Link>
            ) : (
              <span className="breadcrumb-link-text-wrap" itemProp="name">
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(index + 1)} />
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
