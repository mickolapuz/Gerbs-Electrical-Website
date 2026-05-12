import type { ProductsPageModel } from "../ProductsModel";

import DahuaLogo from "../../../assets/Products/Logos/DAHUA.png";

import IPMECD3012 from "../../../assets/Products/SafetyAndSecurity/Dahua/IPMECD-3012.png";
import IPMECD3011 from "../../../assets/Products/SafetyAndSecurity/Dahua/IPMECD-3011.png";

import ASGB9XXSX from "../../../assets/Products/SafetyAndSecurity/Dahua/ASGB9XXS-X.png";
import ASGY5XXCX from "../../../assets/Products/SafetyAndSecurity/Dahua/ASGY5XXC-X.png";
import ASGG5XXT from "../../../assets/Products/SafetyAndSecurity/Dahua/ASGG5XXT.png";
import ASGQ520C from "../../../assets/Products/SafetyAndSecurity/Dahua/ASGQ520C.png";

const DAHUA_PRODUCTS_CONFIG: ProductsPageModel = {
  brand: "Dahua",
  description:
    "Explore Dahua access control and entrance security solutions supplied by Gerb's Electrical Trading and Services, including parking barriers and turnstile systems for reliable vehicle and pedestrian access management.",
  logo: DahuaLogo,
  backTo: {
    label: "Safety and Security",
    href: "/products/safety-and-security",
  },
  productGroups: [
    {
      id: 1,
      groupName: "Parking Barrier",
      products: [
        {
          id: 1,
          productName: "IPMECD-3012",
          tagline: "Straight Arm Barrier",
          image: {
            src: IPMECD3012,
            alt: "Dahua IPMECD3012",
          },
          href: "/products/safety-and-security/dahua/ipmecd-3012",
        },
        {
          id: 2,
          productName: "IPMECD-3011",
          tagline: "Folding Arm Barrier",
          image: {
            src: IPMECD3011,
            alt: "Dahua IPMECD3011",
          },
          href: "/products/safety-and-security/dahua/ipmecd-3011",
        },
      ],
    },
    {
      id: 2,
      groupName: "Turnstiles",
      products: [
        {
          id: 1,
          productName: "ASGB9XXS-X",
          tagline: "Swing Barrier",
          image: {
            src: ASGB9XXSX,
            alt: "Dahua ASGB9XXSX",
          },
          href: "/products/safety-and-security/dahua/asgb9xxs-x",
        },
        {
          id: 2,
          productName: "ASGY5XXC-X",
          tagline: "Flap Barrier",
          image: {
            src: ASGY5XXCX,
            alt: "Dahua ASGY5XXCX",
          },
          href: "/products/safety-and-security/dahua/asgy5xxc-x",
        },
        {
          id: 3,
          productName: "ASGG5XXT",
          tagline: "Tripod Turnstile",
          image: {
            src: ASGG5XXT,
            alt: "Dahua ASGG5XXT",
          },
          href: "/products/safety-and-security/dahua/asgg5xxt",
        },
        {
          id: 4,
          productName: "ASGQ520C",
          tagline: "Full Height Turnstile",
          image: {
            src: ASGQ520C,
            alt: "Dahua ASGQ520C",
          },
          href: "/products/safety-and-security/dahua/asgq520c",
        },
      ],
    },
  ],
};

export default DAHUA_PRODUCTS_CONFIG;
