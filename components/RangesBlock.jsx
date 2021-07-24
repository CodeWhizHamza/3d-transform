import Ranges from './Ranges'

export default function RangesBlock({ type, ...rest }) {
  return (
    <article className="block">
      <h3 className="block__title">{type[0].toUpperCase() + type.slice(1)}:</h3>
      <Ranges type={type} {...rest} />

      <style jsx>{`
        .block {
          width: 280px;
        }
        .block__title {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 1em;
        }
      `}</style>
    </article>
  )
}
