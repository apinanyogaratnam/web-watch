import axios from "axios";

const event = async (name: string, data: { [key: string]: any }) => {
    const getLocation = (): Promise<GeolocationPosition> => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => resolve(position),
                (error) => reject(error)
            );
        });
    };

    const location = await getLocation();

    await axios.post("http://localhost:8000/analytics", {
        data: JSON.stringify({
            event_name: name,
            event_data: data,
            user_agent: navigator.userAgent,
            vendor: navigator.vendor,
            platform: navigator.platform,
            language: navigator.language,
            hardware_concurrency: navigator.hardwareConcurrency,
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
            accuracy: location.coords.accuracy,
            cookies_enabled: navigator.cookieEnabled,
        }),
    });
};

export { event };
