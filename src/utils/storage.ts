import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageKeys = {
  PRIVACY_POLICY_ACCEPTED: 'privacy_policy_accepted',
  TERMS_ACCEPTED: 'terms_accepted',
};

export const getAcceptanceStatus = async (key: string): Promise<boolean> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value === 'true';
  } catch (error) {
    console.error('Error getting acceptance status:', error);
    return false;
  }
};

export const setAcceptanceStatus = async (key: string, value: boolean): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value.toString());
  } catch (error) {
    console.error('Error setting acceptance status:', error);
  }
};