import { useEffect } from "react";
import "./index.css";
import logo from "./assets/logo-abg.png";

const whatsappNumber1 = "5521964307690";
const whatsappNumber2 = "5521995782152";

const phone1 = "+5521964307690";
const phone2 = "+5521995782152";

const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento com a ABG Engenharia. Gostaria de saber mais sobre os serviços e enviar algumas informações sobre o meu projeto."
);

const whatsappLink1 = `https://wa.me/${whatsappNumber1}?text=${whatsappMessage}`;
const whatsappLink2 = `https://wa.me/${whatsappNumber2}?text=${whatsappMessage}`;

const services = [
  {
    number: "01",
    title: "Pintura e Construções",
    description:
      "Serviços de pintura e soluções construtivas para ambientes residenciais, comerciais e corporativos.",
    icon: "building",
  },
  {
    number: "02",
    title: "Impermeabilização",
    description:
      "Proteção de estruturas contra infiltrações e umidade, contribuindo para maior durabilidade da construção.",
    icon: "shield",
  },
  {
    number: "03",
    title: "Instalações Elétricas e Hidráulicas",
    description:
      "Execução e adequação de instalações elétricas e hidráulicas com atenção à segurança e ao funcionamento.",
    icon: "bolt",
  },
  {
    number: "04",
    title: "Telhados",
    description:
      "Manutenção, recuperação e execução de soluções para telhados, buscando segurança e eficiência.",
    icon: "roof",
  },
  {
    number: "05",
    title: "Fachadas",
    description:
      "Recuperação, pintura e conservação de fachadas para valorizar e proteger a edificação.",
    icon: "facade",
  },
  {
    number: "06",
    title: "Projetos Executivos",
    description:
      "Planejamento técnico para transformar necessidades em soluções organizadas e executáveis.",
    icon: "plan",
  },
  {
    number: "07",
    title: "Reformas Prediais",
    description:
      "Reformas e adequações para renovar espaços, corrigir problemas e melhorar o uso das edificações.",
    icon: "reform",
  },
  {
    number: "08",
    title: "Jardinagem",
    description:
      "Cuidados e manutenção de áreas verdes para complementar e valorizar os espaços.",
    icon: "leaf",
  },
  {
    number: "09",
    title: "Gesso",
    description:
      "Soluções em gesso para acabamento, composição de ambientes e valorização estética.",
    icon: "layers",
  },
];

const faqs = [
  {
    question: "Como solicito um orçamento?",
    answer:
      "Você pode entrar em contato pelo WhatsApp ou preencher o formulário desta página. Nossa equipe recebe as informações e dá continuidade ao atendimento.",
  },
  {
    question: "A ABG atende reformas e manutenção?",
    answer:
      "Sim. A ABG atua com reformas, manutenção e diferentes soluções para edificações, de acordo com as necessidades de cada projeto.",
  },
  {
    question: "Posso enviar fotos e informações do serviço?",
    answer:
      "Sim. Pelo WhatsApp você pode enviar fotos, vídeos, medidas e outras informações que ajudem nossa equipe a entender melhor a necessidade.",
  },
  {
    question: "A ABG trabalha com diferentes tipos de serviços?",
    answer:
      "Sim. A empresa possui um portfólio amplo, incluindo pintura, impermeabilização, instalações, telhados, fachadas, reformas, jardinagem, gesso e projetos executivos.",
  },
  {
    question: "Depois do primeiro contato, qual é o próximo passo?",
    answer:
      "Após receber as informações iniciais, a equipe avalia a demanda e orienta sobre os próximos passos para elaboração do orçamento.",
  },
];

function Icon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    building: (
      <svg {...common}>
        <path d="M4 21V7l8-4 8 4v14" />
        <path d="M8 21v-5h8v5" />
        <path d="M8 9h.01" />
        <path d="M12 9h.01" />
        <path d="M16 9h.01" />
        <path d="M8 12h.01" />
        <path d="M12 12h.01" />
        <path d="M16 12h.01" />
      </svg>
    ),

    shield: (
      <svg {...common}>
        <path d="M12 3 20 6v5c0 5.2-3.3 8.9-8 10-4.7-1.1-8-4.8-8-10V6l8-3Z" />
        <path d="m8.5 12 2.3 2.3 4.8-5" />
      </svg>
    ),

    bolt: (
      <svg {...common}>
        <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />
      </svg>
    ),

    roof: (
      <svg {...common}>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),

    facade: (
      <svg {...common}>
        <path d="M5 21V5l7-3 7 3v16" />
        <path d="M8 8h2" />
        <path d="M14 8h2" />
        <path d="M8 12h2" />
        <path d="M14 12h2" />
        <path d="M9 21v-5h6v5" />
      </svg>
    ),

    plan: (
      <svg {...common}>
        <path d="M5 3h14v18H5z" />
        <path d="M8 7h8" />
        <path d="M8 11h3" />
        <path d="M14 11h2" />
        <path d="M8 15h8" />
      </svg>
    ),

    reform: (
      <svg {...common}>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17a2.1 2.1 0 0 0 3 3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.7-.6-.6-2.7 2.7-2.1Z" />
      </svg>
    ),

    leaf: (
      <svg {...common}>
        <path d="M20 4c-8.5.2-14.3 3.3-14.3 9.2 0 3.5 2.8 5.8 6.2 5.8C17.8 19 20 13.5 20 4Z" />
        <path d="M4 21c2.7-4.4 6.2-7.7 11-10" />
      </svg>
    ),

    layers: (
      <svg {...common}>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </svg>
    ),

    check: (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),

    menu: (
      <svg {...common}>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </svg>
    ),

    close: (
      <svg {...common}>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </svg>
    ),

    whatsapp: (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.5 3.5A11.9 11.9 0 0 0 12.04 0C5.45 0 .08 5.37.08 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62a11.96 11.96 0 0 0 5.86 1.49h.01c6.59 0 11.95-5.37 11.95-11.98 0-3.2-1.24-6.2-3.5-8.39ZM12.05 21.9h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.67.96.98-3.58-.23-.37a9.9 9.9 0 0 1-1.51-5.31C2.21 6.5 6.62 2.1 12.04 2.1c2.63 0 5.1 1.03 6.96 2.89a9.83 9.83 0 0 1 2.88 6.99c0 5.47-4.4 9.92-9.83 9.92Zm5.43-7.43c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    ),

    instagram: (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r=".7"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),

    mail: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),

    phone: (
      <svg {...common}>
        <path d="M6.6 3.5 4 4.8c-.7.3-1.1 1.1-.9 1.9 1.2 5.3 4.8 10 9.4 12.5.7.4 1.6.2 2-.4l1.6-2.4c.4-.6.3-1.4-.3-1.8l-2.5-1.6c-.5-.3-1.1-.3-1.5.1l-1.1 1c-2-1.2-3.7-2.9-4.9-4.9l1-1.1c.4-.4.4-1 .1-1.5L8.4 3.9c-.4-.6-1.2-.8-1.8-.4Z" />
      </svg>
    ),
  };

  return icons[name] || null;
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".services-grid .service-card, .process-grid .process-card"
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -35px 0px" }
    );

    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${(index % 3) * 100}ms`);
      element.classList.add("reveal-on-scroll");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site">
      <header className="header">
        <div className="container header-inner">
          <a href="#inicio" className="brand" aria-label="ABG Engenharia">
            <img src={logo} alt="ABG Engenharia" />
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#processo">Como funciona</a>
            <a href="#faq">Dúvidas</a>
            <a href="#contato">Contato</a>
          </nav>

          <a
            className="header-cta"
            href={whatsappLink1}
            target="_blank"
            rel="noreferrer"
          >
            <span>Solicitar orçamento</span>
          </a>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label="Abrir menu"
            onClick={() => {
              document.body.classList.add("menu-open");
            }}
          >
            <Icon name="menu" size={25} />
          </button>
        </div>
      </header>

      <div className="mobile-menu">
        <div className="mobile-menu-top">
          <img src={logo} alt="ABG Engenharia" />

          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => {
              document.body.classList.remove("menu-open");
            }}
          >
            <Icon name="close" size={25} />
          </button>
        </div>

        <nav>
          {[
            ["#inicio", "Início"],
            ["#sobre", "Sobre"],
            ["#servicos", "Serviços"],
            ["#processo", "Como funciona"],
            ["#faq", "Dúvidas"],
            ["#contato", "Contato"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => {
                document.body.classList.remove("menu-open");
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          className="mobile-whatsapp"
          href={whatsappLink1}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="whatsapp" size={20} />
          Solicitar orçamento
        </a>
      </div>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="eyebrow-line" />
                Engenharia • Construção • Manutenção
              </div>

              <h1>
                Soluções que
                <span> valorizam</span>
                <br />
                cada projeto.
              </h1>

              <p className="hero-description">
                A ABG Engenharia transforma necessidades em soluções
                executadas com planejamento, qualidade e atenção aos detalhes.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href={whatsappLink1}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Solicitar orçamento</span>
                  
                </a>

                <a className="button button-secondary" href="#servicos">
                  Conheça nossos serviços
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-item">
                  <strong>01</strong>
                  <span>
                    Atendimento
                    <br />
                    personalizado
                  </span>
                </div>

                <div className="trust-divider" />

                <div className="trust-item">
                  <strong>02</strong>
                  <span>
                    Soluções para
                    <br />
                    diferentes demandas
                  </span>
                </div>

                <div className="trust-divider" />

                <div className="trust-item">
                  <strong>03</strong>
                  <span>
                    Compromisso com
                    <br />
                    cada projeto
                  </span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card hero-card-main">
                <div className="hero-card-pattern" />

                <div className="hero-card-content">
                  <div className="hero-card-label">
                    <span />
                    Engenharia e soluções
                  </div>

                  <div className="hero-card-title">
                    <span>Do planejamento</span>
                    <strong>à execução.</strong>
                  </div>

                  <div className="hero-card-bottom">
                    <div className="mini-stat">
                      <strong>ABG</strong>
                      <span>Engenharia</span>
                    </div>

                    <div className="hero-round-arrow">
                      <Icon name="check" size={20} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-card floating-card-top">
                <div className="floating-icon">
                  <Icon name="check" size={18} />
                </div>

                <div>
                  <strong>Atendimento</strong>
                  <span>orientado ao seu projeto</span>
                </div>
              </div>

              <div className="floating-card floating-card-bottom">
                <span className="floating-number">09</span>

                <div>
                  <strong>Áreas de atuação</strong>
                  <span>soluções integradas</span>
                </div>
              </div>
            </div>
          </div>

          <a className="hero-scroll" href="#sobre">
            <span className="scroll-circle">
              <Icon name="check" size={15} />
            </span>
            <span>Explorar</span>
          </a>
        </section>

        <section className="intro-section" id="sobre">
          <div className="container">
            <div className="section-topline">
              <span>01</span>
              <span>Sobre a ABG</span>
            </div>

            <div className="intro-grid">
              <div className="intro-title">
                <p className="section-kicker">ABG Engenharia</p>

                <h2>
                  Engenharia pensada para
                  <span> entregar confiança.</span>
                </h2>
              </div>

              <div className="intro-text">
                <p>
                  Cada projeto possui necessidades diferentes. Por isso,
                  trabalhamos para compreender o que precisa ser feito antes
                  de buscar a melhor solução.
                </p>

                <p>
                  A ABG Engenharia atua em diferentes frentes da construção,
                  reforma e manutenção, oferecendo um atendimento próximo e
                  soluções adequadas a cada demanda.
                </p>

                <a className="text-link" href="#contato">
                  Fale com a ABG
                </a>
              </div>
            </div>

            <div className="values-grid">
              <article className="value-card value-card-featured">
                <span className="value-number">01</span>

                <div className="value-icon">
                  <Icon name="plan" size={25} />
                </div>

                <h3>Planejamento</h3>

                <p>
                  Entender o projeto é o primeiro passo para construir uma
                  solução mais eficiente.
                </p>
              </article>

              <article className="value-card">
                <span className="value-number">02</span>

                <div className="value-icon">
                  <Icon name="shield" size={25} />
                </div>

                <h3>Qualidade</h3>

                <p>
                  Atenção aos detalhes para entregar serviços alinhados às
                  necessidades de cada cliente.
                </p>
              </article>

              <article className="value-card">
                <span className="value-number">03</span>

                <div className="value-icon">
                  <Icon name="check" size={25} />
                </div>

                <h3>Compromisso</h3>

                <p>
                  Responsabilidade em cada etapa, desde o primeiro contato até
                  a conclusão do serviço.
                </p>
              </article>

              <article className="value-card">
                <span className="value-number">04</span>

                <div className="value-icon">
                  <Icon name="building" size={25} />
                </div>

                <h3>Experiência</h3>

                <p>
                  Diferentes soluções para atender demandas de construção,
                  reforma e manutenção.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="services-section" id="servicos">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-topline light">
                  <span>02</span>
                  <span>Serviços</span>
                </div>

                <h2>
                  Uma equipe para
                  <br />
                  <span>diferentes necessidades.</span>
                </h2>
              </div>

              <p>
                Da manutenção aos projetos de maior complexidade, reunimos
                diferentes soluções para facilitar a execução do seu projeto.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-top">
                    <span className="service-number">{service.number}</span>

                    <div className="service-icon">
                      <Icon name={service.icon} size={25} />
                    </div>
                  </div>

                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>

                  <a href="#contato" className="service-link">
                    Saiba mais
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="highlight-section">
          <div className="container">
            <div className="highlight-box">
              <div className="highlight-decoration" />

              <div className="highlight-content">
                <span className="section-kicker">Seu projeto começa aqui</span>

                <h2>
                  Tem uma demanda?
                  <br />
                  <span>Vamos conversar.</span>
                </h2>

                <p>
                  Conte para a ABG o que você precisa. Nossa equipe recebe as
                  principais informações e orienta você sobre os próximos
                  passos.
                </p>

                <a
                  className="button button-light"
                  href={whatsappLink1}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Falar pelo WhatsApp</span>

                  
                </a>
              </div>

              <div className="highlight-side">
                <div className="highlight-circle">
                  <Icon name="check" size={35} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="process-section" id="processo">
          <div className="container">
            <div className="section-topline">
              <span>03</span>
              <span>Como funciona</span>
            </div>

            <div className="process-heading">
              <h2>
                Simples para você.
                <br />
                <span>Organizado para o projeto.</span>
              </h2>

              <p>
                Do primeiro contato à execução, buscamos deixar cada etapa
                mais clara e objetiva.
              </p>
            </div>

            <div className="process-grid">
              <article className="process-card">
                <span className="process-number">01</span>

                <div className="process-icon">
                  <Icon name="phone" size={24} />
                </div>

                <h3>Você entra em contato</h3>

                <p>
                  Envie sua necessidade, dúvidas, fotos ou outras informações
                  que possam ajudar a entender o serviço.
                </p>
              </article>

              <article className="process-card process-card-active">
                <span className="process-number">02</span>

                <div className="process-icon">
                  <Icon name="plan" size={24} />
                </div>

                <h3>Entendemos o projeto</h3>

                <p>
                  A equipe analisa as informações e identifica os próximos
                  passos para atender sua demanda.
                </p>
              </article>

              <article className="process-card">
                <span className="process-number">03</span>

                <div className="process-icon">
                  <Icon name="check" size={24} />
                </div>

                <h3>Definimos a solução</h3>

                <p>
                  A partir da necessidade apresentada, avançamos com a solução
                  mais adequada para o serviço.
                </p>
              </article>

              <article className="process-card">
                <span className="process-number">04</span>

                <div className="process-icon">
                  <Icon name="building" size={24} />
                </div>

                <h3>Seguimos para a execução</h3>

                <p>
                  Com o projeto alinhado, o atendimento avança para a execução
                  do serviço combinado.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="container">
            <div className="faq-grid">
              <div className="faq-intro">
                <div className="section-topline">
                  <span>04</span>
                  <span>Tire suas dúvidas</span>
                </div>

                <h2>
                  Antes de começar,
                  <br />
                  <span>pergunte.</span>
                </h2>

                <p>
                  Reunimos algumas das dúvidas mais comuns para facilitar seu
                  primeiro contato com a ABG Engenharia.
                </p>

                <a
                  className="button button-primary"
                  href={whatsappLink2}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Falar com a equipe</span>

                  
                </a>
              </div>

              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <details className="faq-item" key={faq.question}>
                    <summary>
                      <span className="faq-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="faq-question">{faq.question}</span>

                      <span className="faq-plus">
                        <span />
                        <span />
                      </span>
                    </summary>

                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="container">
            <div className="contact-card">
              <div className="contact-info">
                <div className="section-topline light">
                  <span>05</span>
                  <span>Contato</span>
                </div>

                <h2>
                  Conte para a ABG
                  <br />
                  <span>o que você precisa.</span>
                </h2>

                <p>
                  Preencha algumas informações sobre o seu projeto. Assim,
                  nossa equipe já recebe os principais detalhes e pode dar
                  continuidade ao seu atendimento pelo WhatsApp.
                </p>

                <div className="contact-list">
                  <a
                    href={whatsappLink1}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-item"
                  >
                    <span className="contact-icon">
                      <Icon name="whatsapp" size={21} />
                    </span>

                    <span>
                      <small>WhatsApp</small>
                      <strong>(21) 96430-7690</strong>
                    </span>
                  </a>

                  <a
                    href={whatsappLink2}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-item"
                  >
                    <span className="contact-icon">
                      <Icon name="whatsapp" size={21} />
                    </span>

                    <span>
                      <small>WhatsApp</small>
                      <strong>(21) 99578-2152</strong>
                    </span>
                  </a>

                  <a href={`tel:${phone1}`} className="contact-item">
                    <span className="contact-icon">
                      <Icon name="phone" size={20} />
                    </span>

                    <span>
                      <small>Telefone</small>
                      <strong>(21) 96430-7690</strong>
                    </span>
                  </a>

                  <a
                    href="mailto:abgenharia1@hmail.com"
                    className="contact-item"
                  >
                    <span className="contact-icon">
                      <Icon name="mail" size={20} />
                    </span>

                    <span>
                      <small>E-mail</small>
                      <strong>abgenharia1@hmail.com</strong>
                    </span>
                  </a>
                </div>

                <a
                  href="https://www.instagram.com/abgengenharia1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item instagram-contact"
                  aria-label="Visitar o Instagram da ABG Engenharia, @abgengenharia1"
                >
                  <span className="contact-icon">
                    <Icon name="instagram" size={20} />
                  </span>
                  <span>
                    <small>Instagram</small>
                    <strong>@abgengenharia1</strong>
                  </span>
                </a>
              </div>

              <div className="contact-form-area">
                <div className="form-header">
                  <span>Solicite seu orçamento</span>

                  <p>
                    Quanto mais informações você enviar, melhor poderemos
                    entender sua necessidade.
                  </p>
                </div>

                <form
                  onSubmit={(event) => {
                    event.preventDefault();

                    const form = event.currentTarget;
                    const data = new FormData(form);

                    const name = data.get("name") || "";
                    const phone = data.get("phone") || "";
                    const service = data.get("service") || "";
                    const message = data.get("message") || "";

                    const text = encodeURIComponent(
                      `Olá! Gostaria de solicitar um orçamento com a ABG Engenharia.

Nome: ${name}
Telefone: ${phone}
Serviço: ${service}
Mensagem: ${message}`
                    );

                    window.open(
                      `https://wa.me/${whatsappNumber1}?text=${text}`,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  <div className="form-row">
                    <label>
                      <span>Nome</span>

                      <input
                        type="text"
                        name="name"
                        placeholder="Como podemos chamar você?"
                        required
                      />
                    </label>

                    <label>
                      <span>WhatsApp</span>

                      <input
                        type="tel"
                        name="phone"
                        placeholder="(21) 00000-0000"
                        required
                      />
                    </label>
                  </div>

                  <label>
                    <span>Serviço de interesse</span>

                    <select name="service" defaultValue="" required>
                      <option value="" disabled>
                        Selecione uma opção
                      </option>

                      {services.map((service) => (
                        <option key={service.number} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    <span>Conte um pouco sobre o projeto</span>

                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Descreva o que você precisa, o local do serviço, prazo ou outras informações importantes."
                      required
                    />
                  </label>

                  <button className="form-submit" type="submit">
                    <span>Enviar pelo WhatsApp</span>

                    
                  </button>

                  <p className="form-note">
                    Ao enviar, você será direcionado para o WhatsApp da ABG
                    Engenharia.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <a href="#inicio" className="footer-brand">
              <img src={logo} alt="ABG Engenharia" />
            </a>

            <p>
              Soluções em engenharia, construção, reformas e manutenção para
              diferentes necessidades.
            </p>

            <a className="footer-back-top" href="#inicio">
              <span>Voltar ao topo</span>
            </a>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} ABG Engenharia. Todos os direitos
              reservados.
            </span>

            <div>
              <a href="#sobre">Sobre</a>
              <a href="#servicos">Serviços</a>
              <a href="#faq">Dúvidas</a>
              <a href="#contato">Contato</a>
            </div>
          </div>

          <div className="developer-credit">
            Desenvolvido por <strong>Bia Rodrigues</strong>
          </div>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappLink1}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a ABG Engenharia pelo WhatsApp"
      >
        <Icon name="whatsapp" size={23} />
        <span>Fale conosco</span>
      </a>
    </div>
  );
}

export default App;