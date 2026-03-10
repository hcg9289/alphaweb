import { translations } from '../i18n';
import type { Lang } from '../i18n';

// Union of all translation objects — allows any language to be passed
type T = (typeof translations)[Lang];

type Props = {
    t: T;
    waUrl: string;
    onNavigateJoin: () => void;
};

const services = [
    { icon: '🛡️', key: 'svc_insurance' },
    { icon: '📈', key: 'svc_invest' },
    { icon: '💰', key: 'svc_savings' },
    { icon: '✈️', key: 'svc_immigration' },
    { icon: '📋', key: 'svc_tax' },
    { icon: '🎓', key: 'svc_edu' },
] as const;

export default function HomePage({ t, waUrl, onNavigateJoin }: Props) {
    // Cast t as a record for dynamic key access
    const tx = t as Record<string, string>;

    return (
        <>
            {/* ══════════ HERO ══════════ */}
            <section className="hero" aria-label="Hero">
                <div className="hero__bg" />
                <div className="hero__particles" aria-hidden="true">
                    {[...Array(6)].map((_, i) => <span key={i} className="particle" />)}
                </div>
                <div className="hero__deco-line hero__deco-line--1" aria-hidden="true" />
                <div className="hero__deco-line hero__deco-line--2" aria-hidden="true" />

                <div className="hero__content">
                    <p className="hero__eyebrow">Alpha Financials</p>
                    <h1 className="hero__title">
                        {t.hero_title_1}
                        <span className="hero__title-teal">{t.hero_title_2}</span>
                    </h1>
                    <p className="hero__sub">{t.hero_sub}</p>

                    <div className="hero__cta-group">
                        <a
                            id="hero-whatsapp-cta"
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-wa"
                        >
                            <span className="wa-icon">💬</span>
                            {t.hero_cta}
                        </a>
                        <button className="hero__scroll-hint" onClick={onNavigateJoin}>
                            <span className="scroll-dot" />
                            {t.nav_join} →
                        </button>
                    </div>

                    <div className="hero__stats">
                        <div className="stat-item">
                            <div className="stat-value">6+</div>
                            <div className="stat-label">Service Domains</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">360°</div>
                            <div className="stat-label">Financial Planning</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">∞</div>
                            <div className="stat-label">Growth Potential</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════ SERVICES ══════════ */}
            <section className="section services" id="services" aria-label="Our Services">
                <div className="section__inner">
                    <div className="text-center">
                        <p className="section-label">What We Do</p>
                        <h2 className="section-heading">{t.services_heading}</h2>
                        <div className="gold-line gold-line--center" />
                        <p className="section-sub">{t.services_sub}</p>
                    </div>

                    <div className="services__grid">
                        {services.map(({ icon, key }) => (
                            <article key={key} className="glass-card service-card">
                                <span className="service-icon" aria-hidden="true">{icon}</span>
                                <h3 className="service-title">{tx[`${key}_title`]}</h3>
                                <p className="service-desc">{tx[`${key}_desc`]}</p>
                                <span className="service-arrow">Explore →</span>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ ABOUT ══════════ */}
            <section className="section" id="about" aria-label="About Us">
                <div className="section__inner">
                    <div className="about__layout">
                        {/* Left: badges */}
                        <div className="about__visual">
                            <div className="about__badge-grid">
                                {[
                                    { num: '100%', label: 'Client-First Philosophy' },
                                    { num: '1-on-1', label: 'Dedicated Advisor' },
                                    { num: 'Daily', label: 'Market Intelligence' },
                                    { num: '∞', label: 'Career Growth' },
                                ].map((b) => (
                                    <div key={b.num} className="about__badge glass-card">
                                        <div className="about__badge-num">{b.num}</div>
                                        <div className="about__badge-label">{b.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: text */}
                        <div className="about__text">
                            <p className="section-label">Our Story</p>
                            <h2 className="section-heading">{t.about_heading}</h2>
                            <p className="section-sub" style={{ marginBottom: '0.5rem' }}>
                                {t.about_sub}
                            </p>
                            <div className="gold-line" />
                            <p>{t.about_p1}</p>
                            <p>{t.about_p2}</p>
                            <a
                                id="about-whatsapp-cta"
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-wa"
                                style={{ marginTop: '2rem' }}
                            >
                                <span className="wa-icon">💬</span>
                                {t.hero_cta}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
