/**
 * Move to Y vertical position
 */
export const scrollToY = yPosition => {
  window.scrollTo({
    top: yPosition,
    behavior: 'smooth', // Optional: smooth scrolling animation
  });
};
