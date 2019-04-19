export interface IBike {
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    author: string;
    _acl: { creator: string };
}