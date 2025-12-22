import './Location.scss';

export default function Location() {
  return (
    <section className="location-section">
      <div className="location-content">
        <div className="info">
          <h2>Где мы находимся</h2>

          <p>
            Café Nostalgie — это место, где время замедляется.
            Мы находимся в самом центре Москвы.
          </p>

          <div className="schedule">
            <h4>Часы работы</h4>
            <p>Пн–Пт: 08:00 – 20:00</p>
            <p>Сб–Вс: 09:00 – 22:00</p>
          </div>

          <p className="address">
            📍 Москва, ул. Тверская, 7
          </p>
        </div>

        <div className="map">
          <iframe
            title="map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Москва,+ул.+Тверская,+7&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
