import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet';

export const DishModal = React.forwardRef(({ dish }, ref) => {
  const snapPoints = ['75%'];

  const renderBackdrop = React.useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
    >
      <ScrollView style={styles.contentContainer}>
        <Image source={{ uri: dish.image }} style={styles.modalImage} />
        
        <View style={styles.detailsContainer}>
          <Text style={styles.modalTitle}>{dish.name}</Text>
          <Text style={styles.modalPrice}>${dish.price.toFixed(2)}</Text>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.modalDescription}>{dish.description}</Text>
          
          {dish.ingredients && (
            <>
              <Text style={styles.sectionTitle}>Ingredients</Text>
              <View style={styles.ingredientsList}>
                {dish.ingredients.map((ingredient, index) => (
                  <View key={index} style={styles.ingredientItem}>
                    <Text style={styles.ingredientText}>• {ingredient}</Text>
                  </View>
                ))}
              </View>
            </>
          )}
          
          {dish.reviews && (
            <>
              <Text style={styles.sectionTitle}>Reviews</Text>
              {dish.reviews.map((review, index) => (
                <View key={index} style={styles.reviewContainer}>
                  <View style={styles.reviewHeader}>
                    <Text style={styles.reviewAuthor}>{review.author}</Text>
                    <Text style={styles.reviewRating}>★ {review.rating}</Text>
                  </View>
                  <Text style={styles.reviewText}>{review.comment}</Text>
                </View>
              ))}
            </>
          )}
        </View>
      </ScrollView>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  modalImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalPrice: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2563eb',
    marginBottom: 16,
  },
  modalDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  ingredientsList: {
    marginBottom: 16,
  },
  ingredientItem: {
    marginBottom: 4,
  },
  ingredientText: {
    fontSize: 16,
    color: '#666',
  },
  reviewContainer: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  reviewAuthor: {
    fontSize: 16,
    fontWeight: '600',
  },
  reviewRating: {
    fontSize: 16,
    color: '#f59e0b',
  },
  reviewText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});