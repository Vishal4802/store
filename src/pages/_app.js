import "../styles/globals.css";
import { AppProvider } from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    //For store management, implimenting context in our entire website
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
