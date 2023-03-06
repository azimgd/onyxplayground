import React, {useCallback} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  RenderPassReport,
  PerformanceProfiler,
} from '@shopify/react-native-performance';
import HomeScreen from './screens/Home';

// @ts-ignore
import Onyx from 'react-native-onyx';
import ONYXKEYS from './ONYXKEYS';

const config = {
  keys: ONYXKEYS,
  captureMetrics: true,
};

Onyx.init(config);

Onyx.multiSet(
  Array.from(Array(10000).keys()).reduce((acc, item) => {
    // @ts-ignore
    acc[item.toString()] = Math.random();
    return acc;
  }, {}),
);

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const onReportPrepared = useCallback((report: RenderPassReport) => {
    console.log(report);
  }, []);

  return (
    <PerformanceProfiler
      onReportPrepared={onReportPrepared}
      enabled={Platform.OS !== 'web'}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PerformanceProfiler>
  );
}

export default App;
