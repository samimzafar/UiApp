import {
  educationTopicListing,
  factsTopicsListing,
  funTopicListing,
  investmentTopicsListing,
  newsTopicListing,
  sportsTopicListing,
} from '../dummyData';
import {Global_Const} from './Const';

export const getListingOnSelectedTopic = topic => {
  switch (topic) {
    case Global_Const.FUN:
      return funTopicListing;
    case Global_Const.EDUCATION:
      return educationTopicListing;
    case Global_Const.SPORTS:
      return sportsTopicListing;
    case Global_Const.NEWS:
      return newsTopicListing;
    case Global_Const.INVESTMENT:
      return investmentTopicsListing;
    case Global_Const.FACTS:
      return factsTopicsListing;
    default:
      return [];
  }
};
