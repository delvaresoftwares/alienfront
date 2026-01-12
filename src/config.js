const getAppMode = () => {
    return import.meta.env.VITE_APP_MODE || 'TEST';
};

export const getApiBaseUrl = () => {
    const mode = getAppMode();
    if (mode === 'PROD') {
        return import.meta.env.VITE_API_BASE_URL_PROD;
    }
    return import.meta.env.VITE_API_BASE_URL_TEST || 'http://localhost:5000';
};

export const getCashfreeMode = () => {
    const mode = getAppMode();
    return mode === 'PROD' ? 'production' : 'sandbox';
};
