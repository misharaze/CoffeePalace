import './Reviews.scss';
import { motion } from "framer-motion";

const reviews = [
  {
    name: 'Émilie',
    text: 'Латте здесь — мой утренний ритуал.',
    role: 'Постоянный гость'
  },
  {
    name: 'Lucas',
    text: 'Отличное место для работы и отдыха.',
    role: 'Фрилансер'
  },
  {
    name: 'Sophie',
    text: 'Идеальный капучино и атмосфера.',
    role: 'Ценитель кофе'
  },
];

export default function Reviews() {
  return (
    <motion.section
      className="reviews-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="reviews-header">
        <h2>Отзывы гостей</h2>
        <p>Несколько слов от наших посетителей.</p>
      </div>

      <div className="reviews-grid">
        {reviews.map((r) => (
          <motion.div
            className="review-card"
            key={r.name}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text">“{r.text}”</p>
            <p className="name">{r.name}</p>
            <p className="role">{r.role}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
