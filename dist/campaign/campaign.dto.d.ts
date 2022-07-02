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
export declare class userDTO {
    username: string;
    email: string;
}
export declare class payloadDTO {
    users: userDTO[];
    campaign: campaignDTO;
    campaigns: campaignDTO[];
}
