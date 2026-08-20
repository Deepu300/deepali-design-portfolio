import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__credit">
          Designed with
          <img
            src="/images/footer-heart.png"
            alt=""
            className="site-footer__heart"
            width={16}
            height={13}
          />
          by Deepali
        </p>
        <nav className="site-footer__links" aria-label="Social">
          <a
            href="https://www.linkedin.com/in/deepali-babuta-33165920a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:deepalibabuta@gmail.com">Email</a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          <a
            href="https://github.com/Deepu300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
