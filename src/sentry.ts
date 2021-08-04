import * as Sentry from "@sentry/node";
import { NODE_ENV, SENTRY_DNS } from "./config";

const initSentry = () =>
	Sentry.init({
		dsn: SENTRY_DNS,
		serverName: "multi-node-filter",
		environment: NODE_ENV,
	});

export { initSentry, Sentry };
