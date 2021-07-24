import RangesBlock from './RangesBlock'
import { primaryColor, boxSize } from '../config/config'
import { useEffect, useState } from 'react'

//  rotate3d(${rotate3d.x}deg, ${rotate3d.y}deg, ${rotate3d.z}deg) scale3d(${scale3d.x}, ${scale3d.y}, ${scale3d.z}) skew3d(${skew3d.x}deg, ${skew3d.y}deg, ${skew3d.z}deg)

export default function Main() {
  const [transform, setTransform] = useState(
    `perspective(800px) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) skewX(0deg) skewY(0deg)`,
  )

  const [translate3d, setTranslate3d] = useState({ x: 0, y: 0, z: 0 })
  const [rotate3d, setRotate3d] = useState({ x: 0, y: 0, z: 0 })
  const [scale3d, setScale3d] = useState({ x: 1, y: 1 })
  const [skew3d, setSkew3d] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setTransform(
      `perspective(800px) translate3d(${translate3d.x}px, ${translate3d.y}px, ${translate3d.z}px) rotateX(${rotate3d.x}deg) rotateY(${rotate3d.y}deg) rotateZ(${rotate3d.z}deg) scaleX(${scale3d.x}) scaleY(${scale3d.y}) skewX(${skew3d.x}deg) skewY(${skew3d.y}deg)`,
    )

    // Box styles

    const box = document.querySelector('.box')
    box.style.transform = transform

    // Box styles
  }, [translate3d, rotate3d, scale3d, skew3d])

  const copyToClipboard = str => {
    const el = document.createElement('textarea')
    el.value = `transform-style: preserve-3d; transform: ${str}`
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  return (
    <div className="container">
      <div className="box"></div>

      <section className="transform-blocks">
        <RangesBlock
          type="translate"
          min="-100"
          max="100"
          step="1"
          transform={transform}
          transform3d={translate3d}
          setTransform3d={setTranslate3d}
        />
        <RangesBlock
          type="rotate"
          min="0"
          max="180"
          step="1"
          transform={transform}
          transform3d={rotate3d}
          setTransform3d={setRotate3d}
        />
        <RangesBlock
          type="scale"
          min="0.01"
          max="2"
          step="0.01"
          transform={transform}
          transform3d={scale3d}
          setTransform3d={setScale3d}
        />
        <RangesBlock
          type="skew"
          min="0"
          max="180"
          step="1"
          transform={transform}
          transform3d={skew3d}
          setTransform3d={setSkew3d}
        />
      </section>

      <div className="css">transform: {transform};</div>

      <button onClick={() => copyToClipboard(transform.trim())} className="btn">
        Copy CSS
      </button>

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
          margin: auto;
          margin-bottom: 2.5em;
          filter: drop-shadow(0 0 1em rgba(0, 0, 0, 0.15));
          transform-style: preserve-3d;
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
          text-align: center;
          position: relative;
        }

        .btn {
          font-family: inherit;
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
