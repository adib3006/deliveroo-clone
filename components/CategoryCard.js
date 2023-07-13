import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <Pressable onPress={()=> console.log(title)} className="relative mr-2 h-20 w-20 active:opacity-50">
        <Image source={{uri:imgUrl}} className="h-20 w-20 rounded"/>
      <Text className="font-bold text-white absolute bottom-1 left-1">{title}</Text>
    </Pressable>
  )
}

export default CategoryCard