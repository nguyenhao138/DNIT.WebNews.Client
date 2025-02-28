export interface Category {
  Id?: string;
  Name?: string;
  Description?: string;
  ParentId?: string;
  // SortOrder?: number;
  // IsActive?: boolean;
  [key: string]: string | number | boolean | null | undefined;
}

export interface PostList {
  Id?: string;
  Name?: string;
  Description?: string;
  ParentId?: string;
  // SortOrder?: number;
  // ShowInMenu?: boolean;
  // ShowInHome?: boolean;
  // Thumbnail?: string;
  // IsActive?: string;
  // Status?: string;
  [key: string]: string | number | boolean | null | undefined;
}

export interface Post {
  Id?: string;
  Name?: string;
  Description?: string;
  ParentId?: string; // Đảm bảo có parentId
  // SortOrder?: number;
  // ShowInMenu?: boolean;
  // ShowInHome?: boolean;
  // Thumbnail?: number;
  // IsActive?: boolean;
  // Status?: number;
  [key: string]: string | number | boolean | null | undefined;
}

export interface Breadcrumb {
  Id?: string;
  Name?: string;
  CategoryName?: string[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
