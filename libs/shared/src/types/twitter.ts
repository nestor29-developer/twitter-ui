export interface Mention {
  username: string;
}

export interface Annotation {
  type: string;
}

export interface Hashtag {
  tag: string;
}

export interface Images {
  url: string;
}

export interface Url {
  images: Images[];
}

export interface Entities {
  mentions?: Mention[];
  annotations?: Annotation[];
  hashtags?: Hashtag[];
  urls?: Url[];
}

export interface RecentTwitter {
  id: string;
  text: string;
  created_at: Date;
  entities?: Entities;
}
