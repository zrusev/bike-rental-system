import { PrivacyLevel } from './enums/PrivacyLevel';
import { IAuthor } from './IAuthor';

export interface IBike {
    _id: string;
    name: string;
    description: string;
    imageUrl: string;
    latitude: number;
    longitude: number;
    privacyLevel: PrivacyLevel;
    author: IAuthor;
    _acl: { creator: string };
    _kmd: { lmt: string};
    isRented: boolean;
}
