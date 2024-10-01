import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f0b9f6ea4884513a8ac70c908dabf901@o4508024644829184.ingest.de.sentry.io/4508024647254096",
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV || 'development',
  debug: process.env.NODE_ENV === 'development',
});
