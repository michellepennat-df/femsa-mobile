import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import BatteryModule from './src/BatteryModule';

const LOW_BATTERY_THRESHOLD = 20;

const App = () => {
  const [batteryLevel, setBatteryLevel] = useState<number>(0);

  useEffect(() => {
    BatteryModule.getBatteryLevel().then(level => {
      setBatteryLevel(level);
      if (level < LOW_BATTERY_THRESHOLD) {
        Alert.alert('Warning', 'Battery is low!');
      }
    });

    const subscription = BatteryModule.onBatteryLevelChange(level => {
      setBatteryLevel(level);
      if (level < LOW_BATTERY_THRESHOLD) {
        Alert.alert('Warning', 'Battery is low!');
      }
    });

    return () => {
      subscription.remove(); 
    };
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Nivel de batería: {batteryLevel}%</Text>
    </View>
  );
};

export default App;
