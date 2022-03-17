import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview'

export default function App() {
  return (
    <WebView
      source={{uri: 'https://nostalgic-spence-0af637.netlify.app/'}}
      style={{ marginTop: '10%'}}
      sharedCookiesEnabled={True}
      thirdPartyCookiesEnabled={True}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
