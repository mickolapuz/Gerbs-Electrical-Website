import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: MainPage,
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
        path: "products/electrical-materials-and-equipment",
        lazy: async () => {
          const module =
            await import("../pages/ElectricalMaterialsAndEquipmentPage");
          return { Component: module.default };
        },
      },
      {
        path: "*",
        Component: MainPage,
      },
    ],
  },
]);

export default router;
