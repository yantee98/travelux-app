import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header, Footer, SignInForm } from '../components';

export const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Login" />
      <SignInForm />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});