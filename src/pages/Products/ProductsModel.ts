import type { SxProps, Theme } from "@mui/material";

export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductBackTo {
  label: string;
  href: string;
}

export interface ProductItem {
  id: number;
  productName: string;
  tagline?: string;
  image: ProductImage;
  href: string;
  imageSx?: SxProps<Theme>;
}

export interface ProductGroup {
  id: number;
  groupName: string;
  description?: string;
  products: ProductItem[];
}

export interface ProductsPageModel {
  brand: string;
  description: string;
  logo: string;
  backTo: ProductBackTo;
  products?: ProductItem[];
  productGroups?: ProductGroup[];
}
