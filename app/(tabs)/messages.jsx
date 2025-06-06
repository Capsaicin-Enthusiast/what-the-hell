import { Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Avatar6 from '../../assets/Avatars/Avatar6.png';

const Messages = () => {
  return (
    <View className="flex-1 px-5">
      <View className="row-center mb-2 mt-5 justify-between">
        <Text className="text-3xl font-bold">Chat</Text>
      </View>
      <Text className="mb-2 text-base font-medium">Your Matches</Text>
      <View className="mb-2 w-full flex-row p-4">
        <View className="mr-5 h-20 w-12 rounded-lg bg-gray-200" />
        <View className="flex-1 justify-center pl-2">
          <Text className="mb-1 text-sm text-black">Employers are waiting to talk to you.</Text>
          <Text className="mb-1 text-sm text-black">Like them back to start chatting.</Text>
          <Text className="text-sm text-black underline">See who likes you.</Text>
        </View>
      </View>
      <View className="mb-5 flex-row items-center justify-between">
        <Text className="text-base font-medium">Chats (Recent)</Text>
        <Ionicons name="reorder-three-outline" size={24} />
      </View>
      <View className="mb-4 rounded-lg border border-black p-4">
        <Text className="mb-2 text-lg font-medium">Your Opening Chat</Text>
        <View className="flex-row items-center">
          <View className="input-wrapper">
            <TextInput
              className="p-0 text-sm"
              placeholder="Type a message..."
              placeholderTextColor="#888"
            />
          </View>
          <TouchableOpacity className="ml-2">
            <Ionicons name="arrow-forward-circle-outline" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerClassName="pb-5">
        <View className="chat-item">
          <Image source={Avatar6} className="avatar" />
          <View className="ml-2.5 flex-1">
            <Text className="mb-1 text-base font-semibold">Charles</Text>
            <Text className="text-sm">Hi, How are you?</Text>
            <Text className="mt-1 text-xs text-gray-500">expires in 24 hours</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Messages;
