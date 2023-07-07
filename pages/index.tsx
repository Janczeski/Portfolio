import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import Linguages from "../components/Linguages"
import Contact from '../components/Contact'
import Projects from '../components/Projects'


export default function SplitScreen() {
  
  return (
    <>
      <Head>
          <title>Portfólio</title>
          <link rel="icon" href="../images/test.png" />
      </Head>
      <Header/>
      <main>
        <About/>
        <Linguages/>
        <Projects/>
        <Contact/>
        
      </main>
      
      <Footer/>
    </> 
  )
}