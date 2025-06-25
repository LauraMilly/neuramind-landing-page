import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-expect-error – import CSS externo (Swiper não tem typings para isso)
import "swiper/css";
import "./About.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cards = [
      {
        title: "Automação",
        icon: "automocao.png",
        desc: "Reduza drasticamente o tempo gasto em tarefas manuais e repetitivas com sistemas de automação baseados em inteligência artificial, otimizando fluxos e aumentando a produtividade operacional."
      },
      {
        title: "Análise de Dados",
        icon: "analise.png",
        desc: "Transforme grandes volumes de dados em insights estratégicos através de análises preditivas e descritivas que auxiliam na tomada de decisões inteligentes e embasadas."
      },
      {
        title: "Visão Computacional",
        icon: "visao.png",
        desc: "Implemente soluções capazes de interpretar imagens e vídeos em tempo real, permitindo reconhecimento facial, análise de padrões visuais e automação de inspeções visuais."
      },
      {
        title: "NLP",
        icon: "nlp.png",
        desc: "Aproveite o poder do Processamento de Linguagem Natural para entender, interpretar e responder a comandos em linguagem humana com alta precisão e contexto."
      },
      {
        title: "IA Adaptativa",
        icon: "adaptativa.png",
        desc: "Utilize modelos inteligentes que se ajustam automaticamente com o tempo, aprendendo com novos dados e comportamentos para oferecer respostas cada vez mais personalizadas."
      },
      {
        title: "Cibersegurança",
        icon: "ciberseguranca.png",
        desc: "Fortaleça a segurança digital com soluções preditivas baseadas em IA que detectam ameaças em tempo real, previnem ataques e protegem dados sensíveis com maior eficiência."
      },
      {
        title: "Chatbots",
        icon: "chatbot.png",
        desc: "Implemente assistentes virtuais inteligentes capazes de atender clientes 24/7, aprendendo com interações para melhorar continuamente a experiência do usuário."
      },
      {
        title: "Machine Learning",
        icon: "ml.png",
        desc: "Crie modelos capazes de aprender com os dados, detectar padrões complexos e gerar previsões precisas, tornando seus sistemas mais autônomos e eficientes com o tempo."
      }
    ]
    ;

  return (
    <section id="about" className="about-section">
      <div className="about-text" data-aos="fade-up">
        <h2>
          SOBRE <br />O <span>NEURAMIND</span>
        </h2>
        <p>
          O NeuraMind é uma plataforma de Inteligência Artificial criada para transformar dados em decisões inteligentes.
          Automatize processos, descubra padrões invisíveis e leve sua empresa a um novo nível de eficiência com nossa IA em constante evolução.
        </p>
        <div className="about-buttons">
          <button className="btn-primary">Beta Testing</button>
          <button className="btn-secondary">Marketplace</button>
        </div>
      </div>

      <div className="about-cards desktop">
        {cards.map((card, index) => (
          <div
            key={index}
            className="about-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img src={`/icons/${card.icon}`} alt={card.title} className="card-icon" />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="about-cards mobile">
        <Swiper slidesPerView={1} spaceBetween={20}>
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                className="about-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img src={`/icons/${card.icon}`} alt={card.title} className="card-icon" />
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
