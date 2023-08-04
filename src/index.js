import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider} from 'react-redux';
import store from './Redux/store';
import { Auth0Provider } from '@auth0/auth0-react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// const domain = 'dev-vcimk1mq442q83wq.us.auth0.com'; -->> original config
const domain = 'dev-i11mawm4dj14cqbt.us.auth0.com';
// const clientId = 'Jb0tkNGAsOvygZViD8G1VGhcM5T8FRe3'; -->> original config
const clientId= 'gEpbcOoX2vEm7voZicIlZg61SOH29UI6';


const root = createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
