import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useTheme } from "styled-components";

const AnimatedGridItem = ({ title, items, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const theme = useTheme();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.6, delay }}
      style={{
        background: theme.surface,
        padding: "1.8rem",
        borderRadius: "20px",
        border: `1px solid ${theme.border}`,
        backdropFilter: "blur(18px)",
        boxShadow: theme.cardShadow,
        color: theme.text,
      }}
    >
      <h2 style={{
        color: theme.accent,
        fontSize: "1.35rem",
        marginBottom: "0.75rem",
      }}>
        {title}
      </h2>
      <ul>
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              listStyle: "none",
              lineHeight: "1.6",
              color: theme.textsecondary,
              fontSize: "1rem",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default AnimatedGridItem;