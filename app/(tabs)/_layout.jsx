import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { AntDesign, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Slot, useRouter } from 'expo-router';

const TabLayout = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Slot />
      <View className="h-18 absolute bottom-0 w-full flex-row items-center justify-around border-gray-200 bg-white">
        <TouchableOpacity
          className="p-4"
          onPress={() => {
            router.push('/profile');
            console.log('Helloowww');
          }}>
          <Ionicons name="person" size={24} color="#5A5A5A" />
        </TouchableOpacity>

        <TouchableOpacity
          className="p-4"
          onPress={() => {
            router.push('/');
            console.log('Helloowww');
          }}>
          <FontAwesome6 name="bars-staggered" size={24} color="#5A5A5A" />
        </TouchableOpacity>

        <TouchableOpacity className="p-4">
          <AntDesign name="like1" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          className="p-4"
          onPress={() => {
            console.log('Navigate to messages');
            router.push('/messages');
          }}>
          <MaterialCommunityIcons name="message" size={24} color="#5A5A5A" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TabLayout;
