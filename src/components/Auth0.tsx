// pages/_app.js
import { Auth0Provider } from '@auth0/auth0-react';
import '../styles/globals.css';

function Auth0({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-re1xpllu6e0pxy2o.us.auth0.com"
      clientId="g43UO8SgnpoSv7jduX56YiG9aTtXyEnp"
      authorizationParams={{
        redirect_uri: typeof window !== 'undefined' ? window.location.origin : '',
      }}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default Auth0;
