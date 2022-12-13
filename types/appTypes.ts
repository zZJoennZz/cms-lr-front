interface PageList {
  id: number;
  pageName: string;
  pageSlug: string;
}

interface Pages {
  pages: PageList[];
}

interface Meta {
  pageTitle: string;
  metaDescription?: string;
  metaRobots?: string;
  metaKeywords?: string;
  otherMetaData?: string; //this will be meta HTML tags
}

interface PageContent {
  id: number;
  internalName: string;
  pageTitle: string;
  pageSlug: string;
  pageContent?: PageComponent[]; //this will be HTML format
  isHome: boolean;
  metaDescription?: string;
  metaRobots?: string;
  metaKeywords?: string;
  otherMetaData?: string; //this will be meta HTML tags
  isPublished: boolean;
}

interface PageContent1 {
  id: number;
  internalName: string;
  pageTitle: string;
  pageSlug: string;
  pageContent?: string; //this will be HTML format
  isHome: boolean;
  metaDescription?: string;
  metaRobots?: string;
  metaKeywords?: string;
  otherMetaData?: string; //this will be meta HTML tags
  isPublished: boolean;
}

interface PageComponent {
  id: number;
  name: string;
  content: string;
  isPublished: boolean;
}

interface ProductDetail {
  id: number;
  slug: string;
  productName: string;
  description: string;
  rating: number;
  sku: string;
  stocks: number;
  isAvailable: boolean;
  images: string[];
  category: number[];
}

interface Category {
  id: number;
  slug: string;
  categoryName: string;
}

export type {
  PageList,
  Pages,
  Meta,
  PageContent,
  PageContent1,
  PageComponent,
  ProductDetail,
  Category,
};
