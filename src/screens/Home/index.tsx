import React, {useEffect, PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import {PerformanceMeasureView} from '@shopify/react-native-performance';

// @ts-ignore
import {withOnyx} from 'react-native-onyx';

interface IHomeScreen {
  session: any;
}

function HomeScreen(props: PropsWithChildren<IHomeScreen>): JSX.Element {
  return (
    <PerformanceMeasureView
      interactive={props.session !== undefined}
      screenName="HomeScreen">
      <View>
        <Text>{JSON.stringify(props.session || {})}</Text>
      </View>
    </PerformanceMeasureView>
  );
}

export default withOnyx({
  session: {
    key: '5',
  },
})(HomeScreen);
