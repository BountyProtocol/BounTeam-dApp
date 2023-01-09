import posthog from 'posthog-js';

const ANALYTICS_LOCALHOST_ENABLE = true;

/**
 *
 */
export const isAnalyticsEnabled = () => {
  const isLocalhost =
    window.location.href.includes('127.0.0.1') ||
    window.location.href.includes('localhost');
  return !isLocalhost || ANALYTICS_LOCALHOST_ENABLE;
};

/**
 * Init analytics.
 */
export const initAnalytics = () => {
  if (isAnalyticsEnabled()) {
    if (!!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: 'https://app.posthog.com',
      });
    } else console.error('Env:NEXT_PUBLIC_POSTHOG_KEY is missing');
  }
};

/**
 * Generic Analytic Event
 */
export const analyticsEvent = (event: string, properties?: any): void => {
  if (isAnalyticsEnabled()) posthog.capture(event, properties);
};

/**
 * Page view event.
 */
export const analyticsPageViewEvent = () => analyticsEvent('pageView');

/**
 * Connect account event
 */
export const analyticsAccountConnect = (account: string): void => {
  if (isAnalyticsEnabled()) {
    analyticsEvent('accountConnect', {
      account: account.toLowerCase(),
    });
    posthog.alias(account.toLowerCase());
  }
};

/**
 * Log-Out Event
 */
export const analyticsAccountDisconnect = (): void => {
  analyticsEvent('accountDisconnect');
  posthog.reset();
};

/**
 * Track Errors
 */
export const analyticsCatchErrorEvent = (
  error: Error,
  additional: any = {},
): void =>
  analyticsEvent('errorCaught', {
    errorMessage: error?.message,
    errorStack: error?.stack,
    ...additional,
  });
