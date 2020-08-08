import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/navbar.css'
import '../styles/footer.css'
import { initializeIcons } from '@uifabric/icons';
initializeIcons();
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
