import type { ProductsPageModel } from "../ProductsModel";

import HanwhaVisionLogo from "../../../assets/Products/Logos/HANWHAVISION.png";

import PNMC16083RVQ from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/PNMC16083RVQ.png";
import PNMC32083RVQ from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/PNMC32083RVQ.png";
import PNOA9311R from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/PNOA9311R.png";

import XNPC8253R from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/XNPC8253R.png";
import XNPC8253 from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/XNPC8253.png";
import XNPC6403R from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/XNPC6403R.png";
import XNPC9310R from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/XNPC9310R.png";
import XNPC9253 from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/XNPC9253.png";
import XNPC6403 from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/XNPC6403.png";
import XNPC6403RW from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/XNPC6403RW.png";
import XNPC8303RW from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/XNPC8303RW.png";
import XNPC9303RW from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/XNPC9303RW.png";

import QND6011 from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/QND6011.png";
import QND6082R from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/QND6082R.png";
import QND7012R from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/QND7012R.png";
import QND6072R from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/QND6072R.png";
import QND6012R from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/QND6012R.png";

import TNOC3010TRA from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/TNOC3010TRA.png";
import TNMC3622TDR from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/TNMC3622TDR.png";
import TNMC4942TDR from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/TNMC4942TDR.png";
import TNVC8011RW from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/TNVC8011RW.png";
import TNOC8083E from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/TNOC8083E.png";
import TNV8011C from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/TNV8011C.png";
import TNOL4030T from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/TNOL4030T.png";
import TNO7180RLP from "../../../assets/Products/SafetyAndSecurity/HanhwaVision/TNO7180RLP.png";

const HANWHA_VISION_PRODUCTS_CONFIG: ProductsPageModel = {
  brand: "Hanwha Vision",
  description:
    "Browse Hanwha Vision CCTV and video surveillance products supplied by Gerb's Electrical Trading and Services, featuring different camera series designed for reliable monitoring, intelligent video analytics, wide-area coverage, and professional security applications.",
  logo: HanwhaVisionLogo,
  backTo: {
    label: "Safety and Security",
    href: "/products/safety-and-security",
  },
  productGroups: [
    {
      id: 1,
      groupName: "P-Series",
      products: [
        {
          id: 1,
          productName: "PNM-C16083RVQ",
          tagline: "4MP x 4ch AI Camera",
          image: {
            src: PNMC16083RVQ,
            alt: "Hanwha Vision PNM-C16083RVQ 4MP x 4ch AI Camera",
          },
          href: "/products/safety-and-security/hanwha-vision/pnm-c16083rvq",
        },
        {
          id: 2,
          productName: "PNM-C32083RVQ",
          tagline: "4K x 4ch AI Camera",
          image: {
            src: PNMC32083RVQ,
            alt: "Hanwha Vision PNM-C32083RVQ 4K x 4ch AI Camera",
          },
          href: "/products/safety-and-security/hanwha-vision/pnm-c32083rvq",
        },
        {
          id: 3,
          productName: "PNO-A9311R",
          tagline: "4K AI IR Bullet Camera",
          image: {
            src: PNOA9311R,
            alt: "Hanwha Vision PNO-A9311R 4K AI IR Bullet Camera",
          },
          href: "/products/safety-and-security/hanwha-vision/pno-a9311r",
        },
      ],
    },
    {
      id: 2,
      groupName: "X-Series",
      products: [
        {
          id: 1,
          productName: "XNP-C8253R",
          tagline: "6MP 25x AI IR PTZ PLUS Camera",
          image: {
            src: XNPC8253R,
            alt: "Hanwha Vision XNP-C8253R 6MP 25x AI IR PTZ PLUS Camera",
          },
          href: "products/safety-and-security/hanwha-vision/xnp-c8253r",
        },
        {
          id: 2,
          productName: "XNP-C8253",
          tagline: "6MP 25x AI PTZ PLUS Camera",
          image: {
            src: XNPC8253,
            alt: "Hanwha Vision XNP-C8253 6MP 25x AI PTZ PLUS Camera",
          },
          href: "products/safety-and-security/hanwha-vision/xnp-c8253",
        },
        {
          id: 3,
          productName: "XNP-C6403R",
          tagline: "2MP 40x AI IR PTZ PLUS Camera",
          image: {
            src: XNPC6403R,
            alt: "Hanwha Vision XNP-C6403R 2MP 40x AI IR PTZ PLUS Camera",
          },
          href: "products/safety-and-security/hanwha-vision/xnp-c6403r",
        },
        {
          id: 4,
          productName: "XNP-C9310R",
          tagline: "4K 31x AI FOCUS IR PTZ Camera",
          image: {
            src: XNPC9310R,
            alt: "Hanwha Vision XNP-C9310R 4K 31x AI FOCUS IR PTZ Camera",
          },
          href: "products/safety-and-security/hanwha-vision/xnp-c9310r",
        },
        {
          id: 5,
          productName: "XNP-C9253",
          tagline: "4K 25x AI PTZ PLUS Camera",
          image: {
            src: XNPC9253,
            alt: "Hanwha Vision XNP-C9253 4K 25x AI PTZ PLUS Camera",
          },
          href: "products/safety-and-security/hanwha-vision/xnp-c9253",
        },
        {
          id: 6,
          productName: "XNP-C6403",
          tagline: "2MP 40x AI PTZ PLUS Camera",
          image: {
            src: XNPC6403,
            alt: "Hanwha Vision XNP-C6403 2MP 40x AI PTZ PLUS Camera",
          },
          href: "products/safety-and-security/hanwha-vision/xnp-c6403",
        },
        {
          id: 7,
          productName: "XNP-C6403RW",
          tagline: "2MP 40x AI IR Wiper PTZ PLUS Camera",
          image: {
            src: XNPC6403RW,
            alt: "Hanwha Vision XNP-C6403RW 2MP 40x AI IR Wiper PTZ PLUS Camera",
          },
          href: "products/safety-and-security/hanwha-vision/xnp-c6403rw",
        },
        {
          id: 8,
          productName: "XNP-C8303RW",
          tagline: "6MP 30x AI IR Wiper PTZ PLUS Camera",
          image: {
            src: XNPC8303RW,
            alt: "Hanwha Vision XNP-C8303RW",
          },
          href: "products/safety-and-security/hanwha-vision/xnp-c8303rw",
        },
        {
          id: 9,
          productName: "XNP-C9303RW",
          tagline: "4K 30x AI IR Wiper PTZ PLUS Camera",
          image: {
            src: XNPC9303RW,
            alt: "Hanwha Vision XNP-C9303RW 4K 30x AI IR Wiper PTZ PLUS Camera",
          },
          href: "products/safety-and-security/hanwha-vision/xnp-c9303rw",
        },
      ],
    },
    {
      id: 3,
      groupName: "Q-Series",
      products: [
        {
          id: 1,
          productName: "QND-6011",
          tagline: "2M H.265 Dome Camera(Q mini)",
          image: {
            src: QND6011,
            alt: "Hanwha Vision QND-6011 2M H.265 Dome Camera(Q mini)",
          },
          href: "products/safety-and-security/hanwha-vision/qnd-6011",
        },
        {
          id: 2,
          productName: "QND-6082R",
          tagline: "2M H.265 IR Dome Camera",
          image: {
            src: QND6082R,
            alt: "Hanwha Vision QND-6082R",
          },
          href: "products/safety-and-security/hanwha-vision/qnd-6082r",
        },
        {
          id: 3,
          productName: "QND-7012R",
          tagline: "4MP IR Dome Camera",
          image: {
            src: QND7012R,
            alt: "Hanwha Vision QND-7012R 4MP IR Dome Camera",
          },
          href: "products/safety-and-security/hanwha-vision/qnd-7012r",
        },
        {
          id: 4,
          productName: "QND-6072R",
          tagline: "2M H.265 IR Dome Camera",
          image: {
            src: QND6072R,
            alt: "Hanwha Vision QND-6072R 2M H.265 IR Dome Camera",
          },
          href: "products/safety-and-security/hanwha-vision/qnd-6072r",
        },
        {
          id: 5,
          productName: "QND-6012R",
          tagline: "2M H.265 IR Dome Camera",
          image: {
            src: QND6012R,
            alt: "Hanwha Vision QND-6012R 2M H.265 IR Dome Camera",
          },
          href: "products/safety-and-security/hanwha-vision/qnd-6012r",
        },
      ],
    },
    {
      id: 4,
      groupName: "T-Series",
      products: [
        {
          id: 1,
          productName: "TNO-C3010TRA",
          tagline: "QVGA Radiometric AI Thermal Camera",
          image: {
            src: TNOC3010TRA,
            alt: "Hanwha Vision TNO-C3010TRA QVGA Radiometric AI Thermal Camera",
          },
          href: "products/safety-and-security/hanwha-vision/tno-c3010tra",
        },
        {
          id: 2,
          productName: "TNM-C3622TDR",
          tagline: "Bi-Spectrum AI Thermal Camera",
          image: {
            src: TNMC3622TDR,
            alt: "Hanwha Vision TNM-C3622TDR",
          },
          href: "products/safety-and-security/hanwha-vision/tnm-c3622tdr",
        },
        {
          id: 3,
          productName: "TNM-C4942TDR",
          tagline: "Bi-spectrum AI IR Thermal Camera",
          image: {
            src: TNMC4942TDR,
            alt: "Hanwha Vision TNM-C4942TDR",
          },
          href: "products/safety-and-security/hanwha-vision/tnm-c4942tdr",
        },
        {
          id: 4,
          productName: "TNV-C8011RW",
          tagline: "5MP AI IR Wall Mount Camera",
          image: {
            src: TNVC8011RW,
            alt: "Hanwha Vision TNV-C8011RW",
          },
          href: "products/safety-and-security/hanwha-vision/tnv-c8011rw",
        },
        {
          id: 5,
          productName: "TNO-C8083E",
          tagline: "5MP Compact Explosion-proof AI Camera",
          image: {
            src: TNOC8083E,
            alt: "Hanwha Vision TNO-C8083E",
          },
          href: "products/safety-and-security/hanwha-vision/tno-c8083e",
        },
        {
          id: 6,
          productName: "TNV-8011C",
          tagline: "5MP Corner Mount Camera",
          image: {
            src: TNV8011C,
            alt: "Hanwha Vision TNV-8011C",
          },
          href: "products/safety-and-security/hanwha-vision/tnv-8011c",
        },
        {
          id: 7,
          productName: "TNO-L4030T",
          tagline: "VGA H.265 Thermal Camera",
          image: {
            src: TNOL4030T,
            alt: "Hanwha Vision TNO-L4030T",
          },
          href: "products/safety-and-security/hanwha-vision/tno-l4030t",
        },
        {
          id: 8,
          productName: "TNO-7180RLP",
          tagline: "High-speed License Plate Capture Camera",
          image: {
            src: TNO7180RLP,
            alt: "Hanwha Vision TNO-7180RLP",
          },
          href: "products/safety-and-security/hanwha-vision/tno-7180rlp",
        },
      ],
    },
  ],
};

export default HANWHA_VISION_PRODUCTS_CONFIG;
