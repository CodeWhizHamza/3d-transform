import Head from 'next/head'

export default function MainHead() {
  return (
    <Head>
      {/*  Meta data  */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Hamza Muhammad" />
      <meta
        name="description"
        content="In this website we'll give you code for 3d transformation"
      />
      <meta
        name="keywords"
        content="3d transform, transform, CSS3 transform, translateX, translateY, translateZ, translate3d, translate, rotate, rotateX, rotateY, rotateZ, rotate3d"
      />
      <title>3D - transformation</title>

      {/* Fav icon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
