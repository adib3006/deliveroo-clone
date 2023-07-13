import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({title, descripion, featuredCategory}) => {
  return (
    <View>
      <View className="mt-4 px-4 flex-row justify-between items-center">
      <Text className="font-bold text-lg">{title}</Text>
      <ArrowRightIcon color={"#00ccbb"}/>
      </View>
      <Text className="text-xs text-gray-500 px-4">{descripion}</Text>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal:15,
        gap:12
      }}
      className="pt-4"
      >
<RestaurantCard 
id={123}
imgUrl={"https://links.papareact.com/gn7"}
title={"Yo! Sushi"}
rating={4.5}
genre={"Japanese"}
address={"123, st. street."}
short_description={"This is a test description."}
dishes={[]}
long={20}
lat={0}
/>
<RestaurantCard 
id={123}
imgUrl={"https://links.papareact.com/gn7"}
title={"Yo! Sushi"}
rating={4.5}
genre={"Japanese"}
address={"123, st. street."}
short_description={"This is a test description."}
dishes={[]}
long={20}
lat={0}
/>
<RestaurantCard 
id={123}
imgUrl={"https://links.papareact.com/gn7"}
title={"Yo! Sushi"}
rating={4.5}
genre={"Japanese"}
address={"123, st. street."}
short_description={"This is a test description."}
dishes={[]}
long={20}
lat={0}
/>
      </ScrollView>
    </View>
  )
}

export default FeaturedRow