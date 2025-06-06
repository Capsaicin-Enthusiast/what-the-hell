import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const ProfileCard = ({ card }) => {
  return (
    <View style={[styles.card, { backgroundColor: card.bgColor }]}>
      <Image style={styles.avatar} source={card.avatar} resizeMode="cover" />
      <View className="mb-2 flex-row items-center">
        <Text style={styles.name}>{card.name} </Text>
        <Ionicons name="checkmark-circle" size={20} color="#3b82f6" />
      </View>
      <Text style={styles.job}>{card.job}</Text>
      <Text style={styles.experience}>{card.experience}</Text>

      {/* Skills */}
      <Text style={styles.skillsTitle}>Skills</Text>
      <View style={styles.skillsContainer}>
        {card.skills.map((skill, index) => (
          <View key={index} style={[styles.skillPill, getSkillColor(skill)]}>
            <Text
              style={{
                color: skill === 'Github' ? 'white' : 'black',
              }}>
              {skill}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  avatar: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 20,
  },
  card: {
    alignSelf: 'center',
    borderRadius: 20,
    padding: 20,
    shadowOffset: { width: 0, height: -2 },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
    height: 560,
    backgroundColor: '#fbfbfb',
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
  },

  experience: {
    color: '#555',
    marginTop: 5,
  },

  job: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },

  skillsTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 24,
    marginBottom: 10,
  },

  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    maxWidth: 280,
  },

  skillPill: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 9999,
    alignItems: 'center',
  },
  bgReact: {
    backgroundColor: '#e0f2fe',
  },
  bgMongo: {
    backgroundColor: '#d1fae5',
  },
  bgJs: {
    backgroundColor: '#fef08a',
  },
  bgAngular: {
    backgroundColor: '#fecaca',
  },
  bgTailwind: {
    backgroundColor: '#bae6fd',
  },
  bgBlack: {
    backgroundColor: '#000000',
  },
  bgPurple: {
    backgroundColor: '#e0e7ff',
  },
  bgFigma: {
    backgroundColor: '#fbcfe8',
  },
  bgAdobe: {
    backgroundColor: '#fca5a5',
  },
});

const getSkillColor = (skill) => {
  switch (skill.toLowerCase()) {
    case 'react':
      return styles.bgReact;
    case 'mongodb':
      return styles.bgMongo;
    case 'javascript':
      return styles.bgJs;
    case 'angular':
      return styles.bgAngular;
    case 'tailwind':
      return styles.bgTailwind;
    case 'github':
      return styles.bgBlack;
    case 'php':
      return styles.bgPurple;
    case 'figma':
      return styles.bgFigma;
    case 'adobe xd':
      return styles.bgAdobe;
    default:
      return { backgroundColor: '#e0e0e0' };
  }
};
