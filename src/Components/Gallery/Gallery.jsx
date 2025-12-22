import './Gallery.scss';
import img1 from '../../assets/img/coffeerelax.png';
import img2 from '../../assets/img/interiors.jpg';
import img3 from '../../assets/img/coffedesert.jpg';
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <motion.section
      className="gallery-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="gallery-header">
        <h2>Атмосфера Café Nostalgie</h2>
        <p>
          Каждая деталь нашего пространства создана для уюта и наслаждения моментом.
        </p>
      </div>

      <div className="gallery-grid">
        {[img1, img2, img3].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="Gallery"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))}
      </div>
    </motion.section>
  );
}
