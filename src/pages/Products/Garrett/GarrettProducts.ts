import type { ProductsPageModel } from "../ProductsModel";
import GarrettLogo from "../../../assets/Products/Logos/GARRETT.png";

import GarrettParagon from "../../../assets/Products/SafetyAndSecurity/Garrett/Garrett Paragon.png";
import GarrettPD6500i from "../../../assets/Products/SafetyAndSecurity/Garrett/Garrett PD 6500i.png";
import GarrettMultiZone from "../../../assets/Products/SafetyAndSecurity/Garrett/Garrett Multi-Zone.png";
import GarrettSuperScannerV from "../../../assets/Products/SafetyAndSecurity/Garrett/Garrett Super Scanner V.png";
import GarrettSuperWand from "../../../assets/Products/SafetyAndSecurity/Garrett/Garrett SuperWand.png";
import GarrettTHD from "../../../assets/Products/SafetyAndSecurity/Garrett/Garrett THD.png";
import GarrettGuide from "../../../assets/Products/SafetyAndSecurity/Garrett/Garrett Guide.png";

const GARRETT_PRODUCTS_CONFIG: ProductsPageModel = {
  brand: "Garrett",
  description:
    "Browse Garrett safety and security products supplied by Gerb's Electrical Trading and Services, including walk-through metal detectors, handheld scanners, and screening solutions designed for reliable threat detection in demanding security environments.",
  logo: GarrettLogo,
  backTo: {
    label: "Safety and Security",
    href: "/products/safety-and-security",
  },
  products: [
    {
      id: 1,
      productName: "Garrett Paragon™",
      tagline: "THE PINNACLE OF PERFORMANCE",
      image: {
        src: GarrettParagon,
        alt: "Garrett Paragon™ walk-through metal detector",
      },
      href: "/products/safety-and-security/garrett/garrett-paragon",
    },
    {
      id: 2,
      productName: "Garrett PD 6500i™",
      tagline: "WORLD'S MOST CERTIFIED DETECTOR",
      image: {
        src: GarrettPD6500i,
        alt: "Garrett PD 6500i™ walk-through metal detector",
      },
      href: "/products/safety-and-security/garrett/garrett-pd-6500i",
    },
    {
      id: 3,
      productName: "Garrett Multi-Zone™",
      tagline: "AMERICAN QUALITY, GLOBAL PRICE",
      image: {
        src: GarrettMultiZone,
        alt: "Garrett Multi-Zone™ walk-through metal detector",
      },
      href: "/products/safety-and-security/garrett/garrett-multi-zone",
    },
    {
      id: 4,
      productName: "Garrett Super Scanner V™",
      tagline: "WORLD’S MOST POPULAR DETECTOR",
      image: {
        src: GarrettSuperScannerV,
        alt: "Garrett Super Scanner V™ handheld metal detector",
      },
      href: "/products/safety-and-security/garrett/garrett-super-scanner-v",
    },
    {
      id: 5,
      productName: "Garrett SuperWand™",
      tagline: "THE TSA’S CHOICE",
      image: {
        src: GarrettSuperWand,
        alt: "Garrett SuperWand™ handheld metal detector",
      },
      href: "/products/safety-and-security/garrett/garrett-superwand",
    },
    {
      id: 6,
      productName: "Garrett THD™",
      tagline: "THREAT DETECTION FOR OFFICER PROTECTION",
      image: {
        src: GarrettTHD,
        alt: "Garrett THD™ tactical handheld metal detector",
      },
      href: "/products/safety-and-security/garrett/garrett-thd",
    },
    {
      id: 7,
      productName: "Garrett Guide™",
      tagline: "NEXT-GENERATION HAND-HELD SECURITY",
      image: {
        src: GarrettGuide,
        alt: "Garrett Guide security screening product",
      },
      href: "/products/safety-and-security/garrett/garrett-guide",
    },
  ],
};

export default GARRETT_PRODUCTS_CONFIG;
