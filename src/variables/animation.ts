export const animationCard = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeInOut", delay: 0.5 },
  viewport: { once: true },
};
export const animationSection = {
  initial: { opacity: 0, scale: 0.99 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.7, ease: "easeInOut", delay: 0.3 },
  viewport: { once: true },
};

export const animationHeader = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 },
  viewport: { once: true },
};
export const animationTitleSection = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeInOut", delay: 0.3 },
  viewport: { once: true },
};

// export const animationSection = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 1, ease: "easeInOut", delay: 0.5 },
//   viewport: { once: true },
// };
