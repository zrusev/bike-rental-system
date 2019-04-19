import { ICoords } from './ICoords';

export interface IBike {
    name: string;
    description: string;
    imageUrl: string;
    coords: ICoords;
    author: string;
    _acl: { creator: string };
}
