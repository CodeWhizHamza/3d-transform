import { primaryColor, primaryColorLight } from '../config/config'

export default function Footer() {
  return (
    <div className="footer__container">
      <footer className="footer">
        <p className="footer__copyright">Copyright &copy; Hamza 2021</p>
        <a
          href="http://github.com/hamza-student"
          className="footer__link"
          target="_blank"
          rel="noreferrer"
        >
          See my github
        </a>
      </footer>

      <style jsx>
        {`
          .footer__container {
            background-color: ${primaryColor};
            color: #fff;
          }
          .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1366px;
            padding: 0.5em 1em;
            margin: auto;
            margin-top: 1em;
          }
          .footer__link {
            text-decoration: none;
            color: #fff;
            transition: transform 0.3s ease;
            display: block;
            padding: 0.5em 1.5em;
          }
          .footer__link:hover {
            transform: rotate(-10deg) scale(1.15);
            background-image: linear-gradient(
              to right,
              ${primaryColor},
              ${primaryColorLight},
              ${primaryColor}
            );
          }
        `}
      </style>
    </div>
  )
}
