import {motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

motion

const AnimatedGridItem = ({ title, items, delay = 0 }) => {
  const controls = useAnimation(); 
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

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
        background: "rgba(255, 255, 255, 0.1)",
        padding: "1.5rem",
        borderRadius: "8px",
      }}
    >
      <h2>{title}</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i} style={{ listStyle: "none", lineHeight: "1.6" }}>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default AnimatedGridItem;