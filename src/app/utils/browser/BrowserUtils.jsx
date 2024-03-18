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


export const clearBrowserData = () => {
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