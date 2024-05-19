export const getCurrentPosition = (navigator: Navigator): Promise<GeolocationCoordinates> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            // Convert to unknown first because some fields are incompatible due to null values.
            resolve(position.coords);
        }, reject);
    });
}