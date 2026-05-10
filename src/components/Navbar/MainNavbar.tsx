import { useRef, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Container, IconButton, Link } from "@mui/material";

import GerbsLogoWithTypography from "../../assets/CompanyLogos/Gerb's Colored Icon+Typography.png";
import GerbsLogoOnly from "../../assets/CompanyLogos/Gerb's Colored Icon.png";
import { scrollToSection } from "../../utils/scrollHelper";
import AppDrawer from "../AppDrawer";
import AppNavbarPopper from "../AppNavbarPopper";

interface NavItemChildren {
  id: number;
  item: string;
  href: string;
}

interface NavItems {
  id: number;
  item: string;
  href: string;
  children?: NavItemChildren[];
}

const navItems: NavItems[] = [
  {
    id: 1,
    item: "Home",
    href: "/#home",
  },
  {
    id: 2,
    item: "About Us",
    href: "/#about-us",
  },
  {
    id: 3,
    item: "Permits and Licenses",
    href: "/#permits-and-licenses",
  },
  {
    id: 4,
    item: "Projects",
    href: "/#projects",
    children: [
      {
        id: 1,
        item: "Industrial",
        href: "/#industrial",
      },
      {
        id: 2,
        item: "Commercial / Education / Healthcare",
        href: "/#commercial-education-healthcare",
      },
      {
        id: 3,
        item: "Residential",
        href: "/#residential",
      },
    ],
  },
  {
    id: 5,
    item: "Products",
    href: "/#products",
    children: [
      {
        id: 1,
        item: "Safety and Security",
        href: "/products/safety-and-security",
      },
      {
        id: 2,
        item: "Electrical Materials and Equipment",
        href: "/products/electrical-materials-and-equipment",
      },
    ],
  },
  {
    id: 6,
    item: "Services",
    href: "/#services",
  },
  {
    id: 7,
    item: "Design",
    href: "/#design",
  },
];

const styles = {
  root: {
    width: "100%",
    backgroundColor: "background.paper",
    borderBottom: "1px solid",
    borderColor: "divider",
    position: "sticky",
    top: 0,
    zIndex: 1100,
  },
  container: {
    minHeight: { xs: 72, lg: 84 },
    display: "grid",
    gridTemplateColumns: {
      xs: "auto 1fr auto",
      lg: "1fr auto 1fr",
    },
    alignItems: "center",
    gap: { xs: 1.5, lg: 3 },
  },
  logoLink: {
    display: "inline-flex",
    alignItems: "center",
    justifySelf: "start",
    textDecoration: "none",
  },
  desktopLogo: {
    display: { xs: "none", lg: "block" },
    width: { lg: 250 },
    height: "auto",
  },
  mobileLogo: {
    display: { xs: "block", lg: "none" },
    width: { xs: 48, sm: 54 },
    height: "auto",
  },
  nav: {
    display: { xs: "none", lg: "flex" },
    alignItems: "center",
    justifyContent: "center",
    gap: 0.5,
  },
  navItemWrapper: {
    display: "inline-flex",
    alignItems: "center",
  },
  navLink: {
    px: 1.4,
    py: 1,
    color: "text.primary",
    fontSize: "0.9rem",
    fontWeight: 600,
    lineHeight: 1,
    borderRadius: "999px",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 0.35,
    transition:
      "color 0.2s ease, background-color 0.2s ease, transform 0.2s ease",
    "&:hover": {
      color: "primary.main",
      backgroundColor: "rgba(34,52,110,0.06)",
      transform: "translateY(-1px)",
    },
    "&:focus-visible": {
      outline: "2px solid",
      outlineColor: "primary.main",
      outlineOffset: "3px",
    },
  },
  navDownIcon: {
    fontSize: "1rem",
    color: "inherit",
  },
  desktopActions: {
    display: { xs: "none", lg: "flex" },
    alignItems: "center",
    justifyContent: "flex-end",
  },
  mobileCtaWrapper: {
    display: { xs: "flex", lg: "none" },
    alignItems: "center",
    justifyContent: "center",
    justifySelf: "center",
  },
  contactButton: {
    textTransform: "none",
    fontWeight: 700,
    whiteSpace: "nowrap",
  },
  menuButton: {
    display: { xs: "inline-flex", lg: "none" },
    justifySelf: "end",
    color: "primary.main",
    border: "1px solid",
    borderColor: "rgba(34,52,110,0.16)",
    borderRadius: "12px",
  },
};

const getSectionIdFromHref = (href: string) => {
  const hashIndex = href.indexOf("#");

  if (hashIndex === -1) return null;

  return href.slice(hashIndex + 1);
};

const isHomeSectionLink = (href: string) => {
  return href.startsWith("/#");
};

const MainNavbar = () => {
  const location = useLocation();
  const closeTimerRef = useRef<number | null>(null);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [popperAnchorEl, setPopperAnchorEl] = useState<HTMLElement | null>(
    null,
  );
  const [activeChildren, setActiveChildren] = useState<NavItemChildren[]>([]);

  const isPopperOpen = Boolean(popperAnchorEl) && activeChildren.length > 0;

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleOpenPopper = (
    event: React.MouseEvent<HTMLElement>,
    children?: NavItemChildren[],
  ) => {
    if (!children || children.length === 0) {
      handleClosePopper();
      return;
    }

    clearCloseTimer();
    setPopperAnchorEl(event.currentTarget);
    setActiveChildren(children);
  };

  const handleClosePopper = () => {
    clearCloseTimer();
    setPopperAnchorEl(null);
    setActiveChildren([]);
  };

  const handleDelayedClosePopper = () => {
    clearCloseTimer();

    closeTimerRef.current = window.setTimeout(() => {
      handleClosePopper();
    }, 140);
  };

  const handleSectionNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!isHomeSectionLink(href)) return;

    const sectionId = getSectionIdFromHref(href);

    if (!sectionId) return;

    const isAlreadyOnHomePage = location.pathname === "/";

    if (!isAlreadyOnHomePage) {
      handleClosePopper();
      return;
    }

    event.preventDefault();

    window.history.pushState(null, "", href);
    scrollToSection(sectionId);
    handleClosePopper();
  };

  return (
    <>
      <Box component="header" sx={styles.root}>
        <Container maxWidth="xl" sx={styles.container}>
          <Link
            component={RouterLink}
            to="/#home"
            aria-label="Gerbs Electrical Trading and Services homepage"
            sx={styles.logoLink}
            onClick={(event) => handleSectionNavigation(event, "/#home")}
          >
            <Box
              component="img"
              src={GerbsLogoWithTypography}
              alt="Gerbs Electrical Trading and Services"
              sx={styles.desktopLogo}
            />

            <Box
              component="img"
              src={GerbsLogoOnly}
              alt="Gerbs Electrical Trading and Services"
              sx={styles.mobileLogo}
            />
          </Link>

          <Box component="nav" aria-label="Main navigation" sx={styles.nav}>
            {navItems.map((navItem) => {
              const hasChildren =
                Array.isArray(navItem.children) && navItem.children.length > 0;

              return (
                <Box
                  key={navItem.id}
                  sx={styles.navItemWrapper}
                  onMouseEnter={(event) =>
                    handleOpenPopper(event, navItem.children)
                  }
                  onMouseLeave={handleDelayedClosePopper}
                >
                  <Link
                    component={RouterLink}
                    to={navItem.href}
                    sx={styles.navLink}
                    onClick={(event) =>
                      handleSectionNavigation(event, navItem.href)
                    }
                  >
                    {navItem.item}

                    {hasChildren && (
                      <KeyboardArrowDownIcon
                        aria-hidden="true"
                        sx={styles.navDownIcon}
                      />
                    )}
                  </Link>
                </Box>
              );
            })}
          </Box>

          <Box sx={styles.mobileCtaWrapper}>
            <Button
              component={RouterLink}
              to="/#contact-us"
              variant="contained"
              color="primary"
              sx={styles.contactButton}
              onClick={(event) =>
                handleSectionNavigation(event, "/#contact-us")
              }
            >
              Contact Us
            </Button>
          </Box>

          <Box sx={styles.desktopActions}>
            <Button
              component={RouterLink}
              to="/#contact-us"
              variant="contained"
              color="primary"
              sx={styles.contactButton}
              onClick={(event) =>
                handleSectionNavigation(event, "/#contact-us")
              }
            >
              Contact Us
            </Button>
          </Box>

          <IconButton
            type="button"
            aria-label="Open main menu"
            onClick={handleOpenDrawer}
            sx={styles.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Container>
      </Box>

      <AppNavbarPopper
        open={isPopperOpen}
        anchorEl={popperAnchorEl}
        childrenItems={activeChildren}
        onMouseEnter={clearCloseTimer}
        onMouseLeave={handleDelayedClosePopper}
        onClose={handleClosePopper}
      />

      <AppDrawer
        open={isDrawerOpen}
        navItems={navItems}
        onClose={handleCloseDrawer}
      />
    </>
  );
};

export default MainNavbar;
