import Nav from '../components/Nav/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav></Nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
