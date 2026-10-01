import { useEffect, useState } from "react";
import slide01 from "./assets/slide-01.png";
import slide02 from "./assets/slide-02.png";
import slide03 from "./assets/slide-03.png";
import logo from "./assets/logo.webp";
import logoTitle from "./assets/logo-title.png";

// Características
import exploracaoImg from "./assets/exploracao.png";
import combateImg from "./assets/combate.png";
import chefesImg from "./assets/chefes.png";
import ambientacaoImg from "./assets/ambientacao.png";

// Equipe
import balestriniImg from "./assets/gabriel_balestrini.png";
import cristianImg from "./assets/gabriel_cristian.png";
import lucasImg from "./assets/lucas_vinicius.png";
import alvaroImg from "./assets/alvaro.png";

export default function App() {
  const slides = [slide01, slide02, slide03];
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setAtual((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a href="#inicio" className="logo" aria-label="Início">
            <img src={logo} alt="Logo Lands of Corruption" />
          </a>

          <nav>
            <a href="#inicio">Início</a>
            <a href="#trailer">Trailer</a>
            <a href="#sobre">Sobre</a>
            <a href="#caracteristicas">Características</a>
            <a href="#equipe">Equipe</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <img src={logoTitle} alt="Lands of Corruption" className="hero-logo" />
          <h1 className="sr-only">Lands of Corruption</h1>
          <a
            className="btn-download"
            href="https://github.com/projetotccash-bit/landing_of_corruption/releases/download/v1.0.0/landsofcorruption.rar"
            download
          >
            Baixar Jogo
          </a>
        </div>

        <div className="hero-image">
          <div className="carousel" aria-label="Imagens do jogo">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${atual * 100}%)` }}
            >
              {slides.map((src, i) => (
                <div className="carousel-slide" key={i}>
                  <img src={src} alt={`Cena do jogo ${i + 1}`} />
                </div>
              ))}
            </div>

            <div className="carousel-dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === atual ? "active" : ""}`}
                  onClick={() => setAtual(i)}
                  aria-label={`Ir para imagem ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="trailer" id="trailer">
        <h2>Trailer</h2>
        <div className="trailer-box">
          <iframe
            src="https://www.youtube.com/embed/Q3hXWzH4iNA"
            title="Lands of Corruption - Trailer Oficial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      <section className="sobre" id="sobre">
        <h2>Sobre o Projeto</h2>
        <p>
          Este jogo foi desenvolvido como projeto de Trabalho de Conclusão de Curso,
          unindo design, programação e narrativa em uma experiência única.
        </p>
        <p>
          A proposta é levar o jogador a uma jornada de exploração e descobertas em
          um mundo de fantasia, enfrentando desafios e revelando os mistérios de um
          reino esquecido.
        </p>
      </section>

      <section className="caracteristicas" id="caracteristicas">
        <h2>Características</h2>
        <div className="cards">
          <div className="card">
            <img src={exploracaoImg} alt="Exploração" className="card-image" />
            <h3>Exploração</h3>
            <p>Descubra cenários ricos, segredos escondidos e regiões misteriosas.</p>
          </div>
          <div className="card">
            <img src={combateImg} alt="Combate" className="card-image" />
            <h3>Combate</h3>
            <p>Sistema de batalhas simples e direto.</p>
          </div>
          <div className="card">
            <img src={chefesImg} alt="Chefes" className="card-image" />
            <h3>Chefes</h3>
            <p>Enfrente inimigos poderosos em confrontos épicos e memoráveis.</p>
          </div>
          <div className="card">
            <img src={ambientacaoImg} alt="Ambientação" className="card-image" />
            <h3>Ambientação</h3>
            <p>Um mundo de fantasia com clima envolvente.</p>
          </div>
        </div>
      </section>

      <section className="devs" id="equipe">
        <h2>Equipe</h2>
        <div className="cards">
          <div className="card">
            <img src={balestriniImg} alt="Gabriel Balestrini" className="team-avatar" />
            <h3>Gabriel Balestrini</h3>
            <p>Programador</p>
          </div>
          <div className="card">
            <img src={cristianImg} alt="Gabriel Cristian" className="team-avatar" />
            <h3>Gabriel Cristian</h3>
            <p>Designer</p>
          </div>
          <div className="card">
            <img src={lucasImg} alt="Lucas Vinicius" className="team-avatar" />
            <h3>Lucas Vinicius</h3>
            <p>Documentação do TCC</p>
          </div>
          <div className="card">
            <img src={alvaroImg} alt="Álvaro" className="team-avatar" />
            <h3>Álvaro</h3>
            <p>Atividades Externas</p>
          </div>
        </div>
      </section>

      <footer className="rodape">
        <p>
          <strong>Lands of Corruption</strong> — Projeto de TCC
        </p>
        <p>© 2026</p>
      </footer>
    </>
  );
}
