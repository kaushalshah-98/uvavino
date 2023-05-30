import { JSONParse } from '../utils';
import { ENV_MODE } from './enums';

const prod = process.env.NEXT_PUBLIC_NODE_ENV === ENV_MODE.PRODUCTION;
const envVars = {
  env: process.env.NEXT_PUBLIC_NODE_ENV,
  port: process.env.PORT,
  prod,
  baseUrl: prod ? `https://${process.env.NEXT_PUBLIC_BASE_URL}/` : process.env.NEXT_PUBLIC_BASE_URL,
  screenDebugger:
    (JSONParse(process.env.NEXT_PUBLIC_ENCRYPTION_ENABLED as string) as boolean) ?? false,
  backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
  assetsUrl: process.env.NEXT_PUBLIC_ASSETS_URL,
  sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  underMaintainence:
    (JSONParse(process.env.NEXT_PUBLIC_UNDER_MAINTENCANCE as string) as boolean) ?? false,
  mock: (JSONParse(process.env.NEXT_PUBLIC_MOCK) as boolean) ?? false,
};
export { envVars };
