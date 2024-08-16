export const checkAndRemoveExpiredToken = () => {
    const expiration = localStorage.getItem('tokenExpiration');
    if (!expiration) return;

    const currentTime = new Date().getTime();
    if (currentTime > expiration) {
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpiration');
        console.log('Token has expired and has been removed from localStorage');
    }
};