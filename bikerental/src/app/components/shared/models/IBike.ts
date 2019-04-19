export interface IBike {
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    lat: number;
    lng: number;
    author: string;
    _acl: { creator: string };
}