export interface IBike {
    name: string;
    description: string;
    imageUrl: string;
    lat: number;
    lng: number;
    author: string;
    _acl: { creator: string };
}
