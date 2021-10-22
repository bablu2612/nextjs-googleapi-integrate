
import type { AppProps } from 'next/app'
import Header from '../components/header/header'
import { Provider } from "react-redux";
import store from '../Redux/Store';
import '../../styles/globals.css';
import '../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>

  )
}
export default MyApp
