interface List {
  subscribers: any[];
  subscribed?: any;
  creator?: any;
  artists?: any;
  tracks?: any;
  updateFrequency: string;
  backgroundCoverId: number;
  backgroundCoverUrl?: any;
  titleImage: number;
  coverText?: any;
  titleImageUrl?: any;
  coverImageUrl?: any;
  iconImageUrl?: any;
  englishTitle?: any;
  opRecommend: boolean;
  recommendInfo?: any;
  socialPlaylistCover?: any;
  tsSongCount: number;
  trackCount: number;
  totalDuration: number;
  trackNumberUpdateTime: number;
  trackUpdateTime: number;
  privacy: number;
  playCount: number;
  adType: number;
  cloudTrackCount: number;
  subscribedCount: number;
  highQuality: boolean;
  specialType: number;
  updateTime: number;
  newImported: boolean;
  coverImgId: number;
  anonimous: boolean;
  coverImgUrl: string;
  commentThreadId: string;
  createTime: number;
  ordered: boolean;
  description: string;
  status: number;
  tags: any[];
  userId: number;
  name: string;
  id: number;
  coverImgId_str: string;
  toplistType: string;
}

interface ArtistToplist {
  coverUrl: string;
  name: string;
  upateFrequency: string;
  position: number;
  updateFrequency: string;
}

interface RootObject {
  code: number;
  list: List[];
  artistToplist: ArtistToplist;
}
