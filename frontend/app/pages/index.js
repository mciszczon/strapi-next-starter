import Head from 'next/head'

import Card from '~/components/Card'
import Footer from '~/components/Footer'
import Subscribe from '~/components/Subscribe'
import sass from '~/sass/pages/index.scss';

const Home = () => (
  <div className='container'>
    <Head>
      <title>Investoko</title>
      <link rel='icon' href='/favicon.ico'/>
    </Head>

    <main>
      <h1 className={sass.title}>⚡ Welcome to Investoko</h1>
      <p className={sass.description}>We're launching soon!</p>

      <Subscribe/>

      <div className={sass.grid}>
        <Card
          title="Manage your investment portfolio"
          text="Easily add your holdings and products, see your diversification."
        />
        <Card
          title="Analyze your earnings"
          text="See how much you make in each of your holdings and the room for growth."
        />
        <Card
          title="Calculate currencies"
          text="See how much your investments are worth when converted different currencies."
        />
        <Card
          title="Calculate taxes automatically"
          text="Use tax calculator to generate tax reports for different countries."
        />
      </div>
    </main>

    <Footer/>
  </div>
)

export default Home
