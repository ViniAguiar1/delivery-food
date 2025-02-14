export type MainStackParamList = {
  Home: undefined;
  Restaurant: {
    restaurant: {
      id: number;
      name: string;
      image: string;
      rating: number;
      deliveryTime: string;
      deliveryFee: number;
      categories: string[];
      dishes: Array<{
        id: number;
        name: string;
        price: number;
        description: string;
        image: string;
      }>;
    };
  };
};