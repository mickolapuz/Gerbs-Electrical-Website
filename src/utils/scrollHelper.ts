export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export const getSectionIdFromHref = (href: string) => {
  const hashIndex = href.indexOf("#");

  if (hashIndex === -1) return null;

  return href.slice(hashIndex + 1);
};
