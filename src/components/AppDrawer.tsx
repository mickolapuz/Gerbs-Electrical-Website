import { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  Link,
  Stack,
} from "@mui/material";

import GerbsLogoWithTypography from "../assets/CompanyLogos/Gerb's Colored Icon+Typography.png";

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

interface AppDrawerProps {
  open: boolean;
  navItems: NavItems[];
  onClose: () => void;
}

const styles = {
  paper: {
    width: { xs: "86vw", sm: 380 },
    maxWidth: 420,
    backgroundColor: "background.paper",
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    px: 2.5,
    py: 2,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2,
  },
  logoLink: {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
  },
  logo: {
    width: 210,
    height: "auto",
    display: "block",
  },
  closeButton: {
    color: "text.primary",
  },
  navWrapper: {
    mt: 4,
  },
  navList: {
    m: 0,
    p: 0,
    listStyle: "none",
  },
  navItem: {
    listStyle: "none",
  },
  navRow: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 1,
  },
  navLink: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    px: 1.5,
    py: 1.35,
    borderRadius: 2,
    color: "text.primary",
    fontSize: "0.98rem",
    fontWeight: 700,
    textDecoration: "none",
    transition: "none",
    "&:hover": {
      color: "text.primary",
      backgroundColor: "transparent",
      textDecoration: "none",
    },
    "&:focus-visible": {
      outline: "2px solid",
      outlineColor: "primary.main",
      outlineOffset: "3px",
    },
  },
  expandButton: {
    color: "text.secondary",
    width: 40,
    height: 40,
    flexShrink: 0,
  },
  downIcon: {
    fontSize: "1.25rem",
    transition: "transform 0.2s ease",
  },
  childrenList: {
    m: 0,
    mt: 0.25,
    mb: 1,
    p: 0,
    pl: 1.5,
    listStyle: "none",
    borderLeft: "2px solid",
    borderColor: "rgba(34,52,110,0.12)",
    ml: 1.5,
  },
  childItem: {
    listStyle: "none",
  },
  childLink: {
    display: "block",
    px: 1.5,
    py: 0.75,
    borderRadius: 1.5,
    color: "text.secondary",
    fontSize: "0.88rem",
    fontWeight: 600,
    lineHeight: 1.4,
    textDecoration: "none",
    transition: "none",
    "&:hover": {
      color: "text.secondary",
      backgroundColor: "transparent",
      paddingLeft: 1.5,
      textDecoration: "none",
    },
    "&:focus-visible": {
      outline: "2px solid",
      outlineColor: "primary.main",
      outlineOffset: "3px",
    },
  },
  itemDivider: {
    my: 0.75,
    borderColor: "rgba(34,52,110,0.1)",
  },
  ctaWrapper: {
    mt: "auto",
    pt: 3,
  },
  ctaButton: {
    py: 1.15,
    fontWeight: 700,
    textTransform: "none",
  },
};

const AppDrawer = ({ open, navItems, onClose }: AppDrawerProps) => {
  const [expandedNavItemIds, setExpandedNavItemIds] = useState<number[]>([]);

  const handleCloseDrawer = () => {
    setExpandedNavItemIds([]);
    onClose();
  };

  const handleToggleChildren = (navItemId: number) => {
    setExpandedNavItemIds((currentIds) => {
      const isAlreadyExpanded = currentIds.includes(navItemId);

      if (isAlreadyExpanded) {
        return currentIds.filter((id) => id !== navItemId);
      }

      return [...currentIds, navItemId];
    });
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={handleCloseDrawer}
      ModalProps={{
        keepMounted: true,
      }}
      slotProps={{
        paper: {
          sx: styles.paper,
        },
      }}
    >
      <Box
        sx={styles.content}
        role="navigation"
        aria-label="Mobile site navigation"
      >
        <Box sx={styles.header}>
          <Link
            href="/#hero"
            aria-label="Go to Gerbs Electrical Trading and Services homepage"
            onClick={handleCloseDrawer}
            sx={styles.logoLink}
          >
            <Box
              component="img"
              src={GerbsLogoWithTypography}
              alt="Gerbs Electrical Trading and Services logo"
              sx={styles.logo}
            />
          </Link>

          <IconButton
            type="button"
            aria-label="Close mobile navigation menu"
            onClick={handleCloseDrawer}
            sx={styles.closeButton}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          component="nav"
          aria-label="Main mobile navigation"
          sx={styles.navWrapper}
        >
          <Stack component="ul" sx={styles.navList}>
            {navItems.map((navItem, index) => {
              const hasChildren =
                Array.isArray(navItem.children) && navItem.children.length > 0;

              const isLastItem = index === navItems.length - 1;
              const isExpanded = expandedNavItemIds.includes(navItem.id);
              const submenuId = `mobile-submenu-${navItem.id}`;

              return (
                <Box component="li" key={navItem.id} sx={styles.navItem}>
                  <Box sx={styles.navRow}>
                    <Link
                      href={navItem.href}
                      onClick={handleCloseDrawer}
                      sx={styles.navLink}
                    >
                      {navItem.item}
                    </Link>

                    {hasChildren && (
                      <IconButton
                        type="button"
                        aria-label={
                          isExpanded
                            ? `Collapse ${navItem.item} submenu`
                            : `Expand ${navItem.item} submenu`
                        }
                        aria-expanded={isExpanded}
                        aria-controls={submenuId}
                        onClick={() => handleToggleChildren(navItem.id)}
                        sx={styles.expandButton}
                      >
                        <KeyboardArrowDownIcon
                          aria-hidden="true"
                          sx={{
                            ...styles.downIcon,
                            transform: isExpanded
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          }}
                        />
                      </IconButton>
                    )}
                  </Box>

                  {hasChildren && (
                    <Collapse in={isExpanded} timeout="auto">
                      <Stack
                        id={submenuId}
                        component="ul"
                        aria-label={`${navItem.item} submenu`}
                        sx={styles.childrenList}
                      >
                        {navItem.children?.map((child) => (
                          <Box
                            component="li"
                            key={child.id}
                            sx={styles.childItem}
                          >
                            <Link
                              href={child.href}
                              onClick={handleCloseDrawer}
                              sx={styles.childLink}
                            >
                              {child.item}
                            </Link>
                          </Box>
                        ))}
                      </Stack>
                    </Collapse>
                  )}

                  {!isLastItem && <Divider sx={styles.itemDivider} />}
                </Box>
              );
            })}
          </Stack>
        </Box>

        <Box sx={styles.ctaWrapper}>
          <Divider sx={{ mb: 2.5 }} />

          <Button
            href="/#contact-us"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleCloseDrawer}
            sx={styles.ctaButton}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
