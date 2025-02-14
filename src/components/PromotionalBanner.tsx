import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet, Image } from 'react-native';
import { Video } from 'expo-av'; // Importando o componente Video de expo-av

const { width } = Dimensions.get('window');

const promotions = [
    { 
        id: 1, 
        type: 'image', 
        media: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&h=300&q=80", 
        title: "Delicious Food Deals"
    },
    { 
        id: 2, 
        type: 'image',
        media: "https://images.unsplash.com/photo-1543353071-087092ec393a?auto=format&fit=crop&w=800&h=300&q=80",
        title: "Healthy Breakfast"
    },
    { 
        id: 3, 
        type: 'video',
        media: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Fresh Ingredients"
    },
    { 
        id: 4, 
        type: 'image',
        media: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&h=300&q=80",
        title: "Pizza Specials"
    },
    { 
        id: 5, 
        type: 'image',
        media: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&h=300&q=80",
        title: "Dessert Collection"
    }
];

export default function PromotionalBanner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollViewRef = useRef(null); // Referência para o ScrollView

    // Ajustando o intervalo para 30 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === promotions.length - 1 ? 0 : prevIndex + 1
            );
        }, 30000); // Intervalo de 30 segundos

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Após o currentIndex ser alterado, fazemos a rolagem automática
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: currentIndex * width, animated: true });
        }
    }, [currentIndex]);

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                ref={scrollViewRef}
                onMomentumScrollEnd={(event) => {
                    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
                    setCurrentIndex(newIndex);
                }}
            >
                {promotions.map((promo) => (
                    <View key={promo.id} style={styles.bannerContainer}>
                        {promo.type === 'video' ? (
                            <Video
                                source={{ uri: promo.media }}
                                style={styles.bannerImage}
                                resizeMode="cover"
                                isMuted={true} // Vídeo sem som
                                isLooping={true} // Repetir o vídeo automaticamente
                                shouldPlay={true} // Garantir que o vídeo inicie automaticamente
                            />
                        ) : (
                            <Image
                                source={{ uri: promo.media }}
                                style={styles.bannerImage}
                                resizeMode="cover"
                            />
                        )}
                        {/* <View style={styles.titleContainer}>
                            <Text style={styles.bannerTitle}>{promo.title}</Text>
                        </View> */}
                    </View>
                ))}
            </ScrollView>
            <View style={styles.indicators}>
                {promotions.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.indicator,
                            index === currentIndex && styles.activeIndicator
                        ]}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        height: 200,
        marginBottom: 16,
    },
    bannerContainer: {
        width: width - 32,
        height: 200,
        marginHorizontal: 16,
        borderRadius: 8,
        overflow: 'hidden',
    },
    bannerImage: {
        width: '100%',
        height: '100%',
    },
    titleContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 16,
    },
    bannerTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    indicators: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 8,
        left: 0,
        right: 0,
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginHorizontal: 4,
    },
    activeIndicator: {
        backgroundColor: 'white',
    },
});
