import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import {PerformanceMeasureView} from '@shopify/react-native-performance';
import ONYXKEYS from '../../ONYXKEYS';

// @ts-ignore
import {withOnyx} from 'react-native-onyx';

interface IHomeScreen {
  session: any;
}

function HomeScreen(props: PropsWithChildren<IHomeScreen>): JSX.Element {
  console.log(props.session)
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
    key: ONYXKEYS.SESSION,
  },
})(HomeScreen);
