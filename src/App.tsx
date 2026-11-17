
import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Phone,
  MapPin,
  PackageCheck,
  Snowflake,
  Truck,
  ShieldCheck,
  Factory,
  MessageCircle,
  CheckCircle2,
  Leaf,
} from 'lucide-react';
import './index.css';

const LOGO = '/jagdamba-vada-logo.png';

type Language = 'MR' | 'EN';

const products = [
  {
    no: '01',
    nameMr: 'बर्गर वडा',
    nameEn: 'Burger Vada',
    descMr: 'बर्गरला द्या अस्सल वड्याची झणझणीत चव. प्रत्येक घासात चव आणि दर्जा!',
    descEn: 'A hearty, flavour-packed patty made for memorable burger creations.',
    tagMr: 'ग्राहकांची खास पसंती',
    tagEn: 'CUSTOMER FAVOURITE',
  },
  {
    no: '02',
    nameMr: 'कॉर्न पॅटीज',
    nameEn: 'Corn Patties',
    descMr: 'मक्याची चव आणि कुरकुरीतपणाचा भन्नाट संगम. प्रत्येक मेनूसाठी खास!',
    descEn: 'Sweet corn goodness with a crisp golden finish.',
    tagMr: 'खमंग आणि कुरकुरीत',
    tagEn: 'CRISPY & DELICIOUS',
  },
  {
    no: '03',
    nameMr: 'साबुदाणा वडा',
    nameEn: 'Sabudana Vada',
    descMr: 'महाराष्ट्रीयन आवडता पदार्थ. उपवास असो वा नाश्ता, चवीला नेहमीच भारी!',
    descEn: 'A much-loved classic with a satisfying bite.',
    tagMr: 'पारंपरिक चव',
    tagEn: 'TRADITIONAL TASTE',
  },
  {
    no: '04',
    nameMr: 'मक्का पालक वडा',
    nameEn: 'Makka Palak Vada',
    descMr: 'मक्का आणि पालक यांची रुचकर जोडी. तुमच्या मेनूमध्ये एक वेगळीच भर!',
    descEn: 'A delicious combination of corn and leafy greens.',
    tagMr: 'चवीचा अनोखा संगम',
    tagEn: 'A UNIQUE BLEND',
  },
  {
    no: '05',
    nameMr: 'महाराजा वडा',
    nameEn: 'Maharaja Vada',
    descMr: 'नावाप्रमाणेच खास! तुमच्या खाद्य व्यवसायाच्या मेनूला देणारा शाही पर्याय.',
    descEn: 'A signature-style snack made to stand out on your menu.',
    tagMr: 'आमची खासियत',
    tagEn: 'SIGNATURE RANGE',
  },
  {
    no: '06',
    nameMr: 'स्पेशल जगदंबा वडा',
    nameEn: 'Special Jagdamba Vada',
    descMr: 'जगदंबाची खास चव. एकदा खाल तर पुन्हा मागाल, असा रुचकर अनुभव!',
    descEn: 'Our special offering, created for customers to remember.',
    tagMr: 'जगदंबाची खास चव',
    tagEn: 'JAGDAMBA SPECIAL',
  },
];

const copy = {
  MR: {
    nav: ['मुख्यपृष्ठ', 'आमची गोष्ट', 'वड्यांची मेजवानी', 'व्यवसायासाठी', 'संपर्क'],
    eyebrow: 'तयार-तळण्यासाठी वड्यांचे विश्वासार्ह उत्पादक',
    titleA: 'चव अस्सल वड्यांची,',
    titleB: 'विश्वास दर्जेदार व्यवसायाचा!',
    intro:
      'वडापाव सेंटर, नाश्ता सेंटर, हॉटेल्स आणि खाद्य व्यावसायिकांसाठी स्वादिष्ट तयार-तळण्यासाठी वडे. तुमचा व्यवसाय चालू द्या जोरात, वड्यांचा पुरवठा आमच्याकडून दमदार!',
    explore: 'वड्यांची मेजवानी पाहा',
    enquire: 'WhatsApp वर चौकशी करा',
    strip: [
      'दररोजची उत्पादन क्षमता',
      'सोयीस्कर पॅकिंग',
      'थंड साठवण व्यवस्था',
      'स्थानिक वितरण सेवा',
    ],
    storyKicker: 'आमची ओळख',
    storyTitle: 'चव अशी की ग्राहक पुन्हा येतील, पुरवठा असा की व्यवसाय निर्धास्त चालेल!',
    storyText:
      'आई जगदंबा वडवाळे येथे आम्ही वडापाव विक्रेते, नाश्ता सेंटर, हॉटेल्स, फूड काउंटर आणि वितरकांसाठी तयार-तळण्यासाठी वडे बनवतो. चव, गुणवत्ता आणि वेळेवर पुरवठा यांना आम्ही प्राधान्य देतो. तुमच्या व्यवसायाची चव वाढवणं, हाच आमचा प्रयत्न!',
    productsKicker: 'आमची खास उत्पादनं',
    productsTitle: 'तुमच्या मेनूमध्ये चवीची धमाल!',
    productsText:
      'ग्राहकांच्या आवडीचे वेगवेगळे वडे. तुमच्या व्यवसायासाठी सोयीस्कर आणि चविष्ट पर्याय.',
    businessKicker: 'खाद्य व्यवसायांसाठी खास',
    businessTitle: 'तुमचा व्यवसाय वाढू द्या, चवीची जबाबदारी आमची!',
    businessText:
      'तुम्ही ग्राहकांची सेवा करा, आम्ही वड्यांचा पुरवठा सांभाळतो. सोयीस्कर पॅकिंग, थंड साठवण आणि संभाजीनगर परिसरात वितरणाची सुविधा.',
    features: [
      ['५० आणि १०० नगांचे पॅक', 'तुमच्या गरजेनुसार सोयीस्कर पॅकिंगचे पर्याय.'],
      ['थंड साठवण व्यवस्था', 'वितरणापूर्वी उत्पादने थंड साठवणीत ठेवली जातात.'],
      ['संभाजीनगरमध्ये वितरण', 'संभाजीनगर परिसरातील खाद्य व्यावसायिकांसाठी वितरण.'],
    ],
    ctaTitle: 'तुमच्या व्यवसायात चवीची भर घालूया!',
    ctaText:
      'घाऊक ऑर्डर, पॅकिंग आणि उत्पादनांच्या माहितीसाठी आजच आमच्याशी संपर्क साधा. तुमच्या व्यवसायासाठी योग्य पर्याय निवडण्यात आम्ही मदत करू.',
    contact: 'घाऊक ऑर्डरसाठी संपर्क करा',
    trust: 'खाद्य व्यावसायिकांसाठी खास',
    trustSub: 'तुमचा विश्वासू स्थानिक पुरवठादार',
    storyPoints: ['चवीमध्ये सातत्य', 'व्यवसायासाठी विश्वासार्ह पुरवठा'],
    footerText: 'चव अस्सल. गुणवत्ता विश्वासार्ह.',
    photoLabel: 'चव मन जिंकणारी',
    ready: 'तयार',
    readySub: 'तळण्यासाठी',
    fresh: 'ताजी चव. विश्वासार्ह गुणवत्ता.',
    location: 'संभाजीनगर · महाराष्ट्र',
    storyNote: 'चवदार पदार्थ',
    storyNoteSub: 'व्यवसायाला साथ',
    businessPanel: 'तुमचा',
    businessPanelSub: 'व्यवसाय.',
    commitment: 'आमची बांधिलकी',
    ctaKicker: 'आई जगदंबा वडवाळे · संभाजीनगर',
    footerExplore: 'वेबसाइटवर फिरा',
    footerStory: 'आमची गोष्ट',
    footerProducts: 'आमची उत्पादने',
    footerBusiness: 'व्यवसायासाठी',
    footerContact: 'संपर्क',
    footerVisit: 'आमचा पत्ता',
    whatsappMessage: 'नमस्कार आई जगदंबा वडवाळे, मला तुमच्या वड्यांच्या घाऊक ऑर्डरबद्दल माहिती हवी आहे.',
    productMessage: 'नमस्कार आई जगदंबा वडवाळे, मला {product} या उत्पादनाबद्दल आणि घाऊक ऑर्डरबद्दल माहिती हवी आहे.',
    madeFor: 'खाद्य व्यवसायाच्या साथीने, चवीच्या विश्वासाने.',
    rights: 'सर्व हक्क राखीव.',
    madeIn: 'संभाजीनगरमध्ये प्रेमाने बनवलेले',
  },
  EN: {
    nav: ['Home', 'Our Story', 'Our Products', 'For Business', 'Contact'],
    eyebrow: 'TRUSTED READY-TO-FRY VADA MANUFACTURER',
    titleA: 'Authentic taste,',
    titleB: 'dependable business!',
    intro:
      'Delicious ready-to-fry vadas for vada pav shops, snack centres, hotels and food businesses. Keep your business moving while we take care of your vada supply.',
    explore: 'Explore our products',
    enquire: 'Enquire on WhatsApp',
    strip: [
      'Daily production capacity',
      'Convenient pack sizes',
      'Refrigerated storage',
      'Local delivery',
    ],
    storyKicker: 'OUR STORY',
    storyTitle: 'A taste that brings customers back. A supply you can count on.',
    storyText:
      'At Aai Jagdamba Vadwale, we make ready-to-fry vadas for vada pav stalls, snack centres, hotels, food counters and distributors. We focus on taste, quality and dependable supply. We are here to add more flavour to your business!',
    productsKicker: 'OUR SPECIAL RANGE',
    productsTitle: 'Bring more flavour to your menu!',
    productsText:
      'A variety of customer favourites, made convenient for your food business.',
    businessKicker: 'MADE FOR FOOD BUSINESSES',
    businessTitle: 'Grow your business. We will take care of the taste!',
    businessText:
      'You serve your customers while we take care of the vada supply. Convenient packs, refrigerated storage and delivery across Sambhajinagar.',
    features: [
      ['50 and 100 piece packs', 'Convenient pack options to suit your needs.'],
      ['Refrigerated storage', 'Products are kept refrigerated before delivery.'],
      ['Sambhajinagar delivery', 'Delivery service for food businesses in the area.'],
    ],
    ctaTitle: 'Let’s add more flavour to your business!',
    ctaText:
      'Contact us today for bulk orders, pack sizes and product details. We will help you find the right option for your business.',
    contact: 'Contact for bulk orders',
    trust: 'Made for food businesses',
    trustSub: 'Your trusted local supply partner',
    storyPoints: ['Consistent taste', 'Dependable business supply'],
    footerText: 'Authentic taste. Trusted quality.',
    photoLabel: 'Made to delight',
    ready: 'READY',
    readySub: 'TO FRY',
    fresh: 'FRESH TASTE. TRUSTED QUALITY.',
    location: 'SAMBHAJINAGAR · MAHARASHTRA',
    storyNote: 'GOOD FOOD',
    storyNoteSub: 'GOOD BUSINESS',
    businessPanel: 'YOUR',
    businessPanelSub: 'BUSINESS.',
    commitment: 'OUR COMMITMENT',
    ctaKicker: 'AAI JAGDAMBA VADWALE · SAMBHAJINAGAR',
    footerExplore: 'EXPLORE',
    footerStory: 'Our Story',
    footerProducts: 'Our Products',
    footerBusiness: 'For Business',
    footerContact: 'CONTACT',
    footerVisit: 'VISIT US',
    whatsappMessage: 'Hello Aai Jagdamba Vadwale, I would like to enquire about your bulk vada orders.',
    productMessage: 'Hello Aai Jagdamba Vadwale, I am interested in {product}. Please share bulk order details.',
    madeFor: 'Made for food businesses, with a promise of great taste.',
    rights: 'ALL RIGHTS RESERVED.',
    madeIn: 'MADE WITH CARE IN SAMBHAJINAGAR',
  },
};

const PHONE = '+918796137213';
const WHATSAPP = 'https://wa.me/918796137213';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Marathi is the default language
  const [language, setLanguage] = useState<Language>('MR');

  const t = copy[language];
  const isMarathi = language === 'MR';

  const whatsappLink = (message: string) =>
    `${WHATSAPP}?text=${encodeURIComponent(message)}`;

  const generalEnquiry = whatsappLink(t.whatsappMessage);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = ['#home', '#story', '#products', '#business', '#contact'];

  useEffect(() => {
    const elements = document.querySelectorAll(
      '.motion-reveal, .motion-left, .motion-right'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="आई जगदंबा वडवाळे मुख्यपृष्ठ"
        >
          <img className="brand-logo" src={LOGO} alt="आई जगदंबा वडवाळे" />
        </a>

        <nav
          id="main-navigation"
          className={`nav-links ${menuOpen ? 'open' : ''}`}
          aria-label={isMarathi ? 'मुख्य नेव्हिगेशन' : 'Main navigation'}
        >
          {t.nav.map((label, index) => (
            <a key={label} href={navLinks[index]} onClick={closeMenu}>
              {label}
            </a>
          ))}

          <a
            className="nav-cta"
            href={generalEnquiry}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} aria-hidden="true" />
            {t.enquire}
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="lang-toggle"
            type="button"
            onClick={() => setLanguage(isMarathi ? 'EN' : 'MR')}
            aria-label={isMarathi ? 'Switch to English' : 'मराठी भाषा निवडा'}
          >
            {isMarathi ? 'English' : 'मराठी'}
          </button>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">
              <span />
              {t.eyebrow}
            </div>

            <h1>
              {t.titleA}
              <br />
              <em>{t.titleB}</em>
            </h1>

            <p>{t.intro}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#products">
                {t.explore}
                <ArrowRight size={18} aria-hidden="true" />
              </a>

              <a
                className="button button-outline"
                href={generalEnquiry}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} aria-hidden="true" />
                {t.enquire}
              </a>
            </div>

            <div className="hero-trust">
              <span className="trust-icon">
                <CheckCircle2 size={18} aria-hidden="true" />
              </span>
              <span>
                <b>{t.trust}</b>
                <small>{t.trustSub}</small>
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo-frame">
              <img
                src="/jagdamba-vada-hero.png"
                alt={isMarathi ? 'आई जगदंबा वडवाळे यांचे खाद्यपदार्थ' : 'Aai Jagdamba Vadwale food speciality'}
                fetchPriority="high"
              />

              <div className="photo-label">
                <span>JAGDAMBA</span>
                <b>{t.photoLabel}</b>
              </div>
            </div>

            <div className="ready-badge">
              <span>✳</span>
              <b>{t.ready}</b>
              <small>{t.readySub}</small>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>
            <i />
            {t.fresh}
          </span>
          <span>{t.location}</span>
        </div>
      </section>

      <section
        className="feature-strip motion-reveal"
        aria-label={isMarathi ? 'व्यवसायाची वैशिष्ट्ये' : 'Business highlights'}
      >
        <div className="feature-item">
          <Factory aria-hidden="true" />
          <div>
            <b>5,000+</b>
            <small>{t.strip[0]}</small>
          </div>
        </div>

        <div className="feature-item">
          <PackageCheck aria-hidden="true" />
          <div>
            <b>{isMarathi ? '५० / १०० नग' : '50 / 100 pieces'}</b>
            <small>{t.strip[1]}</small>
          </div>
        </div>

        <div className="feature-item">
          <Snowflake aria-hidden="true" />
          <div>
            <b>{isMarathi ? 'थंड साठवण' : 'Refrigerated'}</b>
            <small>{t.strip[2]}</small>
          </div>
        </div>

        <div className="feature-item">
          <Truck aria-hidden="true" />
          <div>
            <b>{isMarathi ? 'संभाजीनगर' : 'Sambhajinagar'}</b>
            <small>{t.strip[3]}</small>
          </div>
        </div>
      </section>

      <section className="story section-pad" id="story">
        <div className="story-image motion-left">
          <div className="story-image-inner">
            <img
              src="/jagdamba-vada-hero.png"
              alt={isMarathi ? 'जगदंबा वडवाळे उत्पादन' : 'Jagdamba Vada food range'}
              loading="lazy"
            />
          </div>

          <div className="story-note">
            <Leaf size={20} aria-hidden="true" />
            <span>
              {t.storyNote}
              <br />
              <b>{t.storyNoteSub}</b>
            </span>
          </div>
        </div>

        <div className="story-copy motion-right">
          <div className="section-kicker">
            <span />
            {t.storyKicker}
          </div>

          <h2>{t.storyTitle}</h2>
          <p>{t.storyText}</p>

          <div className="story-points">
            {t.storyPoints.map((point) => (
              <span key={point}>
                <CheckCircle2 aria-hidden="true" />
                {point}
              </span>
            ))}
          </div>

          <a className="text-link" href="#business">
            {isMarathi ? 'व्यवसायासाठी आमच्याशी जोडा' : 'Connect with us'}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="products section-pad" id="products">
        <div className="section-heading motion-reveal">
          <div>
            <div className="section-kicker">
              <span />
              {t.productsKicker}
            </div>
            <h2>{t.productsTitle}</h2>
          </div>
          <p>{t.productsText}</p>
        </div>

        <div className="product-grid">
          {products.map((product) => {
            const productName = isMarathi ? product.nameMr : product.nameEn;
            const productEnquiry = whatsappLink(
              t.productMessage.replace('{product}', productName)
            );

            return (
              <article
                className="product-card motion-reveal"
                key={product.no}
                style={{
                  transitionDelay: `${Number(product.no) * 100}ms`,
                }}
              >
                <div className="product-photo">
                  <img
                    src="/jagdamba-vada-hero.png"
                    alt={productName}
                    loading="lazy"
                  />

                  <span className="product-count">
                    {isMarathi ? `${product.no} / ०६` : `${product.no} / 06`}
                  </span>

                  <span className="product-tag">
                    {isMarathi ? product.tagMr : product.tagEn}
                  </span>
                </div>

                <div className="product-details">
                  <div>
                    <h3>{productName}</h3>
                  </div>

                  <a
                    href={productEnquiry}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={
                      isMarathi
                        ? `${productName} बद्दल चौकशी करा`
                        : `Enquire about ${productName}`
                    }
                  >
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>

                <p>{isMarathi ? product.descMr : product.descEn}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="business section-pad" id="business">
        <div className="business-panel motion-left">
          <div className="business-panel-top">
            <span>AAI JAGDAMBA VADWALE</span>
            <ShieldCheck size={25} aria-hidden="true" />
          </div>

          <div className="business-big">
            {t.businessPanel}
            <br />
            <em>{t.businessPanelSub}</em>
          </div>

          <div className="business-panel-bottom">
            <span>{t.commitment}</span>
            <span>✳</span>
          </div>

          <div className="business-ring" />
        </div>

        <div className="business-copy motion-right">
          <div className="section-kicker">
            <span />
            {t.businessKicker}
          </div>

          <h2>{t.businessTitle}</h2>
          <p>{t.businessText}</p>

          <div className="business-features">
            {t.features.map(([title, description], index) => (
              <div className="business-feature" key={title}>
                {index === 0 ? (
                  <PackageCheck aria-hidden="true" />
                ) : index === 1 ? (
                  <Snowflake aria-hidden="true" />
                ) : (
                  <Truck aria-hidden="true" />
                )}

                <div>
                  <b>{title}</b>
                  <small>{description}</small>
                </div>
              </div>
            ))}
          </div>

          <a
            className="button button-primary"
            href={generalEnquiry}
            target="_blank"
            rel="noreferrer"
          >
            {t.contact}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="cta-band motion-reveal" id="contact">
        <div className="section-kicker">
          <span />
          {t.ctaKicker}
        </div>

        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaText}</p>

        <div className="cta-actions">
          <a
            className="button button-light"
            href={generalEnquiry}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} aria-hidden="true" />
            {t.enquire}
          </a>

          <a className="cta-phone" href={`tel:${PHONE}`}>
            <Phone size={17} aria-hidden="true" />
            +91 87961 37213
          </a>
        </div>
      </section>

      <footer className="footer motion-reveal">
        <div className="footer-main">
          <div className="footer-brand">
            <a
              className="brand footer-logo-link"
              href="#home"
              aria-label="आई जगदंबा वडवाळे मुख्यपृष्ठ"
            >
              <img
                className="footer-brand-logo"
                src={LOGO}
                alt="आई जगदंबा वडवाळे"
                loading="lazy"
              />
            </a>

            <p>
              {t.footerText}
              <br />
              {t.madeFor}
            </p>
          </div>

          <div className="footer-col">
            <b>{t.footerExplore}</b>
            <a href="#story">{t.footerStory}</a>
            <a href="#products">{t.footerProducts}</a>
            <a href="#business">{t.footerBusiness}</a>
          </div>

          <div className="footer-col">
            <b>{t.footerContact}</b>
            <a href={`tel:${PHONE}`}>
              <Phone size={15} aria-hidden="true" />
              +91 87961 37213
            </a>

            <a href={generalEnquiry} target="_blank" rel="noreferrer">
              <MessageCircle size={15} aria-hidden="true" />
              {t.enquire}
            </a>

            <span>
              <MapPin size={15} aria-hidden="true" />
              {isMarathi ? 'संभाजीनगर, महाराष्ट्र' : 'Sambhajinagar, Maharashtra'}
            </span>
          </div>

          <div className="footer-col">
            <b>{t.footerVisit}</b>
            <p>
              गल्ली नं. C4, एस. मारोती रोड,
              <br />
              संजयनगर, संभाजीनगर,
              <br />
              महाराष्ट्र, भारत.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} AAI JAGDAMBA VADWALE. {t.rights}
          </span>

          <span>
            {t.madeIn} <i>✳</i>
          </span>
        </div>
      </footer>

      <a
        className="mobile-whatsapp"
        href={generalEnquiry}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={19} aria-hidden="true" />
        {t.enquire}
      </a>
    </main>
  );
}
