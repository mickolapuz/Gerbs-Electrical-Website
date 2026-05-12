interface DescriptionKVP {
  key: string;
  value: string;
}

interface Brands {
  id: number;
  brand: string;
  description: string | DescriptionKVP[];
  href: string;
  logo: string;
}

export interface BrandsPageModel {
  page: string;
  description: string;
  brands: Brands[];
}
