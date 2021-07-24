import RangesBlock from './RangesBlock'
import { primaryColor, boxSize } from '../config/config'

export default function Main() {
  return (
    <div className="container">
      <div className="box"></div>

      <section className="transform-blocks">
        <RangesBlock type="translate" min="-100px" max="100px" step="1px" />
        <RangesBlock type="rotate" min="-360deg" max="360deg" step="1deg" />
        <RangesBlock type="scale" min="0.01" max="2" step="0.01" />
        <RangesBlock type="skew" min="0deg" max="360deg" step="1deg" />
      </section>

      <div className="css">
        transform: translate3d() rotate3d() skew3d() scale3d();
      </div>

      <button className="btn">Copy CSS</button>

      <style jsx>{`
        .container {
          max-width: 1366px;
          padding: 2.5em 1em;
          margin: auto;
        }
        .box {
          width: ${boxSize};
          height: ${boxSize};
          background-color: ${primaryColor};
          border-radius: 1em;
          margin: auto;
          margin-bottom: 2.5em;
          filter: drop-shadow(0 0 1em rgba(0, 0, 0, 0.15));
        }
        .transform-blocks {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          margin-bottom: 2em;
          flex-wrap: wrap;
        }

        .css {
          width: fit-content;
          padding: 0.5em 1em;
          font-family: 'Roboto Mono', monospace;
          font-weight: 500;
          background-color: #333;
          color: #fff;
          margin: auto;
          margin-bottom: 1.5em;
          border-radius: 0.25em;
          font-size: 1.125rem;
        }

        .btn {
          font-famliy: inherit;
          font-size: 1.25rem;
          border: none;
          outline: none;
          background-color: ${primaryColor};
          color: #fff;
          padding: 0.5em 1.5em;
          font-weight: 700;
          border-radius: 0.25em;
          display: block;
          margin: auto;
          cursor: pointer;
          box-shadow: 0 2px 1rem rgba(0, 0, 0, 0.2);
          transition: box-shadow 0.3s ease, background 0.3s ease;
        }
        .btn:focus,
        .btn:hover {
          background-color: hsl(248, 70%, 55%);
          box-shadow: 0 2px 2rem rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  )
}
