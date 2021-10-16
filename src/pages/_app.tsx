import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { Provider } from "react-redux";
import store from '../Redux/Store';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      </Provider>

  )
}
export default MyApp
