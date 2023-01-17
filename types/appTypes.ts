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

interface Address {
  address1: string;
  address2: string;
  city: string;
  zip: string;
  province: string;
  country: string;
  address_type: string;
}

interface OrderDetail {
  product_variant: number;
  quantity: number;
  amount: number;
  discount: number;
  total_amount: number;
}

interface CustomerInfo {
  name: string;
  email_address: string;
  contact_number: string;
  address: Address[];
}

interface OrderFee {
  fee_type: string;
  amount: number;
}

interface CheckoutPayload {
  total_amount: number;
  total_discount: number;
  total_fees: number;
  order_amount: number;
  details: OrderDetail[];
  fees: OrderFee[];
  customer: CustomerInfo;
  account: string;
  payment_method: string;
  order_type: string;
  attachments: any;
}

interface CartList {
  id: number;
  product_name: string;
  qty: number;
  slug: string;
  image_url: string;
  price: number;
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
  CheckoutPayload,
  OrderDetail,
  OrderFee,
  CartList,
};
