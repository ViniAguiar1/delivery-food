import * as Notifications from 'expo-notifications';

export const NotificationService = {
  async init() {
    const { status } = await Notifications.requestPermissionsAsync();
    return status === 'granted';
  },

  async showOrderNotification(restaurantName: string) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Order Placed',
        body: `Your order from ${restaurantName} is waiting for confirmation`,
        badge: 1
      },
      trigger: null
    });
  }
};