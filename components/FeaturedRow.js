import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View className="">
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="px-4 text-xs text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restairants Cards */}
        <RestaurantCard
          id={123}
          title={"Testing"}
          imgUrl={"https://links.papareact.com/gn7"}
          rating={4.5}
          genre={"Japanese"}
          address={"123 Main St"}
          short_description={"This is short description"}
          dishes={[]}
          lat={0}
          long={20}
        />
        <RestaurantCard
          id={123}
          title={"Testing"}
          imgUrl={"https://links.papareact.com/gn7"}
          rating={4.5}
          genre={"Japanese"}
          address={"123 Main St"}
          short_description={"This is short description"}
          dishes={[]}
          lat={0}
          long={20}
        />
        <RestaurantCard
          id={123}
          title={"Testing"}
          imgUrl={"https://links.papareact.com/gn7"}
          rating={4.5}
          genre={"Japanese"}
          address={"123 Main St"}
          short_description={"This is short description"}
          dishes={[]}
          lat={0}
          long={20}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
