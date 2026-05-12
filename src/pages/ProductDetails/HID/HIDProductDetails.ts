import BiometricFacialRecognitionReader from "../../../assets/Products/SafetyAndSecurity/HID/HID® Amico™ Biometric Facial Recognition Reader.png";
import BiometricReader25B from "../../../assets/Products/SafetyAndSecurity/HID/HID® Signo™ Biometric Reader 25B.png";
import ExpressReader from "../../../assets/Products/SafetyAndSecurity/HID/HID® Signo™ Express Reader.png";
import KeypadReader20K from "../../../assets/Products/SafetyAndSecurity/HID/HID® Signo™ Keypad Reader 20K.png";
import KeypadReader40K from "../../../assets/Products/SafetyAndSecurity/HID/HID® Signo™ Keypad Reader 40K.png";
import MechanicalKeypadReader40T from "../../../assets/Products/SafetyAndSecurity/HID/HID® Signo™ Mechanical Keypad Reader 40T.png";
import Reader20 from "../../../assets/Products/SafetyAndSecurity/HID/HID® Signo™ Reader 20.png";
import Reader40 from "../../../assets/Products/SafetyAndSecurity/HID/HID® Signo™ Reader 40.png";

import SeosCard from "../../../assets/Products/SafetyAndSecurity/HID/SeosCard.png";

import FargoHDP6600 from "../../../assets/Products/SafetyAndSecurity/HID/HID Fargo HDP6600.png";
import FargoDTC1500 from "../../../assets/Products/SafetyAndSecurity/HID/HID Fargo DTC1500.png";
import FargoHDP5000e from "../../../assets/Products/SafetyAndSecurity/HID/HID Fargo HDP5000e.png";

import type { ProductDetailsModel } from "../../ProductDetails/ProductDetailsModel";

const HID_PRODUCT_DETAILS_CONFIG: ProductDetailsModel[] = [
  {
    id: 1,
    productName: "HID® Amico™ Biometric Facial Recognition Reader",
    brand: "HID",
    description:
      "HID Amico provides advanced facial recognition technology, combining speed, accuracy and a user-friendly experience.",
    image: {
      src: BiometricFacialRecognitionReader,
      alt: "HID Amico Biometric Facial Recognition Reader",
    },
    backTo: {
      label: "HID Products",
      href: "/products/safety-and-security/hid",
    },
    features: [
      {
        id: 1,
        text: "Screen: Available with either a 3.5” or 7” TFT color LCD display with capacitive touchscreen.",
      },
      {
        id: 2,
        text: "Screen: The 7” reader includes built-in SIP intercom.",
      },
      {
        id: 3,
        text: "Camera: Two 1080p Full HD Cameras (visible light and infrared light).",
      },
      {
        id: 4,
        text: "Credential Technology: Seos, HID Mobile Access, iCLASS, iCLASS SE, HID Prox.",
      },
      {
        id: 5,
        text: "Credential Technology: MIFARE (ISO14443A), CSN (ISO14443B), DESFire EV1/2/3 (EV1 Compatibility Mode).",
      },
      {
        id: 6,
        text: "Capacity: Max. Users: 200,000.",
      },
      {
        id: 7,
        text: "Capacity: Max. Credential (1:N): Face — 10,000, extendable to 100,000 with additional license or pre-installed for a specific model (PN).",
      },
      {
        id: 8,
        text: "Capacity: Event log capacity: 200,000.",
      },
      {
        id: 9,
        text: "Communication: OSDP V2.2.",
      },
      {
        id: 10,
        text: "Communication: 1 RS-485 port for communication with the external access module (EAM) or OSDP.",
      },
      {
        id: 11,
        text: "Communication: 1 native 10/100Mbps Ethernet port.",
      },
      {
        id: 12,
        text: "Dimensions (W x H x D): 3.5”: 3.4in x 5.59in x 1.01in (86mm x 142mm x 26mm).",
      },
      {
        id: 13,
        text: "Dimensions (W x H x D): 7”: 4.7in x 9.72in x 1.36in (119.4mm x 247mm x 34.6mm).",
      },
    ],
  },
  {
    id: 2,
    productName: "HID® Signo™ Biometric Reader 25B",
    brand: "HID",
    description:
      "The HID Signo Biometric Reader 25B introduces fingerprint authentication to the growing Signo platform from HID. Offering a truly dynamic approach to secure electronic access control, HID Signo Readers are designed to be highly versatile, powerful, and connected for the future.",
    image: {
      src: BiometricReader25B,
      alt: "HID Signo Biometric Reader 25B",
    },
    backTo: {
      label: "HID Products",
      href: "/products/safety-and-security/hid",
    },
    features: [
      {
        id: 1,
        text: "Imaging Technology: Patented Multispectral sensor.",
      },
      {
        id: 2,
        text: "Credential Technology: Seos.",
      },
      {
        id: 3,
        text: "Credential Technology: iCLASS SE.",
      },
      {
        id: 4,
        text: "Credential Technology: iCLASS Legacy.",
      },
      {
        id: 5,
        text: "Credential Technology: MIFARE® Classic, MIFARE Plus.",
      },
      {
        id: 6,
        text: "Credential Technology: MIFARE DESFire®.",
      },
      {
        id: 7,
        text: "Credential Technology: HID Mobile Access (Bluetooth/NFC).",
      },
      {
        id: 8,
        text: "Biometric Functions: Authentication Modes: 1:1 Matching Verification, 1:N Searching Identification.",
      },
      {
        id: 9,
        text: "Communications: TCP/IP (Host).",
      },
      {
        id: 10,
        text: "Communications: OSDP (v 2.1.7), Wiegand-Out (Controller).",
      },
      {
        id: 11,
        text: "Communications (Controller): TCP/IP (Host).",
      },
      {
        id: 12,
        text: "Communications (Controller): OSDP (v2.1.7) - 1 additional Reader (OSDP-SC supported).",
      },
      {
        id: 13,
        text: "Communications (Controller): OSDP-SC Supported.",
      },
      {
        id: 14,
        text: "Dimensions: 5 cm x 20.4 cm x 5.5 cm.",
      },
      {
        id: 15,
        text: "Input Voltage: 12 VDC.",
      },
      {
        id: 16,
        text: "Environmental Rating: IP67, IK09.",
      },
      {
        id: 17,
        text: "Operating Temperature: -20°C to 66°C.",
      },
    ],
  },
  {
    id: 3,
    productName: "HID® Signo™ Express Reader",
    brand: "HID",
    description:
      "HID Signo Express Readers distill the essential capabilities from the signature Signo line to deliver a simplified and cost-effective solution for secure physical access control.",
    image: {
      src: ExpressReader,
      alt: "HID Signo Express Reader",
    },
    backTo: {
      label: "HID Products",
      href: "/products/safety-and-security/hid",
    },
    features: [
      {
        id: 1,
        text: "Dimensions: 45 mm x 121.5 mm x 19.5 mm (1.77 in x 4.78 in x 0.77 in).",
      },
      {
        id: 2,
        text: "2.4GHz (Bluetooth) Credential Compatibility: Mobile credentials powered by Seos (HID Mobile Access).",
      },
      {
        id: 3,
        text: "13.56 MHz (NFC) Credential Compatibility: Seos, MIFARE® Classic, and MIFARE DESFire® EV1/EV2/EV3 (CSN/UID read only).",
      },
      {
        id: 4,
        text: "Protocol: Wiegand, Terminal Connection.",
      },
    ],
  },
  {
    id: 4,
    productName: "HID® Signo™ Keypad Reader 20K",
    brand: "HID",
    description:
      "The HID Signo Keypad Reader 20K is a founding member of the Signo platform. Offering a truly dynamic approach to secure electronic access control, HID Signo Readers are designed to be highly versatile, powerful, and connected for the future.",
    image: {
      src: KeypadReader20K,
      alt: "HID Signo Keypad Reader 20K",
    },
    backTo: {
      label: "HID Products",
      href: "/products/safety-and-security/hid",
    },
    features: [
      {
        id: 1,
        text: "Dimensions: 45 mm x 121.5 mm x 21.5 mm (1.78 in x 4.79 in x 0.85 in).",
      },
      {
        id: 2,
        text: "13.56 MHz contactless smart cards supported: Seos, iCLASS SE, iCLASS, MIFARE DESFire® EV1/EV2/EV3 and MIFARE® Classic.",
      },
      {
        id: 3,
        text: "125 kHz contactless cards supported: HID Prox, Indala Prox, Dorado Prox, and EM Prox legacy contactless credentials.",
      },
      {
        id: 4,
        text: "Protocol: Open Supervised Device Protocol (OSDP), Wiegand.",
      },
    ],
  },
  {
    id: 5,
    productName: "HID® Signo™ Keypad Reader 40K",
    brand: "HID",
    description:
      "The HID Signo Keypad Reader 40K is a founding member of the Signo platform. Offering a truly dynamic approach to secure electronic access control, HID Signo Readers are designed to be highly versatile, powerful, and connected for the future. A perfect fit for multi-factor authentication door applications requiring a narrow keypad reader, the HID Signo Keypad Reader 40K supports an unparalleled range of different credential technologies in a variety of form factors including cards, fobs and mobile devices.",
    image: {
      src: KeypadReader40K,
      alt: "HID Signo Keypad Reader 40K",
    },
    backTo: {
      label: "HID Products",
      href: "/products/safety-and-security/hid",
    },
    features: [
      {
        id: 1,
        text: "Dimensions: 80 mm x 121.5 mm x 21.5 mm (3.16 in x 4.79 in x 0.85 in).",
      },
      {
        id: 2,
        text: "13.56 MHz contactless smart cards supported: Seos, iCLASS SE, iCLASS, MIFARE DESFire® EV1/EV2/EV3 and MIFARE® Classic.",
      },
      {
        id: 3,
        text: "125 kHz contactless cards supported: HID Prox, Indala Prox, Dorado Prox, and EM Prox legacy contactless credentials.",
      },
      {
        id: 4,
        text: "Protocol: Open Supervised Device Protocol (OSDP) Wiegand.",
      },
    ],
  },
  {
    id: 6,
    productName: "HID® Signo™ Mechanical Keypad Reader 40T",
    brand: "HID",
    description:
      "The HID Signo Mechanical Keypad Reader 40T provides a high-performance, reliable option for harsh environments and a broader choice of Signo reader technology, especially when there is a preference or specification for a traditional mechanical device. Offering robust, positive user feedback, the Signo Mechanical Reader is ideal for use cases where the cold and wet weather conditions require gloved hands or when users may have low visibility.",
    image: {
      src: MechanicalKeypadReader40T,
      alt: "HID Signo Mechanical Keypad Reader 40T",
    },
    backTo: {
      label: "HID Products",
      href: "/products/safety-and-security/hid",
    },
    features: [
      {
        id: 1,
        text: "Dimensions: 80 mm x 122.5 mm x 22.5 mm (3.16 in x 4.82 in x 0.89 in).",
      },
      {
        id: 2,
        text: "13.56 MHz (NFC) Credential Compatibility: Seos, iCLASS SE, iCLASS, MIFARE DESFire® EV1/EV2/EV3, and MIFARE® Classic.",
      },
      {
        id: 3,
        text: "125 kHz Contactless Cards Supported: HID Prox, Indala Prox, Dorado Prox, and EM Prox legacy contactless credentials.",
      },
      {
        id: 4,
        text: "Protocol: Open Supervised Device Protocol (OSDP), Wiegand.",
      },
    ],
  },
  {
    id: 7,
    productName: "HID® Signo™ Reader 20",
    brand: "HID",
    description:
      "The HID Signo Reader 20 is a founding member of the Signo platform. Offering a truly dynamic approach to secure electronic access control, HID Signo Readers are designed to be highly versatile, powerful, and connected for the future.",
    image: {
      src: Reader20,
      alt: "HID Signo Reader 20",
    },
    backTo: {
      label: "HID Products",
      href: "/products/safety-and-security/hid",
    },
    features: [
      {
        id: 1,
        text: "Dimensions: 45 mm x 121.5 mm x 19.5 mm (1.77 in x 4.78 in x 0.77 in).",
      },
      {
        id: 2,
        text: "13.56 MHz contactless smart cards supported: Seos, iCLASS SE, iCLASS, MIFARE DESFire® EV1/EV2/EV3 and MIFARE® Classic.",
      },
      {
        id: 3,
        text: "125 kHz contactless cards supported: HID Prox, Indala Prox, Dorado Prox, and EM Prox legacy contactless credentials.",
      },
      {
        id: 4,
        text: "Protocol: Open Supervised Device Protocol (OSDP), Wiegand.",
      },
    ],
  },
  {
    id: 8,
    productName: "HID® Signo™ Reader 40",
    brand: "HID",
    description:
      "The HID Signo Reader 40 is a founding member of the Signo platform. Offering a truly dynamic approach to secure electronic access control, HID Signo Readers are designed to be highly versatile, powerful, and connected for the future.",
    image: {
      src: Reader40,
      alt: "HID Signo Reader 40",
    },
    backTo: {
      label: "HID Products",
      href: "/products/safety-and-security/hid",
    },
    features: [
      {
        id: 1,
        text: "Dimensions: 80 mm x 121.5 mm x 19.5 mm (3.15 in x 4.78 in x 0.77 in).",
      },
      {
        id: 2,
        text: "13.56 MHz contactless smart cards supported: Seos, iCLASS SE, iCLASS, MIFARE DESFire® EV1/EV2/EV3 and MIFARE® Classic.",
      },
      {
        id: 3,
        text: "125 kHz contactless cards supported: HID Prox, Indala Prox, Dorado Prox, and EM Prox legacy contactless credentials.",
      },
      {
        id: 4,
        text: "Protocol: Open Supervised Device Protocol (OSDP), Wiegand.",
      },
    ],
  },
  {
    id: 9,
    productName: "Seos Card",
    brand: "HID",
    description:
      "Seos was designed to meet the needs of a modern world, focusing on delivering trusted security and user privacy while offering the flexibility to accommodate organizations as they transition to a more connected world.",
    image: {
      src: SeosCard,
      alt: "HID Seos Card",
    },
    backTo: {
      label: "HID Products",
      href: "/products/safety-and-security/hid",
    },
    features: [
      {
        id: 1,
        text: "Security: Seos is Secure Identity Object (SIO)-enabled, allowing for multi-layered security beyond the card technology and protecting identity data from unauthorized access.",
      },
      {
        id: 2,
        text: "Multi-application: Future-proof your credential needs. Seos is programmable to support a wide array of extended use applications including secure printing, time and attendance, and network login.",
      },
      {
        id: 3,
        text: "Convenient: Fully supported by HID Signo, iCLASS SE and multiCLASS SE reader platforms.",
      },
      {
        id: 4,
        text: "Privacy protection: Seos offers enhanced data and privacy protection by incorporating mutual authentication and secure messaging mechanisms into data protection practices.",
      },
      {
        id: 5,
        text: "Mobile ready: Seos is designed to be form-factor independent, guaranteeing a smooth potential future transition to mobile-based credentials.",
      },
    ],
  },
  {
    id: 10,
    productName: "HID Fargo HDP6600",
    brand: "HID",
    description:
      "The HID FARGO HDP6600 is a next-generation 600 dpi ID card printer designed for organizations that demand exceptional image quality, performance and reliability. Built on six generations of retransfer technology, it delivers sharp, high-definition credentials at record speeds — up to 230 cards per hour (YMCK with transfer).",
    image: {
      src: FargoHDP6600,
      alt: "HID Fargo HDP6600 ID card printer",
    },
    backTo: {
      label: "HID Products",
      href: "/products/safety-and-security/hid",
    },
    features: [
      {
        id: 1,
        text: "Side Printing: Single or dual.",
      },
      {
        id: 2,
        text: "Print Method: HDP dye-sublimation/resin thermal transfer.",
      },
      {
        id: 3,
        text: "Resolution: 600 dpi.",
      },
      {
        id: 4,
        text: "Print Speed: Up to 230 cards per hour (YMCK with transfer) / 16 seconds per card.",
      },
      {
        id: 5,
        text: "Memory: 1 GB RAM.",
      },
      {
        id: 6,
        text: "Accepted Card Sizes: CR-80.",
      },
      {
        id: 7,
        text: "Warranty: 4 years (printer); lifetime (printhead).",
      },
      {
        id: 8,
        text: "Printer Options: Dual-sided printing.",
      },
      {
        id: 9,
        text: "Printer Options: Wasteless LMX card lamination module (one-material and two-material configurations available).",
      },
      {
        id: 10,
        text: "Printer Options: Card flattener.",
      },
      {
        id: 11,
        text: "Printer Options: Magnetic stripe encoder.",
      },
      {
        id: 12,
        text: "Printer Options: Contact smart card encoder.",
      },
      {
        id: 13,
        text: "Printer Options: Contactless smart card encoding modules.",
      },
      {
        id: 14,
        text: "Printer Options: Dual input card hopper module.",
      },
      {
        id: 15,
        text: "Printer Options: 200-card input hopper module.",
      },
      {
        id: 16,
        text: "Printer Options: Physical locks for card hoppers and consumables access.",
      },
      {
        id: 17,
        text: "Printer Options: Secure proprietary consumables system.",
      },
      {
        id: 18,
        text: "Printer Options: Custom secure holographic overlaminate.",
      },
      {
        id: 19,
        text: "Printer Options: Printer cleaning kit.",
      },
    ],
  },
  {
    id: 11,
    productName: "HID Fargo DTC1500",
    brand: "HID",
    description:
      "Built on 20 years of direct-to-card printing innovation, the HID FARGO DTC1500 delivers exceptional security, flexibility and value. This secure ID card printer combines high-capacity ribbons, custom watermark printing and AES-256 data encryption to help organizations issue cost-effective, tamper-resistant credentials.",
    image: {
      src: FargoDTC1500,
      alt: "HID Fargo DTC1500 ID card printer",
    },
    backTo: {
      label: "HID Products",
      href: "/products/safety-and-security/hid",
    },
    features: [
      {
        id: 1,
        text: "Print method: Dye-sublimation/resin thermal transfer.",
      },
      {
        id: 2,
        text: "Resolution: 300 dpi.",
      },
      {
        id: 3,
        text: "Print speed: 16 seconds per card / 225 cards per hour (YMCKO).",
      },
      {
        id: 4,
        text: "Included software: FARGO Workbench printer maintenance and diagnostic software with Color Assist spot-color matching.",
      },
      {
        id: 5,
        text: "Security: Custom watermark overlay, resin scramble data protection, password-protected printer operation and AES-256 data encryption on the printer over a secure network.",
      },
      {
        id: 6,
        text: "Card capacity: 100 card input, up to 100 card output.",
      },
      {
        id: 7,
        text: "Accepted Card Sizes: CR-80.",
      },
      {
        id: 8,
        text: "Accepted Card Sizes: CR-79 Adhesive Back.",
      },
      {
        id: 9,
        text: "Printer Options: Dual-sided printing.",
      },
      {
        id: 10,
        text: "Printer Options: Single-sided lamination module.",
      },
      {
        id: 11,
        text: "Printer Options: Smart card encoding modules (contact/contactless).",
      },
      {
        id: 12,
        text: "Printer Options: Magnetic stripe encoding module.",
      },
      {
        id: 13,
        text: "Printer Options: Printer cleaning kit.",
      },
    ],
  },
  {
    id: 12,
    productName: "HID Fargo HDP5000e",
    brand: "HID",
    description:
      "Built on seven generations of proven retransfer printing technology over the last 25 years, the HID FARGO HDP5000e is the next evolution in high-definition ID card printing. Designed to deliver exceptional reliability, usability and security, the HDP5000e empowers you to create crisp, vibrant, photo-quality credentials that reflect your organization’s professional image and are inherently resistant to tampering or counterfeiting.",
    image: {
      src: FargoHDP5000e,
      alt: "HID Fargo HDP5000e ID card printer",
    },
    backTo: {
      label: "HID Products",
      href: "/products/safety-and-security/hid",
    },
    features: [
      {
        id: 1,
        text: "Sided Printing: Single or dual.",
      },
      {
        id: 2,
        text: "Print Method: HDP dye-sublimation/resin thermal transfer.",
      },
      {
        id: 3,
        text: "Resolution: 300 dpi.",
      },
      {
        id: 4,
        text: "Print Speed: Up to 27 seconds per card / 133 cards per hour (YMCK with transfer).",
      },
      {
        id: 5,
        text: "Accepted Card Sizes: CR-80.",
      },
      {
        id: 6,
        text: "Warranty: Four years (printer); lifetime (printhead).",
      },
      {
        id: 7,
        text: "Printer Options: Dual-sided printing.",
      },
      {
        id: 8,
        text: "Printer Options: Single- or dual-sided lamination.",
      },
      {
        id: 9,
        text: "Printer Options: Smart card encoding (contact/contactless).",
      },
      {
        id: 10,
        text: "Printer Options: Magnetic stripe encoding.",
      },
      {
        id: 11,
        text: "Printer Options: Dual input card hopper.",
      },
      {
        id: 12,
        text: "Printer Options: 200-card input hopper.",
      },
      {
        id: 13,
        text: "Printer Options: Printer cleaning kit.",
      },
    ],
  },
  //   {
  //     id: 13,
  //     productName: "HID DigitalPersona 4500 Reader",
  //     brand: "HID",
  //     description:
  //       "The DigitalPersona 4500 Fingerprint Reader is a USB peripheral perfect for individual desktop users, as well as multiple users in shared environments. Its compact design conserves desk space in enterprises, and its professional, modern appearance looks elegant in point-of-sale environments (POS). The DigitalPersona 4500 Reader utilizes optical fingerprint scanning technology to achieve excellent image quality, a large capture area and superior reliability. A silicone coating allows it to read a wide range of fingerprints accurately and rapidly regardless of placement angle. The high-quality metal casing resists unintentional movement.",
  //     image: {
  //       src: DigitalPersona4500Reader,
  //       alt: "HID DigitalPersona 4500 Fingerprint Reader",
  //     },
  //     backTo: {
  //       label: "HID Products",
  //       href: "/products/safety-and-security/hid",
  //     },
  //     features: [
  //       {
  //         id: 1,
  //         text: "Small form factor.",
  //       },
  //       {
  //         id: 2,
  //         text: "Excellent image quality.",
  //       },
  //       {
  //         id: 3,
  //         text: "Fast image capture.",
  //       },
  //       {
  //         id: 4,
  //         text: "Encrypted fingerprint data.",
  //       },
  //       {
  //         id: 5,
  //         text: "Compatible with DigitalPersona Biometric SDKs.",
  //       },
  //     ],
  //   },
  //   {
  //     id: 14,
  //     productName: "HID DigitalPersona 5200 Fingerprint Reader",
  //     brand: "HID",
  //     description:
  //       "The HID DigitalPersona 5200 Reader is a compact optical single fingerprint reader that meets FIPS 201/PIV and FAP 20 standards. Designed to meet the high-volume requirements of large-scale Civil ID and commercial enrollment and authentication applications, the reader rapidly captures and produces fingerprint images at 500 ppi resolution in ANSI and ISO/IEC standard formats.",
  //     image: {
  //       src: DigitalPersona5200Reader,
  //       alt: "HID DigitalPersona 5200 Fingerprint Reader",
  //     },
  //     backTo: {
  //       label: "HID Products",
  //       href: "/products/safety-and-security/hid",
  //     },
  //     features: [
  //       {
  //         id: 1,
  //         text: "Small form factor.",
  //       },
  //       {
  //         id: 2,
  //         text: "FIPS 201/PIV certified.",
  //       },
  //       {
  //         id: 3,
  //         text: "FAP 20 certified.",
  //       },
  //       {
  //         id: 4,
  //         text: "500 ppi images.",
  //       },
  //       {
  //         id: 5,
  //         text: "IP64 whole reader, IP65 capturing window.",
  //       },
  //       {
  //         id: 6,
  //         text: "Compatible with HID DigitalPersona Biometric SDKs for Windows®, Linux and Android.",
  //       },
  //     ],
  //   },
];

export default HID_PRODUCT_DETAILS_CONFIG;
