import type { ProductsPageModel } from "../ProductsModel";

import HIDLogo from "../../../assets/Products/Logos/HID.png";

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

const HID_PRODUCTS_CONFIG: ProductsPageModel = {
  brand: "HID",
  description:
    "Explore HID safety and security solutions supplied by Gerb's Electrical Trading and Services, including access control readers, biometric authentication devices, secure credentials, and ID card printing systems designed for trusted identity management and facility security.",
  logo: HIDLogo,
  backTo: {
    label: "Safety and Security",
    href: "/products/safety-and-security",
  },
  productGroups: [
    {
      id: 1,
      groupName: "PACS - Access Control",
      products: [
        {
          id: 1,
          productName: "HID® Amico™ Biometric Facial Recognition Reader",
          tagline: "CONTACTLESS FACIAL ACCESS",
          image: {
            src: BiometricFacialRecognitionReader,
            alt: "HID® Amico™ Biometric Facial Recognition Reader",
          },
          href: "/products/safety-and-security/hid/biometric-facial-recognition-reader",
        },
        {
          id: 2,
          productName: "HID® Signo™ Biometric Reader 25B",
          tagline: "SECURE BIOMETRIC ENTRY",
          image: {
            src: BiometricReader25B,
            alt: "HID® Signo™ Biometric Reader 25B",
          },
          href: "/products/safety-and-security/hid/biometric-reader-25b",
        },
        {
          id: 3,
          productName: "HID® Signo™ Express Reader",
          tagline: "FAST MOBILE ACCESS",
          image: {
            src: ExpressReader,
            alt: "HID® Signo™ Express Reader",
          },
          href: "/products/safety-and-security/hid/express-reader",
        },
        {
          id: 4,
          productName: "HID® Signo™ Keypad Reader 20K",
          tagline: "COMPACT KEYPAD ACCESS",
          image: {
            src: KeypadReader20K,
            alt: "HID® Signo™ Keypad Reader 20K",
          },
          href: "/products/safety-and-security/hid/keypad-reader-20k",
        },
        {
          id: 5,
          productName: "HID® Signo™ Keypad Reader 40K",
          tagline: "VERSATILE KEYPAD SECURITY",
          image: {
            src: KeypadReader40K,
            alt: "HID® Signo™ Keypad Reader 40K",
          },
          href: "/products/safety-and-security/hid/keypad-reader-40k",
        },
        {
          id: 6,
          productName: "HID® Signo™ Mechanical Keypad Reader 40T",
          tagline: "TACTILE ACCESS CONTROL",
          image: {
            src: MechanicalKeypadReader40T,
            alt: "HID® Signo™ Mechanical Keypad Reader 40T",
          },
          href: "/products/safety-and-security/hid/mechanical-keypad-reader-40t",
        },
        {
          id: 7,
          productName: "HID® Signo™ Reader 20",
          tagline: "SLIM SECURE READER",
          image: {
            src: Reader20,
            alt: "HID® Signo™ Reader 20",
          },
          href: "/products/safety-and-security/hid/reader-20",
        },
        {
          id: 8,
          productName: "HID® Signo™ Reader 40",
          tagline: "RELIABLE WALL-MOUNT ACCESS",
          image: {
            src: Reader40,
            alt: "HID® Signo™ Reader 40",
          },
          href: "/products/safety-and-security/hid/reader-40",
        },
      ],
    },
    {
      id: 2,
      groupName: "PACS - Access Control Consumable",
      products: [
        {
          id: 1,
          productName: "Seos Card",
          tagline: "SECURE SMART CREDENTIAL",
          image: {
            src: SeosCard,
            alt: "Seos Card",
          },
          href: "/products/safety-and-security/hid/seos-card",
        },
      ],
    },
    {
      id: 3,
      groupName: "Fargo — Secured ID Printing & Consumables",
      products: [
        {
          id: 1,
          productName: "HID Fargo HDP6600",
          tagline: "HIGH-DEFINITION ID PRINTING",
          image: {
            src: FargoHDP6600,
            alt: "HID Fargo HDP6600",
          },
          href: "/products/safety-and-security/hid/fargo-hdp6600",
        },
        {
          id: 2,
          productName: "HID Fargo DTC1500",
          tagline: "PROFESSIONAL CARD PRINTING",
          image: {
            src: FargoDTC1500,
            alt: "HID Fargo DTC1500",
          },
          href: "/products/safety-and-security/hid/fargo-dtc1500",
        },
        {
          id: 3,
          productName: "HID Fargo HDP5000e",
          tagline: "SECURE ID ISSUANCE",
          image: {
            src: FargoHDP5000e,
            alt: "HID Fargo HDP5000e",
          },
          href: "/products/safety-and-security/hid/fargo-hdp5000e",
        },
      ],
    },
  ],
};

export default HID_PRODUCTS_CONFIG;
