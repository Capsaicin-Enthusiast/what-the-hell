import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import {
  AntDesign,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Slot, useRouter } from 'expo-router';

const TabLayout = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Slot />
      <View className="absolute bottom-0 w-full h-18 flex-row justify-around items-center bg-white border-t border-gray-200">
        <TouchableOpacity
          onPress={() => {
            router.push('/profile');
            console.log('Helloowww');
          }}
        >
          <Ionicons name="person" size={24} color="#5A5A5A" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.push('/');
            console.log('Helloowww');
          }}
        >
          <FontAwesome6 name="bars-staggered" size={24} color="#5A5A5A" />
        </TouchableOpacity>

        <AntDesign name="like1" size={24} color="black" />

        <MaterialCommunityIcons
          name="message"
          onPress={() => {
            console.log('Navigate to messages');
            router.push('/messages');
          }}
          size={24}
          color="#5A5A5A"
        />
      </View>
    </SafeAreaView>
  );
};

export default TabLayout;
