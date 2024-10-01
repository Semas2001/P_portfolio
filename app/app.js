// pages/_app.js
import * as Sentry from "@sentry/nextjs";
// Sentry Initialization
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN, // Ensure this is set correctly
  tracesSampleRate: 1.0, // Adjust based on your needs
  environment: process.env.NODE_ENV || 'development',
});

// Error boundary to catch errors in React components
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

// Example of error logging
const throwError = () => {
  try {
    // Some code that may throw an error
  } catch (error) {
    Sentry.captureException(error); // Send error to Sentry
  }
};
