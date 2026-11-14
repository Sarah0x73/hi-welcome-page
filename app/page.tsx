import Image from 'next/image'

export default function Page() {
  return (
    <main className="welcome-page">
      <div className="idea-light" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6M10 21h4m-2-20a7 7 0 0 0-4.4 12.45c.8.64 1.4 1.52 1.4 2.55h6c0-1.03.6-1.91 1.4-2.55A7 7 0 0 0 12 1Z" />
          <path d="M12 5v3m-5-1 2 2m8-2-2 2" />
        </svg>
      </div>
      <header className="site-header" aria-label="House of Ideas">
        <a className="brand-mark" href="#home" aria-label="House of Ideas home">
          <Image className="brand-logo" src="/house-of-ideas-logo.png" alt="House of Ideas" width={68} height={76} priority />
        </a>
      </header>

      <section className="hero" id="home" aria-labelledby="welcome-title">
        <span className="hero-kicker"><span /> A PLACE TO IMAGINE MORE</span>
        <h1 id="welcome-title">WELCOME TO<br /><span>HOUSE OF IDEAS</span></h1>
        <div className="hero-rule" aria-hidden="true"><span /></div>
      </section>

      <footer className="site-footer">
        <a
          className="instagram-link"
          href="https://instagram.com/houseofideas_club"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit House of Ideas on Instagram (opens in a new tab)"
        >
          <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="18" cy="6" r=".8" fill="currentColor" stroke="none" />
          </svg>
          <span>FOLLOW ALONG</span>
        </a>
        <p>© 2026 HOUSE OF IDEAS</p>
      </footer>
    </main>
  )
}
