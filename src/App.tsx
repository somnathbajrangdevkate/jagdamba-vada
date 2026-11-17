
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

const products = [
  {
    no: '01',
    name: 'Burger Vada',
    marathi: 'बर्गर वडा',
    desc: 'A hearty, flavour-packed patty made for memorable burger creations.',
    descMr: 'बर्गरमध्ये वापरता येईल असा भरदार वडा. मेनूमध्ये वेगळा पर्याय ठेवायचा असेल तर नक्की पाहा.',
    tag: 'CUSTOMER FAVOURITE',
    tagMr: 'बर्गरसाठी खास',
  },
  {
    no: '02',
    name: 'Corn Patties',
    marathi: 'कॉर्न पॅटीज',
    desc: 'Sweet corn goodness with a crisp golden finish.',
    descMr: 'कॉर्न पॅटीज — नाश्ता आणि स्नॅक्सच्या मेनूसाठी एक चविष्ट पर्याय.',
    tag: 'CRISPY & DELICIOUS',
    tagMr: 'कॉर्नची चव',
  },
  {
    no: '03',
    name: 'Sabudana Vada',
    marathi: 'साबुदाणा वडा',
    desc: 'A much-loved classic with a satisfying bite.',
    descMr: 'साबुदाण्याच्या वड्यांचा परिचित प्रकार. नाश्त्याच्या मेनूमध्ये ठेवता येईल असा पर्याय.',
    tag: 'TRADITIONAL TASTE',
    tagMr: 'नेहमीचा आवडता',
  },
  {
    no: '04',
    name: 'Makka Palak Vada',
    marathi: 'मक्का पालक वडा',
    desc: 'A delicious combination of corn and leafy greens.',
    descMr: 'मका आणि पालक यांचा वेगळा मेळ. नेहमीच्या पदार्थांपेक्षा काहीतरी वेगळं देण्यासाठी.',
    tag: 'A UNIQUE BLEND',
    tagMr: 'वेगळा पर्याय',
  },
  {
    no: '05',
    name: 'Maharaja Vada',
    marathi: 'महाराजा वडा',
    desc: 'A signature-style snack made to stand out on your menu.',
    descMr: 'तुमच्या मेनूमध्ये खास नावाने ठेवता येईल असा आमच्या उत्पादनांमधील एक पर्याय.',
    tag: 'SIGNATURE RANGE',
    tagMr: 'खास प्रकार',
  },
  {
    no: '06',
    name: 'Special Jagdamba Vada',
    marathi: 'स्पेशल जगदंबा वडा',
    desc: 'Our special offering, created for customers to remember.',
    descMr: 'जगदंबा वडवाळे यांचा खास वडा. अधिक माहितीसाठी आणि ऑर्डरसाठी संपर्क करा.',
    tag: 'JAGDAMBA SPECIAL',
    tagMr: 'जगदंबा स्पेशल',
  },
];

const copy = {
  EN: {
    nav: ['Home', 'Our Story', 'Products', 'For Business', 'Contact'],
    eyebrow: 'READY-TO-FRY VADA MANUFACTURER',
    titleA: 'The taste of',
    titleB: 'great business.',
    intro:
      'Premium ready-to-fry vadas crafted for vada pav shops, snack counters and food distributors across Sambhajinagar.',
    explore: 'Explore products',
    enquire: 'Enquire on WhatsApp',
    strip: [
      'Daily production capacity',
      'Convenient pack sizes',
      'Freshness-focused storage',
      'Local delivery',
    ],
    storyKicker: 'A LITTLE ABOUT US',
    storyTitle: 'A better snack experience. A dependable supply partner.',
    storyText:
      'At Jagdamba Vada, we make ready-to-fry snacks for the people who make every day delicious — vada pav stalls, snack centres, food counters and distributors. Our focus is dependable supply, consistent taste and a partnership you can count on.',
    productsKicker: 'OUR PRODUCT RANGE',
    productsTitle: 'A signature range for your menu.',
    productsText:
      'A delicious variety of ready-to-fry snacks to add to your menu.',
    businessKicker: 'BUILT FOR FOOD BUSINESSES',
    businessTitle: 'Your customers come first. We help you serve them.',
    businessText:
      'From convenient bulk packs to local delivery, we make it easier for your business to keep the good food coming.',
    features: [
      ['Bulk-ready packs', 'Choose convenient 50 and 100 piece pack options.'],
      ['Refrigerated storage', 'Products are stored refrigerated before delivery.'],
      ['Local delivery', 'Focused delivery service across Sambhajinagar.'],
    ],
    ctaTitle: 'Let’s make your menu memorable.',
    ctaText:
      'Tell us what your business needs. We’ll help you find the right product and pack size.',
    contact: 'Start a bulk enquiry',
    trust: 'Made for food businesses',
    trustSub: 'Reliable local supply partner',
    storyPoints: ['Consistent taste', 'Business-focused supply'],
    footerText: 'Fresh taste. Trusted quality.',
  },

  मराठी: {
    nav: ['मुख्यपृष्ठ', 'आमची गोष्ट', 'उत्पादने', 'व्यवसायासाठी', 'संपर्क'],
    eyebrow: 'वडे आणि स्नॅक्सचे उत्पादन व पुरवठा',
    titleA: 'तुमच्या दुकानासाठी',
    titleB: 'जगदंबा वडा!',
    intro:
      'वडापावची गाडी, नाश्त्याचे सेंटर, हॉटेल किंवा स्नॅक्स पॉइंट — तुमच्या रोजच्या मेनूसाठी तळण्यासाठी तयार वडे आणि स्नॅक्स. संभाजीनगरमध्ये स्थानिक पुरवठा.',
    explore: 'उत्पादने पाहा',
    enquire: 'व्हॉट्सॲपवर चौकशी करा',
    strip: [
      'दररोजची उत्पादन क्षमता',
      '५० आणि १०० नगांचे पॅक',
      'थंड साठवण व्यवस्था',
      'संभाजीनगरमध्ये पुरवठा',
    ],
    storyKicker: 'आमची ओळख',
    storyTitle: 'तुमच्या दुकानात चविष्ट पर्यायांची भर.',
    storyText:
      'वडापावची गाडी असो, नाश्त्याचे सेंटर, हॉटेल किंवा खाद्यपदार्थांचे दुकान — रोजच्या कामात तयारीचा वेळ वाचावा आणि मेनूमध्ये आणखी पर्याय असावेत, यासाठी आम्ही तळण्यासाठी तयार वडे आणि स्नॅक्स पुरवतो. ५० आणि १०० नगांचे पॅक उपलब्ध आहेत. उत्पादने रेफ्रिजरेटेड साठवणीत ठेवून संभाजीनगरमध्ये पुरवठा केला जातो.',
    productsKicker: 'जगदंबा वडवाळे यांची उत्पादने',
    productsTitle: 'तुमच्या मेनूसाठी वडे आणि स्नॅक्स.',
    productsText:
      'वडापाव, नाश्ता किंवा स्नॅक्सच्या मेनूमध्ये ठेवता येतील असे आमचे विविध पर्याय पाहा.',
    businessKicker: 'हॉटेल, स्टॉल आणि स्नॅक्स सेंटरसाठी',
    businessTitle: 'तयारीचा वेळ वाचवा. मेनूमध्ये नवे पर्याय ठेवा.',
    businessText:
      'तुमच्या दुकानासाठी ५० किंवा १०० नगांचे पॅक निवडा. कोणता पदार्थ हवा आणि किती प्रमाणात हवा, ते सांगा. संभाजीनगर परिसरात स्थानिक पुरवठ्यासाठी आमच्याशी बोला.',
    features: [
      ['५० / १०० नगांचे पॅक', 'तुमच्या गरजेनुसार पॅकचा पर्याय निवडा.'],
      ['थंड साठवण व्यवस्था', 'पुरवठ्यापूर्वी उत्पादने थंड साठवणीत ठेवली जातात.'],
      ['संभाजीनगरमध्ये पुरवठा', 'सध्या संभाजीनगर परिसरातच डिलिव्हरी उपलब्ध.'],
    ],
    ctaTitle: 'तुमच्या दुकानासाठी कोणता वडा हवा?',
    ctaText:
      'उत्पादन, पॅक आणि पुरवठ्याबद्दल माहिती हवी आहे? आम्हाला थेट फोन करा किंवा व्हॉट्सॲपवर संदेश पाठवा.',
    contact: 'ऑर्डरची चौकशी करा',
    trust: 'दुकाने आणि खाद्य व्यवसायांसाठी',
    trustSub: 'संभाजीनगरमधील स्थानिक पुरवठा',
    storyPoints: ['५० आणि १०० नगांचे पॅक', 'स्थानिक पुरवठा'],
    footerText: 'तुमच्या व्यवसायासाठी वडे आणि स्नॅक्स.',
  },
};

const PHONE = '+918796137213';
const WHATSAPP = 'https://wa.me/918796137213';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'मराठी'>('मराठी');

  const t = copy[language];
  const isMarathi = language === 'मराठी';

  const whatsappLink = (message: string) =>
    `${WHATSAPP}?text=${encodeURIComponent(message)}`;

  const generalEnquiry = whatsappLink(
    isMarathi
      ? 'नमस्कार, मला जगदंबा वडवाळे यांच्या वडे आणि स्नॅक्सबद्दल माहिती व घाऊक ऑर्डरची चौकशी करायची आहे.'
      : 'Hello Jagdamba Vada, I would like to enquire about bulk orders.'
  );

  const closeMenu = () => setMenuOpen(false);

  const navLinks = ['#home', '#story', '#products', '#business', '#contact'];

  // Scroll reveal animation observer
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
    <main lang={isMarathi ? 'mr' : 'en'}>
      {/* Header */}
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Jagdamba Vada home"
        >
          <img
            className="brand-logo"
            src={LOGO}
            alt="आई जगदंबा वडवाळे"
          />
        </a>

        <nav
          id="main-navigation"
          className={`nav-links ${menuOpen ? 'open' : ''}`}
          aria-label="Main navigation"
        >
          {t.nav.map((label, index) => (
            <a
              key={label}
              href={navLinks[index]}
              onClick={closeMenu}
            >
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
            onClick={() => setLanguage(isMarathi ? 'EN' : 'मराठी')}
            aria-label="Change website language"
          >
            {isMarathi ? 'EN' : 'मराठी'}
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

      {/* Hero */}
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
                alt={isMarathi ? 'जगदंबा वडवाळे यांचे वडे आणि स्नॅक्स' : 'Jagdamba Vada food speciality'}
                fetchPriority="high"
              />

              <div className="photo-label">
                <span>{isMarathi ? 'जगदंबा' : 'JAGDAMBA'}</span>
                <b>{isMarathi ? 'चव तुमच्या सेवेत' : 'MADE TO DELIGHT'}</b>
              </div>
            </div>

            <div className="ready-badge">
              <span>✳</span>
              <b>{isMarathi ? 'तयार' : 'READY'}</b>
              <small>{isMarathi ? 'तळण्यासाठी' : 'TO FRY'}</small>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>
            <i />
            {isMarathi ? 'चविष्ट वडे आणि स्नॅक्स' : 'FRESH TASTE. TRUSTED QUALITY.'}
          </span>
          <span>{isMarathi ? 'संभाजीनगर · महाराष्ट्र' : 'SAMBHAJINAGAR · MAHARASHTRA'}</span>
        </div>
      </section>

      {/* Business highlights */}
      <section
        className="feature-strip motion-reveal"
        aria-label="Business highlights"
      >
        <div className="feature-item">
          <Factory aria-hidden="true" />
          <div>
            <b>{isMarathi ? 'सुमारे ५,०००' : 'Approx. 5,000'}</b>
            <small>{t.strip[0]}</small>
          </div>
        </div>

        <div className="feature-item">
          <PackageCheck aria-hidden="true" />
          <div>
            <b>50 / 100</b>
            <small>{t.strip[1]}</small>
          </div>
        </div>

        <div className="feature-item">
          <Snowflake aria-hidden="true" />
          <div>
            <b>{isMarathi ? 'रेफ्रिजरेटेड' : 'Refrigerated'}</b>
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

      {/* Our story */}
      <section className="story section-pad" id="story">
        <div className="story-image motion-left">
          <div className="story-image-inner">
            <img
              src="/jagdamba-vada-hero.png"
              alt={isMarathi ? 'जगदंबा वडवाळे यांची उत्पादने' : 'Jagdamba Vada food range'}
              loading="lazy"
            />
          </div>

          <div className="story-note">
            <Leaf size={20} aria-hidden="true" />
            <span>
              {isMarathi ? 'चांगली चव' : 'GOOD FOOD'}
              <br />
              <b>{isMarathi ? 'चांगला व्यवसाय' : 'GOOD BUSINESS'}</b>
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
            {isMarathi ? 'व्यवसायासाठी संपर्क करा' : 'Get to know us'}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Products */}
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
            const productEnquiry = whatsappLink(
              isMarathi
                ? `नमस्कार, मला ${product.marathi} बद्दल माहिती आणि घाऊक ऑर्डरची चौकशी करायची आहे.`
                : `Hello Jagdamba Vada, I am interested in ${product.name}. Please share bulk order details.`
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
                    alt={isMarathi ? product.marathi : product.name}
                    loading="lazy"
                  />

                  <span className="product-count">
                    {product.no} / 06
                  </span>

                  <span className="product-tag">
                    {isMarathi ? product.tagMr : product.tag}
                  </span>
                </div>

                <div className="product-details">
                  <div>
                    <h3>{product.name}</h3>
                    <span className="marathi-name">
                      {product.marathi}
                    </span>
                  </div>

                  <a
                    href={productEnquiry}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Enquire about ${product.name}`}
                  >
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>

                <p>{isMarathi ? product.descMr : product.desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* B2B section */}
      <section className="business section-pad" id="business">
        <div className="business-panel motion-left">
          <div className="business-panel-top">
            <span>{isMarathi ? 'जगदंबा वडवाळे' : 'JAGDAMBA VADA'}</span>
            <ShieldCheck size={25} aria-hidden="true" />
          </div>

          <div className="business-big">
            {isMarathi ? 'तुमचा' : 'YOUR'}
            <br />
            <em>{isMarathi ? 'व्यवसाय.' : 'BUSINESS.'}</em>
          </div>

          <div className="business-panel-bottom">
            <span>{isMarathi ? 'आमची बांधिलकी' : 'OUR COMMITMENT'}</span>
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

      {/* Contact CTA */}
      <section className="cta-band motion-reveal" id="contact">
        <div className="section-kicker">
          <span />
          {isMarathi ? 'जगदंबा वडवाळे · संभाजीनगर' : 'JAGDAMBA VADA · SAMBHAJINAGAR'}
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

      {/* Footer */}
      <footer className="footer motion-reveal">
        <div className="footer-main">
          <div className="footer-brand">
            <a
              className="brand footer-logo-link"
              href="#home"
              aria-label="Jagdamba Vada home"
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
              {isMarathi ? 'वडापाव स्टॉल, हॉटेल आणि स्नॅक्स व्यवसायांसाठी.' : 'Made for the people who serve great food.'}
            </p>
          </div>

          <div className="footer-col">
            <b>{isMarathi ? 'माहिती' : 'EXPLORE'}</b>
            <a href="#story">{isMarathi ? 'आमची ओळख' : 'Our Story'}</a>
            <a href="#products">{isMarathi ? 'उत्पादने' : 'Our Products'}</a>
            <a href="#business">{isMarathi ? 'व्यवसायासाठी' : 'For Business'}</a>
          </div>

          <div className="footer-col">
            <b>{isMarathi ? 'संपर्क' : 'CONTACT'}</b>
            <a href={`tel:${PHONE}`}>
              <Phone size={15} aria-hidden="true" />
              +91 87961 37213
            </a>

            <a
              href={generalEnquiry}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={15} aria-hidden="true" />
              {isMarathi ? 'व्हॉट्सॲपवर संदेश पाठवा' : 'WhatsApp enquiry'}
            </a>

            <span>
              <MapPin size={15} aria-hidden="true" />
              {isMarathi ? 'संभाजीनगर, महाराष्ट्र' : 'Sambhajinagar, Maharashtra'}
            </span>
          </div>

          <div className="footer-col">
            <b>{isMarathi ? 'पत्ता' : 'VISIT US'}</b>
            <p>
              {isMarathi ? 'गल्ली क्र. C4, एस. मारोती रोड,' : 'Galli No C4, S Maroti Road,'}
              <br />
              {isMarathi ? 'संजयनगर, संभाजीनगर,' : 'Sanjaynagar, Sambhajinagar,'}
              <br />
              {isMarathi ? 'महाराष्ट्र, भारत.' : 'Maharashtra, India.'}
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {isMarathi ? 'जगदंबा वडवाळे. सर्व हक्क राखीव.' : 'JAGDAMBA VADA. ALL RIGHTS RESERVED.'}
          </span>

          <span>
            {isMarathi ? 'संभाजीनगरमध्ये आपुलकीने तयार' : 'MADE WITH CARE IN SAMBHAJINAGAR'} <i>✳</i>
          </span>
        </div>
      </footer>

      {/* Mobile WhatsApp CTA */}
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
