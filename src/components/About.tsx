import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./About.css"; 

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" data-aos="fade-up" className="about-section">
      <div className="about-text">
        <h2>
          SOBRE <br /> O NEURAMIND
        </h2>
        <p>
          O NeuraMind é uma plataforma de Inteligência Artificial criada para transformar dados em decisões inteligentes. Automatize processos, descubra padrões invisíveis e leve sua empresa a um novo nível de eficiência com nossa IA em constante evolução.
        </p>
        <div className="about-buttons">
          <button className="btn-primary">Beta Testing</button>
          <button className="btn-secondary">Marketplace</button>
        </div>
      </div>
      <div className="about-slider">
        <Swiper
          modules={[EffectCoverflow, Navigation]}
          navigation
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          className="swiper-container"
        >
          <SwiperSlide className="slide-card">
            <div className="card-content gradient1">
              <h3>Main PVP</h3>
              <div className="card-image"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-card">
            <div className="card-content gradient2">
              <h3>Fight Survival</h3>
              <div className="card-image"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-card">
            <div className="card-content gradient3">
              <h3>Raid Boss</h3>
              <div className="card-image"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
