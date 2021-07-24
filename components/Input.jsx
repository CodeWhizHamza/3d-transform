import { primaryColorLight } from '../config/config'

export default function Input({ label, id, ...rest }) {
  return (
    <div className="input">
      <label htmlFor={id} className="input__label">
        {label}
      </label>
      <input type="range" id={id} className="input__range" {...rest} />
      <input type="number" className="input__box" {...rest} />

      <style jsx>{`
        .input {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-bottom: 1em;
        }
        .input__label {
          font-size: 1rem;
          font-weight: 600;
        }
         {
          /* Input TYPE RANGE */
        }
        .input__range {
          display: block;
          cursor: pointer;
          margin: 0 0.5em;
          width: 100%;
        }
        .input__box {
          width: 10ch;
          padding: 0.25em 0.5em;
          border: 2px solid ${primaryColorLight};
          outline: none;
          border-radius: 0.5em;
        }
      `}</style>
    </div>
  )
}
