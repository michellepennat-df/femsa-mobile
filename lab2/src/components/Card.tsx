import React from 'react';
import { StyleSheet } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export default function RootLayout({children}: {children: React.ReactNode}) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: translateX.value},
      {translateY: translateY.value},
      {rotateZ: `${rotation.value}deg`},
    ],
  }));
  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    translateX.value = event.nativeEvent.translationX;
    translateY.value = event.nativeEvent.translationY;
    rotation.value = 45;
  };
  const onGestureEnd = () => {
    translateX.value = withSpring(0);
    translateY.value = withSpring(0);
    rotation.value = withSpring(0);
  };
  return (
    <PanGestureHandler onGestureEvent={onGestureEvent} onEnded={onGestureEnd}>
      <Animated.View style={[styles.card, animatedStyle]}>
        {children}
      </Animated.View>
    </PanGestureHandler>
  );
}
const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 100,
    marginTop: 20,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 0},
    shadowOpacity: 0.2,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
