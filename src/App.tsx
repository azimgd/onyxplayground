import React, {useCallback} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  RenderPassReport,
  PerformanceProfiler,
} from '@shopify/react-native-performance';
import HomeScreen from './screens/Home';
import sample from './sample.json';

// @ts-ignore
import Onyx from 'react-native-onyx';
import ONYXKEYS from './ONYXKEYS';

const config = {
  keys: ONYXKEYS,
  captureMetrics: true,
};

Onyx.init(config);

// @ts-ignore
const start = performance.now();
Onyx.multiSet(sample);
// @ts-ignore
const end = performance.now();
console.log(end - start);

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
