import { Time } from './time';

export type TrelloList = {
  id: string;
  name: string;
};

type AttachmentByType = {
  trello: {
    board: number;
    card: number;
  };
};

type Badge = {
  attachmentsByType: AttachmentByType;
  location: boolean;
  votes: number;
  viewingMemberVoted: boolean;
  subscribed: boolean;
  fogbugz: string;
  checkItems: number;
  checkItemsChecked: number;
  checkItemsEarliestDue: null;
  comments: number;
  attachments: number;
  description: boolean;
  due: null;
  dueComplete: boolean;
  start: null;
};

export type Label = {
  id: string;
  idBoard: string;
  name: string;
  color: string;
  uses: number;
};

export type TrelloDescription = {
  ansvarlig: string;
  fra: Time;
  til: Time;
  lokale: string;
};

export type Card = {
  id: string;
  badges: Badge;
  checkItemStates: any[];
  closed: boolean;
  dueComplete: boolean;
  dateLastActivity: string;
  desc: string;
  descData: {
    emoji: any;
  };
  due: null;
  dueReminder: null;
  email: null;
  idBoard: string;
  idChecklists: string[];
  idList: string;
  idMembers: string[];
  idMembersVoted: any[];
  idShort: number;
  idAttachmentCover: null;
  labels: Label[];
  idLabels: string[];
  manualCoverAttachment: boolean;
  name: string;
  pos: number;
  shortLink: string;
  shortUrl: string;
  start: null;
  subscribed: boolean;
  url: string;
  cover: {
    idAttachment: null;
    color: null;
    idUploadedBackground: null;
    size: string;
    brightness: string;
    idPlugin: null;
  };
  isTemplate: boolean;
  cardRole: null;
};
