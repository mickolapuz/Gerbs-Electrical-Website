import { useEffect, useState, type ReactNode } from "react";
import { Box, keyframes } from "@mui/material";

import GerbsIcon from "../assets/CompanyLogos/Gerb's Colored Icon.png";
import GerbsTypography from "../assets/CompanyLogos/Gerb's Colored Typography.png";

interface AppIntroSplashProps {
  children: ReactNode;
}

const SPLASH_STORAGE_KEY = "gerbs-intro-splash-seen";

const iconPop = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.72);
  }

  55% {
    opacity: 1;
    transform: scale(1.08);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const textReveal = keyframes`
  0% {
    opacity: 0;
    transform: translateX(22px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const splashFadeOut = keyframes`
  0% {
    opacity: 1;
    visibility: visible;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
`;

const contentFadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const styles = {
  pageWrapper: {
    width: "100%",
    minHeight: "100vh",
  },

  splash: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: { xs: 2.5, sm: 4, md: 6 },
    background:
      "linear-gradient(135deg, #FFFFFF 0%, #F7F9FC 45%, #EEF2FA 100%)",
    overflow: "hidden",
    animation: `${splashFadeOut} 700ms ease forwards`,
    animationDelay: "2.45s",
    pointerEvents: "none",
  },

  splashBackdrop: {
    position: "absolute",
    width: { xs: 300, sm: 500, md: 680, lg: 820 },
    height: { xs: 300, sm: 500, md: 680, lg: 820 },
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(34, 52, 110, 0.11) 0%, rgba(34, 52, 110, 0.045) 42%, rgba(34, 52, 110, 0) 72%)",
  },

  splashContent: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: { xs: 1.5, sm: 2.5, md: 3.5, lg: 4 },
    width: "100%",
    maxWidth: { xs: 390, sm: 700, md: 960, lg: 1180 },
  },

  icon: {
    height: { xs: 64, sm: 96, md: 132, lg: 160 },
    width: "auto",
    objectFit: "contain",
    flexShrink: 0,
    animation: `${iconPop} 850ms cubic-bezier(0.2, 0.9, 0.25, 1.25) forwards`,
    willChange: "transform, opacity",
  },

  typography: {
    height: { xs: 64, sm: 96, md: 132, lg: 160 },
    width: "auto",
    maxWidth: {
      xs: "calc(100vw - 120px)",
      sm: "520px",
      md: "740px",
      lg: "920px",
    },
    objectFit: "contain",
    opacity: 0,
    animation: `${textReveal} 700ms ease forwards`,
    animationDelay: "850ms",
    willChange: "transform, opacity",
  },

  mainContentWithIntro: {
    opacity: 0,
    animation: `${contentFadeIn} 500ms ease forwards`,
    animationDelay: "2.65s",
  },

  mainContentVisible: {
    opacity: 1,
  },
};

const shouldShowIntroSplash = () => {
  const hasSeenSplash = sessionStorage.getItem(SPLASH_STORAGE_KEY);

  if (hasSeenSplash) return false;

  sessionStorage.setItem(SPLASH_STORAGE_KEY, "true");
  return true;
};

const AppIntroSplash = ({ children }: AppIntroSplashProps) => {
  const [showSplash, setShowSplash] = useState(shouldShowIntroSplash);

  useEffect(() => {
    if (!showSplash) return;

    const timer = window.setTimeout(() => {
      setShowSplash(false);
    }, 3200);

    return () => window.clearTimeout(timer);
  }, [showSplash]);

  return (
    <Box sx={styles.pageWrapper}>
      {showSplash && (
        <Box
          role="status"
          aria-label="Loading Gerb's Electrical Trading and Services"
          sx={styles.splash}
        >
          <Box sx={styles.splashBackdrop} />

          <Box sx={styles.splashContent}>
            <Box
              component="img"
              src={GerbsIcon}
              alt="Gerb's Electrical icon"
              sx={styles.icon}
            />

            <Box
              component="img"
              src={GerbsTypography}
              alt="Gerb's Electrical Trading and Services"
              sx={styles.typography}
            />
          </Box>
        </Box>
      )}

      <Box
        sx={
          showSplash ? styles.mainContentWithIntro : styles.mainContentVisible
        }
      >
        {children}
      </Box>
    </Box>
  );
};

export default AppIntroSplash;
