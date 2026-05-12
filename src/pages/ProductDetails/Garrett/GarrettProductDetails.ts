import GarrettParagon from "../../../assets/Products/SafetyAndSecurity/Garrett/Garrett Paragon.png";
import GarrettPD6500i from "../../../assets/Products/SafetyAndSecurity/Garrett/Garrett PD 6500i.png";
import GarrettMultiZone from "../../../assets/Products/SafetyAndSecurity/Garrett/Garrett Multi-Zone.png";
import GarrettSuperScannerV from "../../../assets/Products/SafetyAndSecurity/Garrett/Garrett Super Scanner V.png";
import GarrettSuperWand from "../../../assets/Products/SafetyAndSecurity/Garrett/Garrett SuperWand.png";
import GarrettTHD from "../../../assets/Products/SafetyAndSecurity/Garrett/Garrett THD.png";
import GarrettGuide from "../../../assets/Products/SafetyAndSecurity/Garrett/Garrett Guide.png";

import type { ProductDetailsModel } from "../../ProductDetails/ProductDetailsModel";

const GARRETT_PRODUCT_DETAILS_CONFIG: ProductDetailsModel[] = [
  {
    id: 1,
    productName: "Garrett Paragon™",
    brand: "Garrett",
    tagline: "THE PINNACLE OF PERFORMANCE",
    image: {
      src: GarrettParagon,
      alt: "Garrett Paragon™ walk-through metal detector",
    },
    backTo: {
      label: "Garrett Products",
      href: "/products/safety-and-security/garrett",
    },
    features: [
      {
        id: 1,
        text: "66 Zones: Paragon brings with it an industry-leading 66 zones, with left, center, and right identification of targets across 22 horizontal bands.",
      },
      {
        id: 2,
        text: "Ambiscan: With Ambiscan, one detector does the work of two. This Paragon feature allows supervisors to set two distinct programs and sensitivities based on the direction of traffic.",
      },
      {
        id: 3,
        text: "Bilateral Detection: Paragon has dual transmit and receive capability in both panels, a Garrett industry exclusive.",
      },
      {
        id: 4,
        text: "Quick-Q™: Optional settings allow cell phones to be ignored while still catching mass casualty weapons.",
      },
      {
        id: 5,
        text: "NFC Zero Touch: NFC card reader allows touchless settings adjustment.",
      },
    ],
  },
  {
    id: 2,
    productName: "Garrett PD 6500i™",
    brand: "Garrett",
    tagline: "WORLD’S MOST CERTIFIED DETECTOR",
    image: {
      src: GarrettPD6500i,
      alt: "Garrett PD 6500i™ walk-through metal detector",
    },
    backTo: {
      label: "Garrett Products",
      href: "/products/safety-and-security/garrett",
    },
    features: [
      {
        id: 1,
        text: "PD 6500i meets the world’s highest test certifications, including the following international airports: TSA (USA Airports), ECAC (European Airports), Aena (Spain Airports), DfT (U.K. Airports), and STAC (French Airports).",
      },
      {
        id: 2,
        text: "Tested and Trusted: Proven the world over in applications ranging from schools and sports arenas to airports and prisons.",
      },
      {
        id: 3,
        text: "Optimum performance: 20-plus programs to address the needs of mass transit, courthouses, prisons, schools, events, loss prevention, and more.",
      },
      {
        id: 4,
        text: "33-Zone pinpointing: Left/Center/Right identification across 11 vertical zones.",
      },
      {
        id: 5,
        text: "Integration-friendly: Manage, observe, analyze, and connect with optional integration accessories.",
      },
    ],
  },
  {
    id: 3,
    productName: "Garrett Multi-Zone™",
    brand: "Garrett",
    tagline: "AMERICAN QUALITY, GLOBAL PRICE",
    image: {
      src: GarrettMultiZone,
      alt: "Garrett Multi-Zone™ walk-through metal detector",
    },
    backTo: {
      label: "Garrett Products",
      href: "/products/safety-and-security/garrett",
    },
    features: [
      {
        id: 1,
        text: "20-Zone pinpointing: The Multi Zone’s twenty vertical zones provide precise location of one or more objects simultaneously.",
      },
      {
        id: 2,
        text: "Advanced features, simple controls: Menu slider bar allows quick adjustment of setting values. Auto-Setup function scans electromagnetic environment to select optimal frequency.",
      },
      {
        id: 3,
        text: "Entry zone lights: View zone location from the ingress side, egress side, or both with precise LED clarity.",
      },
      {
        id: 4,
        text: "Standard battery backup: The Multi Zone comes with a 1.8Ah emergency battery to prevent disruption of security due to power outages or accidental power cord disconnects.",
      },
      {
        id: 5,
        text: "Budget-friendly security: Get Garrett quality at an entry-level price.",
      },
    ],
  },
  {
    id: 4,
    productName: "Garrett Super Scanner V™",
    brand: "Garrett",
    tagline: "WORLD’S MOST POPULAR DETECTOR",
    image: {
      src: GarrettSuperScannerV,
      alt: "Garrett Super Scanner V™ handheld metal detector",
    },
    backTo: {
      label: "Garrett Products",
      href: "/products/safety-and-security/garrett",
    },
    features: [
      {
        id: 1,
        text: "Iconic hand-scanner that built the secondary screening category.",
      },
      {
        id: 2,
        text: "Ideal for most secondary screening applications, challenging environmental conditions.",
      },
      {
        id: 3,
        text: "Extremely durable with reliable high-sensitivity detection.",
      },
    ],
  },
  {
    id: 5,
    productName: "Garrett SuperWand™",
    brand: "Garrett",
    tagline: "THE TSA’S CHOICE",
    image: {
      src: GarrettSuperWand,
      alt: "Garrett SuperWand™ handheld metal detector",
    },
    backTo: {
      label: "Garrett Products",
      href: "/products/safety-and-security/garrett",
    },
    features: [
      {
        id: 1,
        text: "Maximum ease-of-use secondary screening.",
      },
      {
        id: 2,
        text: "Improved ergonomics to reduce staff fatigue.",
      },
      {
        id: 3,
        text: "Ideal for high-speed screening environments and for use with minimally trained staff.",
      },
    ],
  },
  {
    id: 6,
    productName: "Garrett THD™",
    brand: "Garrett",
    tagline: "THREAT DETECTION FOR OFFICER PROTECTION",
    image: {
      src: GarrettTHD,
      alt: "Garrett THD™ tactical handheld metal detector",
    },
    backTo: {
      label: "Garrett Products",
      href: "/products/safety-and-security/garrett",
    },
    features: [
      {
        id: 1,
        text: "High-sensitivity detection in a portable package.",
      },
      {
        id: 2,
        text: "Tip flashlight for hands-free bag checks.",
      },
      {
        id: 3,
        text: "Detector of choice for security on-the-go.",
      },
      {
        id: 4,
        text: "Patrol-ready IP 66 construction.",
      },
    ],
  },
  {
    id: 7,
    productName: "Garrett Guide™",
    brand: "Garrett",
    tagline: "NEXT-GENERATION HAND-HELD SECURITY",
    image: {
      src: GarrettGuide,
      alt: "Garrett Guide™ handheld security detector",
    },
    backTo: {
      label: "Garrett Products",
      href: "/products/safety-and-security/garrett",
    },
    features: [
      {
        id: 1,
        text: "Simple, intuitive operation.",
      },
      {
        id: 2,
        text: "Seven selectable sensitivity levels.",
      },
      {
        id: 3,
        text: "Multiple controls for interference elimination.",
      },
      {
        id: 4,
        text: "Refined styling yet rugged IP 65 construction.",
      },
      {
        id: 5,
        text: "Integrated 125-hour Li-Ion battery.",
      },
      {
        id: 6,
        text: "USB-C rechargeable.",
      },
    ],
  },
];

export default GARRETT_PRODUCT_DETAILS_CONFIG;
