import { motion } from "framer-motion";
import "./GlassButton.scss";

export default function GlassButton({ text = "УЗНАТЬ БОЛЬШЕ" }) {
  return (
    <motion.button
      className="glass-button"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Светящийся шар */}
      <span className="light-orb" />

      <span className="label">{text}</span>
      <span className="arrow">→</span>
    </motion.button>
  );
}
