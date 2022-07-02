export declare class campaignDTO {
    _doc: any;
    title: string;
    video: string;
    image: string;
    aim: string;
    target: string;
    body: string;
    slug: string;
    excerpt: string;
    status: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
    addedFrom: string;
    category: string;
    endorsements: string[];
    endorsementCount: number;
    likes: string[];
    likeCount: number;
    promoted: boolean;
}
export declare class IUser {
    _doc: any;
    name: string;
    googleId: string;
    facebookId: string;
    accountType: string;
    image: string;
    firstName: string;
    lastName: string;
    otherName: string;
    email: string;
    password: string;
    phone: string;
    emailToken: string;
    emailVerified: boolean;
    isActive: boolean;
    role: string;
    address: string;
    admin: IUser;
    userId: IUser;
    applicants: string[];
    reportCount: number;
    applicantCount: number;
    bankName: string;
    accountNumber: string;
    accountName: string;
    country: string;
    state: string;
    city: string;
}
export declare class userDTO {
    username: string;
    email: string;
}
export declare class payloadDTO {
    users: userDTO[];
    campaign: campaignDTO;
    campaigns: campaignDTO[];
}
export declare class endorsedDTO {
    author: IUser;
    endorserName: string;
    campaign: campaignDTO;
}
