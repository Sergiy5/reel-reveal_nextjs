/**
 * Move to Y vertical position
 */
export const scrollToY = (yPosition: number) => {
  window.scrollTo({
    top: yPosition,
    behavior: 'smooth',
  });
};
