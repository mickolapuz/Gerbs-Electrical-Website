import {
  Box,
  ClickAwayListener,
  Link,
  Paper,
  Popper,
  Stack,
} from "@mui/material";

interface NavItemChildren {
  id: number;
  item: string;
  href: string;
}

interface AppNavbarPopperProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  childrenItems: NavItemChildren[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}

const styles = {
  popper: {
    zIndex: 1300,
  },
  paper: {
    mt: 1,
    width: "max-content",
    minWidth: 220,
    maxWidth: 320,
    borderRadius: "8px",
    overflow: "hidden",
    border: "1px solid",
    borderColor: "rgba(34,52,110,0.12)",
    boxShadow: "0 14px 36px rgba(15,23,42,0.14)",
    backgroundColor: "background.paper",
  },
  list: {
    m: 0,
    p: 1,
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: 0.5,
  },
  item: {
    listStyle: "none",
  },
  link: {
    display: "block",
    px: 1.5,
    py: 1,
    borderRadius: "6px",
    color: "text.primary",
    fontSize: "0.92rem",
    fontWeight: 600,
    lineHeight: 1.4,
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "background-color 0.2s ease, color 0.2s ease",
    "&:hover": {
      color: "primary.main",
      backgroundColor: "rgba(34,52,110,0.06)",
      textDecoration: "none",
    },
    "&:focus-visible": {
      outline: "2px solid",
      outlineColor: "primary.main",
      outlineOffset: "2px",
    },
  },
};

const AppNavbarPopper = ({
  open,
  anchorEl,
  childrenItems,
  onMouseEnter,
  onMouseLeave,
  onClose,
}: AppNavbarPopperProps) => {
  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement="bottom"
      disablePortal={false}
      sx={styles.popper}
      modifiers={[
        {
          name: "offset",
          options: {
            offset: [0, 8],
          },
        },
      ]}
    >
      <ClickAwayListener onClickAway={onClose}>
        <Paper
          elevation={0}
          sx={styles.paper}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Stack component="ul" sx={styles.list}>
            {childrenItems.map((child) => (
              <Box component="li" key={child.id} sx={styles.item}>
                <Link href={child.href} sx={styles.link} onClick={onClose}>
                  {child.item}
                </Link>
              </Box>
            ))}
          </Stack>
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
};

export default AppNavbarPopper;
