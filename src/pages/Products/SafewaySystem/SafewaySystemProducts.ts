import type { ProductsPageModel } from "../ProductsModel";

import SafewaySystemLogo from "../../../assets/Products/Logos/SAFEWAYSYSTEM.png";

import AT5030A from "../../../assets/Products/SafetyAndSecurity/SafewaySystem/AT5030A.png";
import AT4233A from "../../../assets/Products/SafetyAndSecurity/SafewaySystem/AT4233A.png";

import MD300 from "../../../assets/Products/SafetyAndSecurity/SafewaySystem/MD300.png";
import AT2009 from "../../../assets/Products/SafetyAndSecurity/SafewaySystem/AT2009.png";
import AT2008 from "../../../assets/Products/SafetyAndSecurity/SafewaySystem/AT2008.png";

import AT9000 from "../../../assets/Products/SafetyAndSecurity/SafewaySystem/AT9000.png";
import AT300A from "../../../assets/Products/SafetyAndSecurity/SafewaySystem/AT300A.png";
import AT300C from "../../../assets/Products/SafetyAndSecurity/SafewaySystem/AT300C.png";

const SAFEWAY_SYSTEMS_PRODUCTS_CONFIG: ProductsPageModel = {
  brand: "Safeway Systems",
  description:
    "Explore Safeway Systems security screening solutions supplied by Gerb's Electrical Trading and Services, including X-ray bag scanners, handheld metal detectors, and walkthrough metal detectors for reliable facility protection and access screening.",
  logo: SafewaySystemLogo,
  backTo: {
    label: "Safety and Security",
    href: "/products/safety-and-security",
  },
  productGroups: [
    {
      id: 1,
      groupName: "X-Ray Bag Scanners",
      products: [
        {
          id: 1,
          productName: "AT5030A",
          tagline: "Tunnel Size: 50x30cm (WxH)",
          image: {
            src: AT5030A,
            alt: "Safeway Systems AT5030A",
          },
          href: "/products/safety-and-security/safeway-systems/at5030a",
        },
        {
          id: 2,
          productName: "AT4233A",
          tagline: "Tunnel Size: 42x33cm (WxH)",
          image: {
            src: AT4233A,
            alt: "Safeway Systems AT4233A",
          },
          href: "/products/safety-and-security/safeway-systems/at4233a",
        },
      ],
    },
    {
      id: 2,
      groupName: "Handheld Metal Detectors",
      products: [
        {
          id: 1,
          productName: "MD300",
          tagline: "Portable Security Screening",
          image: {
            src: MD300,
            alt: "Safeway Systems MD300",
          },
          href: "/products/safety-and-security/safeway-systems/md300",
        },
        {
          id: 2,
          productName: "AT2009",
          tagline: "Handheld Metal Detection",
          image: {
            src: AT2009,
            alt: "Safeway Systems AT2009",
          },
          href: "/products/safety-and-security/safeway-systems/at2009",
        },
        {
          id: 3,
          productName: "AT2008",
          tagline: "Compact Security Inspection",
          image: {
            src: AT2008,
            alt: "Safeway Systems AT2008",
          },
          href: "/products/safety-and-security/safeway-systems/at2008",
        },
      ],
    },
    {
      id: 3,
      groupName: "Walkthrough Metal Detectors",
      products: [
        {
          id: 1,
          productName: "AT9000",
          tagline: "12 Zones",
          image: {
            src: AT9000,
            alt: "AT9000 walkthrough metal detector",
          },
          href: "/products/safety-and-security/safeway-systems/at9000",
          imageSx: {
            maxHeight: {
              xs: "60%",
              md: "62%",
            },
            transform: {
              xs: "translateY(-40px)",
              md: "translateY(-50px)",
            },
          },
        },
        {
          id: 2,
          productName: "AT300A",
          tagline: "6-12-18 Zones",
          image: {
            src: AT300A,
            alt: "Safeway Systems AT300A",
          },
          href: "/products/safety-and-security/safeway-systems/at300a",
        },
        {
          id: 3,
          productName: "AT300C",
          tagline: "24/33 Zones",
          image: {
            src: AT300C,
            alt: "Safeway Systems AT300C",
          },
          href: "/products/safety-and-security/safeway-systems/at300c",
        },
      ],
    },
  ],
};

export default SAFEWAY_SYSTEMS_PRODUCTS_CONFIG;
