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
        path: "products/electrical-materials-and-equipment",
        lazy: async () => {
          const module =
            await import("../pages/ElectricalMaterialsAndEquipmentPage");
          return { Component: module.default };
        },
      },
    ],
  },
]);

export default router;
