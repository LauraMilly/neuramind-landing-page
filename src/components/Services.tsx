import { motion } from "framer-motion";
import "./Services.css";

const services = [
        {
            title: "Trabalhe menos, produza mais com IA inteligente",
            desc: "Elimine tarefas repetitivas com fluxos automatizados por IA. Aumente a eficiência operacional, reduza erros humanos e libere sua equipe para focar em tarefas estratégicas que realmente importam.",
            icon: "automocao.png",
            direction: "left"
        },
        {
            title: "Olhos digitais que enxergam além do óbvio",
            desc: "Reconheça padrões visuais com precisão em tempo real. A Visão Computacional permite identificar objetos, rostos, comportamentos e até anomalias em imagens e vídeos com alto grau de acurácia.",
            icon: "visao.png",
            direction: "right"
        },
        {
            title: "IA que aprende com seus dados, em tempo real",
            desc: "Crie modelos inteligentes que se adaptam e evoluem com base nos dados da sua empresa. Tome decisões mais assertivas com algoritmos que identificam padrões, tendências e oportunidades ocultas.",
            icon: "ml.png",
            direction: "left"
        },
        {
            title: "Bots que entendem, respondem e evoluem",
            desc: "Compreensão de linguagem natural para assistentes inteligentes. Melhore o atendimento ao cliente com chatbots que interagem com fluidez, entendem contextos e aprendem com cada conversa.",
            icon: "chatbot.png",
            direction: "right"
        }
        ];


export default function ServicesTimeline() {
  return (
    <section className="services-timeline-section" id="services">
      <h2>
        <span className="gradient-text">Soluções que evoluem com sua <span className="empresa">empresa</span></span>
      </h2>

      <div className="timeline">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${service.direction}`}
            initial={{ opacity: 0, x: service.direction === "left" ? -100 : 100, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-icon">
              <img src={`/icons/${service.icon}`} alt={service.title} />
            </div>
            <div className="timeline-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
