export const APP_KEY = 'kid_SyoenqXqE';
export const APP_SECRET = '7f2f7b780f8b46039db45884632d616d';
export const APP_MASTER_SECRET = '';
export const API_MAPS_KEY = '';

export const BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
export const BASE_USER_URL = `https://baas.kinvey.com/user/${APP_KEY}`;

export const CREATE_BIKE_URL = `${BASE_URL}/bikes`;
export const ALL_BIKES = `${BASE_URL}/bikes?query={}&sort={"_kmd.ect": -1}`;
