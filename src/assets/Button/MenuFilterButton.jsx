import { motion } from "framer-motion";
import "./MenuFilterButton.scss";

export default function MenuFilterButton({ children, active, onClick }) {
  return (
    <motion.button
      className={`menu-filter-btn ${active ? "active" : ""}`}
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
