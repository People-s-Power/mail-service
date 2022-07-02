
export class campaignDTO {
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

export class userDTO {
  username: string;
  email: string
}

export class payloadDTO {
  users: userDTO[];
  campaign: campaignDTO;
  campaigns: campaignDTO[];
}