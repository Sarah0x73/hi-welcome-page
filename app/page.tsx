export default function Page() {
  return (
    <main className="welcome-page">
      <header className="site-header" aria-label="House of Ideas">
        <a className="brand-mark" href="#home" aria-label="House of Ideas home">
          <span>H</span><span className="brand-i">I</span>
        </a>
        <span className="header-note">CREATIVE THINKING, BIG IDEAS</span>
      </header>

      <section className="hero" id="home" aria-labelledby="welcome-title">
        <span className="hero-kicker"><span /> A PLACE TO IMAGINE MORE</span>
        <h1 id="welcome-title">WELCOME TO<br /><span>HOUSE OF IDEAS</span></h1>
        <div className="hero-rule" aria-hidden="true"><span /></div>
      </section>

      <footer className="site-footer">
        <a
          className="instagram-link"
          href="https://www.instagram.com/houseofideas/"
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
