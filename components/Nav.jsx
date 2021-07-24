import Image from 'next/image'
import { primaryColor } from '../config/config'

export default function Nav() {
  const logoSize = 40

  return (
    <>
      <div className="nav__container">
        <nav className="nav">
          <div title="Simple 3D transform" className="nav__logo">
            <Image
              src="/logo.svg"
              className="nav__logo-img"
              width={logoSize}
              height={logoSize}
              alt="Logo"
            />
            <span className="nav__logo-text">Transform Simply</span>
          </div>
          <a
            className="nav__link"
            href="http://hamza-portfolio-site.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            About Author
          </a>
        </nav>
      </div>
      <style jsx>{`
        .nav__container {
          width: 100%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .nav {
          width: 100%;
          max-width: 1366px;
          margin: auto;
          padding: 1em 0.5em;

          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav__logo {
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        .nav__logo-text {
          margin-left: 0.5em;
          font-size: 1.125rem;
          color: ${primaryColor};
        }
        .nav__link {
          font-size: 1rem;
          color: #333;
          text-decoration: none;
          position: relative;
        }
        .nav__link::after {
          content: '';
          position: absolute;
          width: 60%;
          height: 4px;
          bottom: -4px;
          left: 50%;
          transform: translate(-50%, 0) scaleX(0);
          transform-origin: center;
          background-color: ${primaryColor};
          border-radius: 40px;
          transition: transform 0.3s ease;
        }
        .nav__link:hover::after {
          transform: translate(-50%, 0) scaleX(1);
        }
      `}</style>
    </>
  )
}
