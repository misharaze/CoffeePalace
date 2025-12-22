import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  

  return (
    <header className="header">
    <nav className="nav">
  
      <Link to="/" className="logo">
       Кофейня радуга
      </Link>
  
    
  
      {/* BURGER */}
      <motion.div
        className={`burger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.85 }}
      >
        <span />
        <span />
        <span />
      </motion.div>
  
      {/* DESKTOP */}
      <ul className="nav-links desktop">
        <li><NavLink to="/menu">Меню</NavLink></li>
        <li><NavLink to="/cart">Корзина</NavLink></li>
        <li><NavLink to="/contact">Контакты</NavLink></li>
      </ul>
  
      {/* MOBILE — ТОЛЬКО МЕНЮ */}
      <AnimatePresence>
        {open && (
          <motion.ul
            className="nav-links mobile"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.35 }}
          >
            <li onClick={() => setOpen(false)}>
              <NavLink to="/menu">Меню</NavLink>
            </li>
            <li onClick={() => setOpen(false)}>
              <NavLink to="/cart">Корзина</NavLink>
            </li>
            <li onClick={() => setOpen(false)}>
              <NavLink to="/contact">Контакты</NavLink>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    {/* THEME SWITCH — ВНЕ AnimatePresence */}
    <div className="switch-wrapper" onClick={toggleTheme}>
        <motion.div
          className={`switch-knob ${theme === "light" ? "light" : ""}`}
          layout
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </div>
    </nav>
  </header>
  
  );
}
