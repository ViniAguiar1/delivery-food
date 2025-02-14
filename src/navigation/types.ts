import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Profile: undefined;
  Favorites: undefined;
  Ratings: undefined;
  Coupons: undefined;
  PersonalData: undefined;
  PaymentMethods: undefined;
  SavedAddresses: undefined;
  OrderHistory: undefined;
  Notifications: undefined;
  Security: undefined;
  HelpCenter: undefined;
  Support: undefined;
};

export type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Profile'>;