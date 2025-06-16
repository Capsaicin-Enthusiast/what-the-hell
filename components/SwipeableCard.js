import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

export default function SwipeableCard({ children, onSwipeLeft, onSwipeRight, style }) {
  const translateX = useSharedValue(0);

  const rotateZ = useDerivedValue(() => `${(translateX.value / SCREEN_WIDTH) * 15}deg`);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
    },
    onEnd: () => {
      const goLeft = translateX.value < -SWIPE_THRESHOLD;
      const goRight = translateX.value > SWIPE_THRESHOLD;

      if (goLeft) {
        translateX.value = withSpring(-SCREEN_WIDTH, {}, () => runOnJS(onSwipeLeft)());
      } else if (goRight) {
        translateX.value = withSpring(SCREEN_WIDTH, {}, () => runOnJS(onSwipeRight)());
      } else {
        translateX.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }, { rotateZ: rotateZ.value }],
  }));

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.card, animatedStyle, style]}>{children}</Animated.View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  card: {
    width: SCREEN_WIDTH * 0.9,
    alignSelf: 'center',
    borderRadius: 16,
    backgroundColor: '#fff',
    elevation: 5,
    padding: 16,
  },
});
