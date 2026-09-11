const appStoreId = process.env.NEXT_PUBLIC_APP_STORE_ID;

export const appStoreUrl = process.env.NEXT_PUBLIC_APP_STORE_URL ?? (
  appStoreId
    ? `https://apps.apple.com/app/id${appStoreId}`
    : "https://apps.apple.com/us/search?term=Cubbe"
);

export const appStoreBanner = appStoreId ? `app-id=${appStoreId}` : undefined;
