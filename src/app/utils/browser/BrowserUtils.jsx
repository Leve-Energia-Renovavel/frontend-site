import Cookies from "js-cookie";

export const reloadPage = () => {
    if (typeof window !== 'undefined') {
        window.location.reload();
    }
};

export const loadBrowserInfos = () => {
    const browserInfo = {
        name: window.navigator.userAgent,
        version: window.navigator.appVersion,
        language: window.navigator.language || window.navigator.userLanguage,
        platform: window.navigator.platform,
        locale: window.navigator.languages ? window.navigator.languages[0] : window.navigator.language,
        connection: window.navigator.connection ? window.navigator.connection.effectiveType : null,
    }
    return browserInfo
}


export const clearBrowserData = async () => {
    const cookies = Cookies.get();
    for (const cookie in cookies) {
        Cookies.remove(cookie);
    }

    if (typeof window !== 'undefined') {
        localStorage.clear();
    }

    if (caches) {
        caches.keys().then(cacheNames => {
            cacheNames.forEach(cacheName => {
                caches.delete(cacheName);
            });
        });
    }
}

export const clearStorageData = async () => {
    if (typeof window !== 'undefined') {
        localStorage.clear();
    }

    if (caches) {
        caches.keys().then(cacheNames => {
            cacheNames.forEach(cacheName => {
                caches.delete(cacheName);
            });
        });
    }
}

export const clearCookiesAndStorageData = async () => {
    const cookies = Cookies.get();
    for (const cookie in cookies) {
        Cookies.remove(cookie);
    }

    if (typeof window !== 'undefined') {
        localStorage.clear();
    }
}


export const awaitSeconds = async (seconds) => {
    return await new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

export const handleScroll = () => {
    const element = document.getElementById('howLeveWorks');
    if (element) {
        window.scrollTo({ top: element.offsetTop + 40, behavior: 'smooth' });
    } else {
        window.scrollTo({ top: 500, behavior: 'smooth' })
    }
}