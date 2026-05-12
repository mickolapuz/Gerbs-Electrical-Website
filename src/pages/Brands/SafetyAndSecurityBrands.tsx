import type { BrandsPageModel } from "./BrandsModel";

import GarrettLogo from "../../assets/Products/Logos/GARRETT.png";
import HanwhaVisionLogo from "../../assets/Products/Logos/HANWHAVISION.png";
import HIDLogo from "../../assets/Products/Logos/HID.png";
import SafewaySystemLogo from "../../assets/Products/Logos/SAFEWAYSYSTEM.png";
import DahuaLogo from "../../assets/Products/Logos/DAHUA.png";

const SAFETY_AND_SECURITY_BRANDS_CONFIG: BrandsPageModel = {
  page: "Safety and Seucrity",
  description:
    "Browse the safety and security brands we supply, covering trusted solutions for detection, inspection, surveillance, access control, parking control, and entrance management across different project requirements.",
  brands: [
    {
      id: 1,
      brand: "Garrett",
      description: `Garrett's security solutions are built on decades of innovation and cutting-edge technology. From walk-through metal detectors to handheld scanners, each product is engineered for precision, reliability, and ease of use in demanding security environments. Trusted worldwide by airports, schools, events, and law enforcement, Garrett delivers advanced tools that keep people safe.`,
      href: "/products/safety-and-security/garrett",
      logo: GarrettLogo,
    },
    {
      id: 2,
      brand: "Hanwha Vision",
      description: [
        {
          key: "Vision technology",
          value:
            "Hanwha Vision provides high-quality image and vision information through world-class optical and image processing technology.",
        },
        {
          key: "AI-based intelligent analysis",
          value:
            "Hanwha Vision offers AI-based intelligent solutions through self-developed analytics algorithms while providing optimized information to customers by efficiently analyzing vast amounts of data.",
        },
        {
          key: "Cybersecurity",
          value:
            "Hanwha Vision conducts regular security management under the leadership of S-CERT (a dedicated security emergency response team). Hanwha Vision has been selected as an international CVE program CNA organization to manage program vulnerabilities. In addition, we have obtained numerous cybersecurity certifications from renowned global certification such as UL CAP, FIPS, TTA and more.",
        },
      ],
      href: "/products/safety-and-security/hanwha-vision",
      logo: HanwhaVisionLogo,
    },
    {
      id: 3,
      brand: "HID",
      description:
        "HID’s hardware and software solutions help businesses, schools and governments in more than 100 countries secure access and allow insight into their people, places and things.",
      href: "/products/safety-and-security/hid",
      logo: HIDLogo,
    },
    {
      id: 4,
      brand: "Safeway System",
      description:
        "Safeway Inspection System Company Limited (Safeway System), established in 2008,  is one of the largest manufacturers and suppliers of X-Ray baggage scanners in China, with the widest product line of and EOD security equipment.",
      href: "/products/safety-and-security/safeway-system",
      logo: SafewaySystemLogo,
    },
    {
      id: 5,
      brand: "Dahua",
      description:
        "Zhejiang Dahua Technology Co., Ltd. (Dahua Technology) is a world-leading video-centric AIoT solution and service provider.",
      href: "/products/safety-and-security/dahua",
      logo: DahuaLogo,
    },
  ],
};

export default SAFETY_AND_SECURITY_BRANDS_CONFIG;
