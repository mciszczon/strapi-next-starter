import Head from 'next/head'

import { Footer } from '~/components'
import sass from '~/sass/pages/index.scss'

const Home = () => (
  <div className="container">
    <Head>
      <title>Strapi + NextJS Starter</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>

    <main>
      <h1 className={sass.title}>⚡ Strapi + NextJS Starter</h1>
      <p className={sass.description}>Here's a starting page!</p>
    </main>

    <Footer/>
  </div>
)

export default Home
