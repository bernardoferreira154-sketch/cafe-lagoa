import React, { useState } from 'react';
import {
  Coffee, Menu, X, ArrowUpRight, Clock3, MapPin, Phone,
  Instagram, ArrowRight, Leaf
} from 'lucide-react';

const products = [
  {
    category: 'Bebidas',
    name: 'Cappuccino da casa',
    description: 'Espresso, leite vaporizado e um toque de canela.',
    price: 'R$ 12,00',
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=85',
    alt: 'Cappuccino cremoso servido em uma xícara de cerâmica'
  },
  {
    category: 'Salgados',
    name: 'Pão de queijo recheado',
    description: 'Massa de polvilho com recheio de requeijão cremoso.',
    price: 'R$ 9,50',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484c3?auto=format&fit=crop&w=900&q=85',
    alt: 'Pães dourados recém-assados sobre uma mesa'
  },
  {
    category: 'Doces',
    name: 'Torta de banana com canela',
    description: 'Massa crocante e banana caramelizada.',
    price: 'R$ 14,00',
    image: 'https://images.unsplash.com/photo-1562007908-17c67e878c88?auto=format&fit=crop&w=900&q=85',
    alt: 'Fatia de torta artesanal servida como sobremesa'
  }
];

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' }
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#inicio" aria-label="Café Lagoa — página inicial" onClick={closeMenu}>
          <span className="brand-icon"><Coffee size={22} strokeWidth={1.8} /></span>
          <span>Café <strong>Lagoa</strong></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={`navigation ${menuOpen ? 'navigation-open' : ''}`} aria-label="Navegação principal">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              className={index === 0 ? 'nav-link active' : 'nav-link'}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> LAGOA DA CONCEIÇÃO <span className="eyebrow-separator">·</span> FLORIANÓPOLIS</div>
          <h1>Café coado,<br />vista para a <em>lagoa.</em></h1>
          <p className="hero-description">
            Grãos de pequenos produtores do sul do Brasil, pães de fermentação natural e doces feitos todos os dias aqui na casa.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#catalogo">Ver cardápio <ArrowRight size={17} /></a>
            <a className="button button-secondary" href="#contato">Fale com a gente</a>
          </div>
          <div className="hero-note">
            <span className="note-icon"><Leaf size={17} /></span>
            <span>Feito com calma, servido com carinho.</span>
          </div>
        </div>

        <div className="hero-visual">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1400&q=90"
            alt="Interior acolhedor de uma cafeteria com luz natural e balcão de café"
          />
          <div className="image-label">
            <span className="image-label-icon"><Coffee size={19} /></span>
            <span><strong>Seu cantinho na Lagoa</strong><small>Um café, uma pausa, uma vista.</small></span>
          </div>
          <div className="hero-image-index">01 <span /> 03</div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }) {
  return (
    <article className="product-card" style={{ '--card-index': index }}>
      <div className="product-image-wrap">
        <img className="product-image" src={product.image} alt={product.alt} loading="lazy" />
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-content">
        <div className="product-heading">
          <h3>{product.name}</h3>
          <span className="product-price">{product.price}</span>
        </div>
        <p>{product.description}</p>
      </div>
    </article>
  );
}

function Catalog() {
  return (
    <section className="catalog section" id="catalogo">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">FEITO NA CASA</span>
            <h2>Mais pedidos<span className="heading-period">.</span></h2>
            <p>Os favoritos de quem passa por aqui.</p>
          </div>
          <a className="text-link" href="#contato">Ver cardápio completo <ArrowUpRight size={18} /></a>
        </div>
        <div className="products-grid">
          {products.map((product, index) => <ProductCard key={product.name} product={product} index={index} />)}
        </div>
        <div className="catalog-bottom">
          <span>☕</span>
          <p>Tem sempre algo fresquinho esperando por você.</p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section" id="sobre">
      <div className="container about-inner">
        <div className="about-mark" aria-hidden="true">
          <div className="about-mark-circle"><Coffee size={44} strokeWidth={1.2} /></div>
          <span>DESDE 1900 E BOLINHA</span>
        </div>
        <div className="about-copy">
          <span className="section-kicker">UM POUCO SOBRE NÓS</span>
          <h2>Mais que café.<br /><em>Um respiro no dia.</em></h2>
          <p>Acreditamos nas coisas simples: um bom café, ingredientes de verdade e tempo para aproveitar. Um lugar para chegar sem pressa.</p>
          <a className="text-link" href="#contato">Venha conhecer <ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const address = 'Lagoa da Conceição, Florianópolis - SC';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="contact section" id="contato">
      <div className="container">
        <div className="contact-intro">
          <span className="section-kicker">VAI SER UM PRAZER</span>
          <h2>Passa aqui <em>qualquer dia.</em></h2>
          <p>Seu próximo café favorito pode estar a uma visita de distância.</p>
        </div>
        <div className="contact-grid">
          <article className="contact-item">
            <span className="contact-icon"><Clock3 size={22} strokeWidth={1.7} /></span>
            <div><h3>Horário</h3><p>Terça a domingo<br />das 7h às 19h</p></div>
          </article>
          <article className="contact-item">
            <span className="contact-icon"><MapPin size={22} strokeWidth={1.7} /></span>
            <div><h3>Endereço</h3><p><a href={mapsUrl} target="_blank" rel="noreferrer">Lagoa da Conceição,<br />Florianópolis — SC <ArrowUpRight size={13} /></a></p></div>
          </article>
          <article className="contact-item">
            <span className="contact-icon"><Phone size={22} strokeWidth={1.7} /></span>
            <div><h3>Telefone</h3><p className="contact-placeholder">telefone-real.exe<br />(ele é bem real)</p></div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-icon"><Coffee size={21} strokeWidth={1.8} /></span>
          <span>Café <strong>Lagoa</strong></span>
        </a>
        <p>Um bom café muda o dia.</p>
        <a className="footer-social" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
          <Instagram size={19} />
        </a>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Café Lagoa</span>
        <span>Projeto escolar</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalog />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}