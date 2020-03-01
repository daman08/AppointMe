/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component<{}> {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.body}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.dark}
        />
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Step One</Text>
          <Text style={styles.sectionDescription}>
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.dark,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.light,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.lighter,
  },
  highlight: {
    fontWeight: '700',
  }
});

export default App;
