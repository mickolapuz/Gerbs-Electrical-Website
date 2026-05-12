import type { SxProps, Theme } from "@mui/material";

import type { ProductBackTo, ProductImage } from "../Products/ProductsModel";

export interface ProductFeature {
  id: number;
  text: string;
}

export interface ProductSpecification {
  id: number;
  label: string;
  value: string;
}

export interface ProductDetailsModel {
  id: number;
  productName: string;
  slug?: string;
  brand: string;
  tagline?: string;
  description?: string;
  image: ProductImage;
  imageSx?: SxProps<Theme>;
  backTo: ProductBackTo;
  features?: ProductFeature[];
  specifications?: ProductSpecification[];
  applications?: string[];
}
