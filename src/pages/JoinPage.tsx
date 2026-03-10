import { translations } from '../i18n';
import type { Lang } from '../i18n';

type T = (typeof translations)[Lang];

type Props = {
    t: T;
    waUrl: string;
};

const benefits = [
    { num: '01', key: 'join_benefit1' },
    { num: '02', key: 'join_benefit2' },
    { num: '03', key: 'join_benefit3' },
    { num: '04', key: 'join_benefit4' },
] as const;

const offerKeys = [
    'offer1', 'offer2', 'offer3', 'offer4', 'offer5', 'offer6',
] as const;

const testimonials = [
    { key: 'testimonial1', initials: 'DC' },
    { key: 'testimonial2', initials: 'IY' },
    { key: 'testimonial3', initials: 'YY' },
    { key: 'testimonial4', initials: 'TL' },
] as const;

export default function JoinPage({ t, waUrl }: Props) {
    const tx = t as Record<string, string>;

    return (
        <>
            {/* ══════════ JOIN HERO ══════════ */}
            <section className="join-hero" aria-label="Join Our Team">
                <div className="join-hero__bg" />
                {/* Decorative rings */}
                <div
                    aria-hidden="true"
                    style={{
                        position: 'absolute', right: '10%', top: '50%',
                        transform: 'translateY(-50%)',
                        width: '380px', height: '380px',
                        border: '1px solid rgba(46,155,181,0.12)',
                        borderRadius: '50%',
                        boxShadow: '0 0 120px rgba(46,155,181,0.07)',
                    }}
                />
                <div
                    aria-hidden="true"
                    style={{
                        position: 'absolute', right: 'calc(10% + 30px)', top: '50%',
                        transform: 'translateY(-50%)',
                        width: '310px', height: '310px',
                        border: '1px solid rgba(46,155,181,0.07)',
                        borderRadius: '50%',
                    }}
                />

                <div className="join-hero__content">
                    <p className="hero__eyebrow">Careers at Alpha</p>
                    <h1 className="hero__title">
                        {t.join_hero_title_1}
                        <span className="hero__title-teal">{t.join_hero_title_2}</span>
                    </h1>
                    <p className="hero__sub">{t.join_hero_sub}</p>
                    <div className="hero__cta-group">
                        <a
                            id="join-hero-whatsapp-cta"
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-wa"
                        >
                            <span className="wa-icon">💬</span>
                            {t.cta_btn}
                        </a>
                    </div>
                </div>
            </section>

            {/* ══════════ WHY JOIN ══════════ */}
            <section className="section" id="why-join" aria-label="Why Join Us">
                <div className="section__inner">
                    <div className="text-center">
                        <p className="section-label">Why Alpha</p>
                        <h2 className="section-heading">{t.join_why_heading}</h2>
                        <div className="gold-line gold-line--center" />
                        <p className="section-sub">{t.join_why_sub}</p>
                    </div>

                    <div className="benefits__grid">
                        {benefits.map(({ num, key }) => (
                            <article key={key} className="glass-card benefit-card">
                                <div className="benefit-number">{num}</div>
                                <h3 className="benefit-title">{tx[`${key}_title`]}</h3>
                                <p className="benefit-desc">{tx[`${key}_desc`]}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ WHAT WE OFFER ══════════ */}
            <section className="section offers" id="offers" aria-label="What We Offer">
                <div className="section__inner">
                    <div className="text-center">
                        <p className="section-label">Benefits &amp; Perks</p>
                        <h2 className="section-heading">{t.join_offer_heading}</h2>
                        <div className="gold-line gold-line--center" />
                    </div>

                    <div className="offers__grid">
                        {offerKeys.map((key) => (
                            <div key={key} className="offer-item">
                                <span className="offer-check" aria-hidden="true">✦</span>
                                <p className="offer-text">{tx[key]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ TESTIMONIALS ══════════ */}
            <section className="section" id="voices" aria-label="Team Testimonials">
                <div className="section__inner">
                    <div className="text-center">
                        <p className="section-label">Team Stories</p>
                        <h2 className="section-heading">{t.join_voices_heading}</h2>
                        <div className="gold-line gold-line--center" />
                    </div>

                    <div className="testimonials__grid">
                        {testimonials.map(({ key, initials }) => (
                            <article key={key} className="glass-card testimonial-card">
                                <span className="testimonial-quote-mark" aria-hidden="true">"</span>
                                <p className="testimonial-text">{tx[`${key}_quote`]}</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar" aria-hidden="true">{initials}</div>
                                    <div>
                                        <p className="testimonial-name">{tx[`${key}_name`]}</p>
                                        <p className="testimonial-role">{tx[`${key}_role`]}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ CTA ══════════ */}
            <section className="cta-section" id="cta" aria-label="Call to Action">
                <div className="cta-section__content">
                    <p className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>
                        Take Action
                    </p>
                    <h2 className="cta-section__heading">{t.cta_heading}</h2>
                    <p className="cta-section__sub">{t.cta_sub}</p>
                    <a
                        id="join-bottom-whatsapp-cta"
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-wa"
                        style={{ fontSize: '1.1rem', padding: '1.1rem 2.75rem' }}
                    >
                        <span className="wa-icon">💬</span>
                        {t.cta_btn}
                    </a>
                </div>
            </section>
        </>
    );
}
