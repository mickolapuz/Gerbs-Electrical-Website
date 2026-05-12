import { Outlet } from "react-router";

import NavbarWrapper from "../components/Navbar/NavbarWrapper";
import AppFooter from "../components/AppFooter";
import ScrollToHash from "../utils/scrollToHash";

const MainLayout = () => {
  return (
    <>
      <ScrollToHash />

      <NavbarWrapper />

      <main>
        <Outlet />
      </main>

      <AppFooter />
    </>
  );
};

export default MainLayout;
