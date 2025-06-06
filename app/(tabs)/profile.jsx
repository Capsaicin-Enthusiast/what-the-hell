import { Image, ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Avatar6 from '../../assets/Avatars/Avatar6.png';

const Profile = () => {
  return (
    <View className="flex-1 px-5">
      <View className="my-5 flex-row items-center justify-between">
        <Text className="text-2xl font-bold">Profile</Text>
        <Ionicons name="settings-outline" size={24} />
      </View>

      <View className="flex-row items-center space-x-5">
        <View className="w-[110px] h-[110px] rounded-full border-2 border-black justify-center items-center">
          <Image
            source={Avatar6}
            className="w-[100px] h-[100px] rounded-full"
          />
        </View>
        <View className="space-y-1">
          <View className="flex-row items-center space-x-1">
            <Text className="text-[25px] font-bold">Charles</Text>
            <Ionicons name="checkmark-circle-outline" size={24} />
          </View>
          <View className="px-2 py-1 rounded-[15px] overflow-hidden self-start bg-gray-200">
            <Text>Complete Profile</Text>
          </View>
        </View>
      </View>

      <View className="mt-10 mb-5">
        <View className="flex-row justify-between items-center">
          <View className="px-2 py-1 rounded-[15px] overflow-hidden self-start bg-black">
            <Text className="text-white">Profile Insights</Text>
          </View>
          <Text>Job Application</Text>
          <Text>Certification</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="pb-5">
        <View className="space-y-5 mb-12">
          <View className="border border-black rounded-[10px] h-[150px] p-2.5">
            <View className="flex-row justify-between items-center">
              <Text className="text-base font-medium">Portfolio</Text>
              <Ionicons name="add-outline" size={24} color="#000" />
            </View>
          </View>
          <View className="border border-black rounded-[10px] h-[150px] p-2.5">
            <View className="flex-row justify-between items-center">
              <Text className="text-base font-medium">Projects</Text>
              <Ionicons name="add-outline" size={24} color="#000" />
            </View>
          </View>
          <View className="border border-black rounded-[10px] h-[150px] p-2.5">
            <View className="flex-row justify-between items-center">
              <Text className="text-base font-medium">Experience</Text>
              <Ionicons name="add-outline" size={24} color="#000" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
