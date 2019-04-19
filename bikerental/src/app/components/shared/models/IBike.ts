import { ICoords } from './ICoords';
import { PrivacyLevel } from './enums/PrivacyLevel';

export interface IBike {
    name: string;
    description: string;
    imageUrl: string;
    coords: ICoords;
    privacyLevel: PrivacyLevel;
    author: string;
    _acl: { creator: string };
}
