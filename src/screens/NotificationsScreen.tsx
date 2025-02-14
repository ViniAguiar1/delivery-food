import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Switch, Alert, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/color';

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState({
    orders: true,
    promotions: true,
    system: false,
    orderStatus: true,
    deliveryAlerts: true,
    specialOffers: false,
    soundEnabled: true,
    vibrationEnabled: true,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Request notification permissions when component mounts
    requestNotificationPermissions();
  }, []);

  const requestNotificationPermissions = async () => {
    try {
      // Request permissions based on platform
      if (Platform.OS === 'ios') {
        // iOS permissions request would go here
      } else {
        // Android permissions request would go here
      }
    } catch (error) {
      console.error('Error requesting notification permissions:', error);
    }
  };

  const handleToggle = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));

    // Simulate saving to backend
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const notificationGroups = [
    {
      title: 'Pedidos',
      items: [
        {
          key: 'orders',
          title: 'Atualizações de pedidos',
          description: 'Notificações sobre status e alterações',
          icon: 'shopping-outline',
        },
        {
          key: 'orderStatus',
          title: 'Status de entrega',
          description: 'Acompanhe seu pedido em tempo real',
          icon: 'truck-delivery-outline',
        },
        {
          key: 'deliveryAlerts',
          title: 'Alertas de entrega',
          description: 'Seja notificado quando seu pedido estiver próximo',
          icon: 'map-marker-radius-outline',
        },
      ],
    },
    {
      title: 'Marketing',
      items: [
        {
          key: 'promotions',
          title: 'Promoções',
          description: 'Ofertas e descontos exclusivos',
          icon: 'percent-outline',
        },
        {
          key: 'specialOffers',
          title: 'Ofertas especiais',
          description: 'Promoções personalizadas para você',
          icon: 'star-outline',
        },
      ],
    },
    {
      title: 'Sistema',
      items: [
        {
          key: 'system',
          title: 'Atualizações do app',
          description: 'Novidades e melhorias do aplicativo',
          icon: 'cellphone-arrow-down',
        },
      ],
    },
  ];

  const handleResetPreferences = () => {
    Alert.alert(
      'Redefinir preferências',
      'Tem certeza que deseja restaurar as configurações padrão de notificações?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => {
            setNotifications({
              orders: true,
              promotions: true,
              system: true,
              orderStatus: true,
              deliveryAlerts: true,
              specialOffers: true,
              soundEnabled: true,
              vibrationEnabled: true,
            });
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notificações</Text>
        <Text style={styles.subtitle}>
          Gerencie suas preferências de notificações
        </Text>
      </View>

      <ScrollView style={styles.content}>
        {notificationGroups.map((group, groupIndex) => (
          <View key={groupIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{group.title}</Text>
            {group.items.map((item) => (
              <View key={item.key} style={styles.notificationItem}>
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={24}
                    color={notifications[item.key] ? colors.primary : colors.textSecondary}
                  />
                </View>
                <View style={styles.notificationInfo}>
                  <Text style={styles.notificationTitle}>{item.title}</Text>
                  <Text style={styles.notificationDescription}>
                    {item.description}
                  </Text>
                </View>
                <Switch
                  value={notifications[item.key]}
                  onValueChange={() => handleToggle(item.key)}
                  trackColor={{ false: colors.border, true: `${colors.primary}80` }}
                  thumbColor={notifications[item.key] ? colors.primary : colors.textSecondary}
                  disabled={loading}
                />
              </View>
            ))}
          </View>
        ))}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferências</Text>
          <View style={styles.notificationItem}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="volume-high"
                size={24}
                color={notifications.soundEnabled ? colors.primary : colors.textSecondary}
              />
            </View>
            <View style={styles.notificationInfo}>
              <Text style={styles.notificationTitle}>Som</Text>
              <Text style={styles.notificationDescription}>
                Ativar sons para notificações
              </Text>
            </View>
            <Switch
              value={notifications.soundEnabled}
              onValueChange={() => handleToggle('soundEnabled')}
              trackColor={{ false: colors.border, true: `${colors.primary}80` }}
              thumbColor={notifications.soundEnabled ? colors.primary : colors.textSecondary}
            />
          </View>

          <View style={styles.notificationItem}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="vibrate"
                size={24}
                color={notifications.vibrationEnabled ? colors.primary : colors.textSecondary}
              />
            </View>
            <View style={styles.notificationInfo}>
              <Text style={styles.notificationTitle}>Vibração</Text>
              <Text style={styles.notificationDescription}>
                Ativar vibração para notificações
              </Text>
            </View>
            <Switch
              value={notifications.vibrationEnabled}
              onValueChange={() => handleToggle('vibrationEnabled')}
              trackColor={{ false: colors.border, true: `${colors.primary}80` }}
              thumbColor={notifications.vibrationEnabled ? colors.primary : colors.textSecondary}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleResetPreferences}
        >
          <MaterialCommunityIcons
            name="restore"
            size={20}
            color={colors.primary}
          />
          <Text style={styles.resetButtonText}>
            Restaurar configurações padrão
          </Text>
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <MaterialCommunityIcons
            name="information"
            size={20}
            color={colors.textSecondary}
          />
          <Text style={styles.infoText}>
            Você pode alterar suas preferências de notificação a qualquer momento
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 24,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  content: {
    flex: 1,
  },
  section: {
    backgroundColor: colors.white,
    margin: 16,
    borderRadius: 16,
    padding: 16,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationInfo: {
    flex: 1,
    marginRight: 12,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 4,
  },
  notificationDescription: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: `${colors.primary}10`,
    borderRadius: 12,
  },
  resetButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: colors.primary,
    fontWeight: '500',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    margin: 16,
    padding: 16,
    borderRadius: 12,
    marginBottom: 32,
  },
  infoText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});

export default NotificationsScreen;