import MainHead from '../components/MainHead'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline()
    tl.from('.nav__container', { y: '-100%', duration: 0.3, delay: 1 })
      .from('.box', {
        opacity: 0,
        duration: 0.5,
        scale: 0,
        rotation: '270deg',
        ease: 'elastic',
      })
      .from('.block', {
        opacity: 0,
        y: -100,
        duration: 0.5,
        stagger: 0.1,
        ease: 'bounce',
      })
      .from('.css', {
        opacity: 0,
        duration: 0.5,
        force3D: true,
      })
      .from('.btn', { scale: 0, opacity: 0, ease: 'elastic', duration: 0.5 })
      .from('.footer__container', { y: 50, opacity: 0, duration: 0.5 })
  }, [])

  return (
    <>
      <MainHead />
      <Nav />
      <Main />
      <Footer />
    </>
  )
}
