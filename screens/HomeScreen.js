import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {ChevronDownIcon, UserIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false,
    });
  },[])
  return (
    <SafeAreaView style={safeAreaAndroid.android}>
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-2">
      <Image source={{uri:"https://links.papareact.com/wru"}} className="h-7 w-7 bg-gray-300 p-4 rounded-full"/>
      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
        <Text className="font-bold text-xl">Current Location
        <ChevronDownIcon size={20} color={'#00CCBB'}/></Text>
      </View>
      <UserIcon size={35} color={'#00CCBB'}/>
      </View>
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-md">
          <MagnifyingGlassIcon color={"#00CCBB"}/>
          <TextInput 
          placeholder='Restaurants and Cuisines'
          keyboardType='default'
          />
        </View>
        <AdjustmentsHorizontalIcon color={'#00CCBB'}/>
      </View>
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <Categories />
        <FeaturedRow title={"Featured"} descripion={"Paid placements from our partners"}/>
        <FeaturedRow title={"Tasty Discounts"} descripion={"Everyone's been enjoying these juicy discounts."}/>
        <FeaturedRow title={"Offers near you!"} descripion={"Why not support your local restaurants tonight"}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const safeAreaAndroid = StyleSheet.create({
android: {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
}
})