import './About.scss';
import Interiors from '../../assets/img/interiors.jpg';
import { Link } from "react-router-dom";
import MagicButton from '../../assets/Button/Button';
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <motion.div
        className="card-container"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="card-image">
          <img src={Interiors} alt="Интерьер кафе" />
          <Link to="/coffee-varieties">
            <MagicButton text="Наши сорта кофе" />
          </Link>
        </div>

        <div className="card-text">
          <h2>Добро пожаловать в наш кофейный рай</h2>
          <p>
            Здесь каждое утро начинается с аромата свежемолотых зерен,
            мягкой музыки и выпечки, приготовленной вручную.
            Мы собрали лучшее из французских традиций.
          </p>
          <Link to="/process">
            <MagicButton text="О процессе приготовления" />
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="stats"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          show: { transition: { staggerChildren: 0.25 } }
        }}
      >
        {[
          { num: "25+", text: "Видов напитков" },
          { num: "1 250+", text: "Довольных гостей" }
        ].map((s) => (
          <motion.div
            className="stat"
            key={s.text}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <span className="number">{s.num}</span>
            <p>{s.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
