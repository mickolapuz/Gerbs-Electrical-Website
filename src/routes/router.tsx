import { createBrowserRouter } from "react-router";

import IntroSplash from "../components/AppIntroSplash";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: (
          <IntroSplash>
            <MainPage />
          </IntroSplash>
        ),
      },
      {
        path: "products/safety-and-security",
        lazy: async () => {
          const module = await import("../pages/SafetyAndSecurityPage");
          return { Component: module.default };
        },
      },
      {
        path: "products/safety-and-security/garrett",
        lazy: async () => {
          const module =
            await import("../pages/Products/Garrett/GarrettProductsPage");
          return { Component: module.default };
        },
      },
      {
        path: "products/safety-and-security/hanwha-vision",
        lazy: async () => {
          const module =
            await import("../pages/Products/HanwhaVision/HanwhaVisionProductsPage");
          return { Component: module.default };
        },
      },
      {
        path: "products/safety-and-security/hid",
        lazy: async () => {
          const module = await import("../pages/Products/HID/HIDProductsPage");
          return { Component: module.default };
        },
      },
      {
        path: "products/safety-and-security/safeway-system",
        lazy: async () => {
          const module =
            await import("../pages/Products/SafewaySystem/SafewaySystemsProductsPage");
          return { Component: module.default };
        },
      },
      {
        path: "products/safety-and-security/dahua",
        lazy: async () => {
          const module =
            await import("../pages/Products/Dahua/DahuaProductsPage");
          return { Component: module.default };
        },
      },
      {
        path: "products/safety-and-security/garrett/*",
        lazy: async () => {
          const module =
            await import("../pages/ProductDetails/Garrett/GarrettProductDetailsPage");
          return { Component: module.default };
        },
      },
      {
        path: "products/safety-and-security/hanwha-vision/*",
        lazy: async () => {
          const module =
            await import("../pages/ProductDetails/HanwhaVision/HanwhaVisionProductDetailsPage");
          return { Component: module.default };
        },
      },
      {
        path: "products/safety-and-security/hid/*",
        lazy: async () => {
          const module =
            await import("../pages/ProductDetails/HID/HIDProductDetailsPage");
          return { Component: module.default };
        },
      },
      {
        path: "products/safety-and-security/safeway-systems/*",
        lazy: async () => {
          const module =
            await import("../pages/ProductDetails/SafewaySystem/SafewaySystemProductDetailsPage");
          return { Component: module.default };
        },
      },
      {
        path: "products/safety-and-security/dahua/*",
        lazy: async () => {
          const module =
            await import("../pages/ProductDetails/Dahua/DahuaProductDetailsPage");
          return { Component: module.default };
        },
      },
      {
        path: "products/electrical-materials-and-equipment",
        lazy: async () => {
          const module =
            await import("../pages/ElectricalMaterialsAndEquipmentPage");
          return { Component: module.default };
        },
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);

export default router;
