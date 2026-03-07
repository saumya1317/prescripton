import * as Sentry from "@sentry/node";

const initSentry = () => {
    if (process.env.SENTRY_DSN) {
        Sentry.init({
            dsn: process.env.SENTRY_DSN,
            tracesSampleRate: 1.0,
        });
        console.log("Sentry Initialized");
    }
};

export default initSentry;
export { Sentry };
