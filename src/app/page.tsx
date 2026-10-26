'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import WhatsAppIcon from './components/WhatsAppIcon'

const WA_NUMBER = '255776583434'
const WA_MSG_DEFAULT = encodeURIComponent(
  'Hello! I want to pre-book for Waridi Wellness Spa in December and claim my 20% off + Free Transport.'
)
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG_DEFAULT}`
const MAPS_LINK = 'https://maps.google.com/?q=Game+Fish+Lounge+Nungwi+Zanzibar'

const features = [
  {
    icon: 'waves',
    title: 'Oceanfront View',
    desc: "Relax to the natural rhythm of ocean waves right at the iconic Game Fish Lounge beachfront location in Nungwi.",
  },
  {
    icon: 'directions_car',
    title: 'Free Nungwi Transport',
    desc: 'Enjoy a seamless holiday experience with our complimentary pickup service anywhere across Nungwi.',
  },
  {
    icon: 'spa',
    title: 'Expert Therapists',
    desc: 'Professional wellness rituals, signature herbal oils, and completely personalised care — every single visit.',
  },
]

const treatments = [
  {
    icon: '🪷',
    title: 'Warm Herbal Oil Massage',
    tag: 'Signature Ritual',
    desc: 'Melt away travel tension using local organic herb-infused oils, gently worked into muscles by expert hands.',
  },
  {
    icon: '🌿',
    title: 'Deep Relaxation Body Wraps',
    tag: 'Skin Care',
    desc: 'Nourish and refresh your skin after a sunny day on the island coast with our tropical botanical wraps.',
  },
  {
    icon: '✨',
    title: 'Manicures & Pedicures',
    tag: 'Full Body Care',
    desc: 'Complete grooming and beauty treatments delivered with attentive, professional care in a serene setting.',
  },
]

export default function HomePage() {
  useEffect(() => {
    const supportsNative =
      typeof CSS !== 'undefined' &&
      CSS.supports('(animation-timeline: view()) and (animation-range: entry)')
    if (supportsNative) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.10 }
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="/" className={styles.logoText} id="logo-link">Waridi Wellness Spa</a>

          <nav aria-label="Main navigation">
            <ul className={styles.navLinks}>
              <li><a href="#hero">Home</a></li>
              <li><a href="#treatments">Treatments</a></li>
              <li><a href="#prebook">Contact</a></li>
            </ul>
          </nav>

          <a
            id="header-wa-btn"
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navCta}
          >
            <WhatsAppIcon size={14} color="currentColor" /> Book Treatment
          </a>
        </div>
      </header>

      <main>
        {/* ── Hero — Mnarani-style dark full-viewport ──────────────────────── */}
        <section id="hero" className={styles.hero} aria-label="Hero">

          {/* Layer 1 — dark gradient base */}
          <div className={styles.heroBg} />

          {/* Layer 2 — multiply blend */}
          <div className={styles.heroBlend} />

          {/* Layer 3 — logo watermark */}
          <div className={styles.heroWatermark} aria-hidden="true" />

          {/* Content */}
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroText}>

              {/* Badge */}
              <div className={styles.heroBadgeWrap}>
                <span className={styles.heroBadge}>
                  Opening December 2026 &nbsp;·&nbsp; At Game Fish Lounge, Nungwi
                </span>
              </div>

              {/* H1 */}
              <h1 className={styles.heroH1}>
                Your Sanctuary of<br />
                <span className={styles.heroGoldLine}>Wellness &amp; Oceanfront Serenity</span>
              </h1>

              {/* Subtitle */}
              <p className={styles.heroSub}>
                Escape to Nungwi&apos;s newest luxury haven. Indulge in soothing warm
                herbal oil massages right by the crashing ocean waves, with{' '}
                <strong style={{color:'#fff', fontWeight:500}}>complimentary pickup anywhere in Nungwi</strong>.
              </p>

              {/* CTAs */}
              <div className={styles.heroActions}>
                <a id="hero-cta-btn" href="#prebook" className={styles.heroBtnPrimary}>
                  Claim 20% Off + Free Transport
                  <i className="material-icons" style={{fontSize:'18px'}}>arrow_forward</i>
                </a>
                <a id="hero-explore-btn" href="#treatments" className={styles.heroBtnGlass}>
                  Explore Treatments
                </a>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className={styles.scrollDown} aria-hidden="true">
            <span className={styles.scrollLabel}>Scroll Down</span>
            <i className="material-icons" style={{fontSize:'16px'}}>south</i>
          </div>
        </section>


        {/* ── Features ──────────────────────────────────────────────────── */}
        <section className={`section ${styles.features}`} aria-labelledby="features-heading">
          <div className="container">
            <div className={`${styles.sectionHeader} reveal`}>
              <h2 id="features-heading">Why Choose Waridi</h2>
              <div className="divider" />
              <p className={styles.sectionSub}>
                A rare combination of location, expertise, and island hospitality.
              </p>
            </div>

            <div className={styles.featureGrid}>
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`${styles.featureCard} reveal`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <i className={`material-icons ${styles.featureIcon}`} aria-hidden="true">{f.icon}</i>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Premium Coming Soon & Early Bird ───────────────────────────── */}
        <section
          id="prebook"
          className={styles.comingSoonSection}
          aria-labelledby="prebook-heading"
        >
          <div className="container">
            <div className={`${styles.comingSoonWrapper} reveal`}>

              {/* Left — info & perks */}
              <div className={styles.comingSoonInfo}>
                <span className={styles.sectionBadge}>Opening December 2026</span>

                <h2 id="prebook-heading" className={styles.comingSoonH2}>
                  Your Sanctuary Awaits<br />in Nungwi
                </h2>

                <p className={styles.comingSoonDesc}>
                  We are putting the final touches on Zanzibar&apos;s most anticipated
                  beachside wellness retreat at Game Fish Lounge. Be among the first to
                  experience our restorative rituals.
                </p>

                <ul className={styles.perksList}>
                  {[
                    { icon: 'check_circle', strong: '20% Off',                   rest: ' Your First Signature Treatment' },
                    { icon: 'check_circle', strong: 'Free Complimentary Pickup', rest: ' Anywhere in Nungwi' },
                    { icon: 'check_circle', strong: 'Priority Booking',          rest: ' for Peak Holiday Hours' },
                  ].map(({ icon, strong, rest }) => (
                    <li key={strong} className={styles.perkRow}>
                      <i className="material-icons" aria-hidden="true">{icon}</i>
                      <span><strong>{strong}</strong>{rest}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — booking card */}
              <div className={styles.bookingCard}>
                <h3 className={styles.bookingCardH3}>Secure Early Bird Privileges</h3>
                <p className={styles.cardSub}>
                  No payment required now. Lock in your launch discount instantly via WhatsApp.
                </p>

                <form
                  id="prebook-form"
                  className={styles.premiumForm}
                  onSubmit={(e) => {
                    e.preventDefault()
                    const fd = new FormData(e.currentTarget)
                    const name  = fd.get('name')  as string
                    const hotel = fd.get('hotel') as string
                    const msg = encodeURIComponent(
                      `Hello! I want to pre-book my spot for Waridi Wellness Spa this December and claim my 20% off + free transport 🌸\n\nName: ${name}\nHotel / Location in Nungwi: ${hotel}`
                    )
                    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
                  }}
                >
                  <div className={styles.formField}>
                    <label htmlFor="client-name">Full Name</label>
                    <input
                      id="client-name"
                      name="name"
                      type="text"
                      placeholder="e.g., Sarah Jenkins"
                      required
                      autoComplete="name"
                    />
                  </div>

                  <div className={styles.formField}>
                    <label htmlFor="client-hotel">Hotel or Villa in Nungwi</label>
                    <input
                      id="client-hotel"
                      name="hotel"
                      type="text"
                      placeholder="e.g., Zuri Zanzibar / My Hotel"
                      required
                      autoComplete="off"
                    />
                  </div>

                  <button
                    id="prebook-submit-btn"
                    type="submit"
                    className={styles.whatsappPremiumBtn}
                  >
                    <WhatsAppIcon size={20} color="#fff" />
                    Reserve via WhatsApp &amp; Claim 20% Off
                  </button>
                </form>

                <p className={styles.secureNote}>
                  🔒 Instant direct confirmation with our front desk team.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── Treatments — text cards, no photos ────────────────────────── */}
        <section
          id="treatments"
          className={`section ${styles.treatments}`}
          aria-labelledby="treatments-heading"
        >
          <div className="container">
            <div className={`${styles.sectionHeader} reveal`}>
              <h2 id="treatments-heading">Signature Treatments</h2>
              <div className="divider" />
              <p className={styles.sectionSub}>
                Crafted for ultimate relaxation during your Zanzibar holiday.
              </p>
            </div>

            <div className={styles.treatmentGrid}>
              {treatments.map((t, i) => (
                <div
                  key={i}
                  className={`${styles.treatmentCard} reveal`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className={styles.treatmentIcon}>{t.icon}</span>
                  <span className={styles.treatmentTag}>{t.tag}</span>
                  <h3 className={styles.treatmentTitle}>{t.title}</h3>
                  <p className={styles.treatmentDesc}>{t.desc}</p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.treatmentCta}
                    id={`treatment-book-${i}`}
                  >
                    Book this treatment →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── Location Strip ────────────────────────────────────────────── */}
        <section className={`section-sm ${styles.locationStrip}`} aria-label="Location">
          <div className={`container ${styles.locationInner}`}>
            <div className={`${styles.locationText} reveal`}>
              <h2 className={styles.locationTitle}>Find Us at Game Fish Lounge</h2>
              <p className={styles.locationDesc}>
                Nestled right on the beachfront at the iconic Game Fish Lounge,
                Nungwi — one of Zanzibar&apos;s most sought-after coastal destinations.
              </p>
              <div className={styles.locationActions}>
                <a
                  id="directions-btn"
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  📍 Get Directions
                </a>
                <a
                  id="location-wa-btn"
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <WhatsAppIcon size={15} color="currentColor" /> Ask for Pickup
                </a>
              </div>
            </div>

            <div className={`${styles.locationBadgeWrap} reveal`}>
              <div className={styles.locationBadge}>
                <Image
                  src="/logo-peach.jpeg"
                  alt="Waridi Wellness Spa"
                  width={84}
                  height={84}
                  className={styles.locationBadgeImg}
                  style={{ objectFit: 'contain' }}
                />
                <span className={styles.locationBadgeText}>Nungwi<br />Zanzibar</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <Image
            src="/logo-white.jpeg"
            alt="Waridi Wellness Spa"
            width={72}
            height={72}
            className={styles.footerLogo}
            style={{ objectFit: 'contain', width: 'auto', height: '64px' }}
          />
          <div className={styles.footerDivider} />
          <p className={styles.footerCopy}>
            Waridi Wellness Spa — Game Fish Lounge, Nungwi, Zanzibar
          </p>
          <div className={styles.footerLinks}>
            <a href="https://instagram.com/waridiwellness.spa" target="_blank" rel="noopener noreferrer" id="footer-instagram">Instagram</a>
            <span>·</span>
            <a href="https://tiktok.com/@waridiwellness" target="_blank" rel="noopener noreferrer" id="footer-tiktok">TikTok</a>
          </div>
          <p className={styles.footerMnarani}>
            Part of Nungwi&apos;s premier wellness community. Looking for our original sanctuary?{' '}
            Visit{' '}
            <a href="http://www.mnaranicinnamonspa.com/" target="_blank" rel="noopener noreferrer" id="footer-mnarani">
              Mnarani Cinnamon Spa
            </a>.
          </p>
          <p className={styles.footerMicro}>© 2026 Waridi Wellness Spa. All rights reserved.</p>
        </div>
      </footer>

      {/* ── Sticky WhatsApp bar (mobile) ──────────────────────────────────── */}
      <a
        id="sticky-wa-btn"
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-sticky"
        aria-label="Chat on WhatsApp and claim 20% off"
      >
        <WhatsAppIcon size={20} color="#fff" /> Chat on WhatsApp · Claim 20% Off + Free Pickup
      </a>
    </>
  )
}
