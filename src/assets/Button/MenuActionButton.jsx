import { motion } from "framer-motion";
import "./MenuActionButton.scss";

export default function MenuActionButton({ children, onClick, size= "default" }) {
  return (
    <motion.button
    className={`menu-action-button ${size}`}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="shine" />
      {children}
    </motion.button>
  );
}
