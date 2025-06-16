import React, { useState } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import ProfileCard from '../../components/ProfileCard';
import SwipeableCard from '../../components/SwipeableCard';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Avatar1 from '../../assets/Avatars/Avatar1.png';
import Avatar2 from '../../assets/Avatars/Avatar2.png';
import Avatar3 from '../../assets/Avatars/Avatar3.png';
import Avatar5 from '../../assets/Avatars/Avatar5.png';
import Avatar6 from '../../assets/Avatars/Avatar6.png';
import { useRouter } from 'expo-router';
import HomepageLogo from '../../assets/Logo3.png';

const mockProfiles = [
  {
    name: 'Charles, 24',
    job: 'Software Engineer',
    experience: '3 years of experience',
    skills: ['React', 'MongoDb', 'JavaScript', 'Tailwind', 'Github', 'PHP'],
    bgColor: '#fce7f3',
    avatar: Avatar6,
  },
  {
    name: 'Isabelle, 23',
    job: 'UI/UX Designer',
    experience: 'Intern',
    skills: ['Figma', 'Sketch', 'Adobe XD'],
    bgColor: '#ede9fe',
    avatar: Avatar2,
  },
  {
    name: 'Louis, 23',
    job: 'Full Stack Developer',
    experience: '2 years of experience',
    skills: ['React', 'MongoDb', 'Tailwind', 'Github'],
    bgColor: '#fbfbfb',
    avatar: Avatar3,
  },
  {
    name: 'Mark, 28',
    job: 'UI/UX Designer and Developer',
    experience: '1 year of experience',
    skills: ['Figma', 'Sketch', 'Illustrator', 'Adobe XD'],
    bgColor: '#fef9c3',
    avatar: Avatar5,
  },
  {
    name: 'Carl, 28',
    job: 'Frontend Developer',
    experience: '3 years of experience',
    skills: ['Figma', 'JavaScript', 'React', 'Tailwind'],
    bgColor: '#fbfbfb',
    avatar: Avatar1,
  },
];

const Home = () => {
  const router = useRouter();
  const [profiles, setProfiles] = useState(mockProfiles);
  const removeTop = () => setProfiles((prev) => prev.slice(1));

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView className="flex-1 bg-white" edges={['left', 'right', 'bottom']}>
        <View className="px-5">
          {/* Header */}
          <View className="my-5 flex-row items-center justify-between">
            <Image source={HomepageLogo} />
            <Ionicons
              name="options-outline"
              size={24}
              color="#000"
              onPress={() => router.push('./filters')}
            />
          </View>
        </View>
        <View style={styles.deckContainer}>
          {profiles.length > 0 ? (
            profiles
              .map((card, idx) => {
                return (
                  <SwipeableCard
                    key={card.name}
                    onSwipeLeft={removeTop}
                    onSwipeRight={removeTop}
                    style={{ position: 'absolute', zIndex: profiles.length - idx }}>
                    <ProfileCard card={card} />
                  </SwipeableCard>
                );
              })
              .reverse()
          ) : (
            <Text>No more cards</Text>
          )}
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  deckContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default Home;
