import * as React from 'react';
import {
  Body,
  FooterActions,
  H3,
  Pictogram,
  VSpacer
} from '@pagopa/io-app-design-system';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useHardwareBackButton} from '../../../hooks/useHardwareBackButton';

/**
 * Onboarding screen which is shown after the initial carousel.
 * It has a button to start the PIN creation process.
 */
const OnboardingStart = () => {
  const {t} = useTranslation(['onboarding', 'global']);
  useHardwareBackButton(() => false);

  const onStartPress = () => null;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.centeredContainer}>
        <Pictogram name="hello" size={180} />
        <VSpacer size={24} />
        <H3 style={styles.text}>{t('start.title')}</H3>
        <VSpacer size={8} />
        <Body style={styles.text}>{t('start.subtitle')}</Body>
      </View>
      <FooterActions
        actions={{
          primary: {
            label: t('global:buttons.start'),
            onPress: onStartPress
          },
          type: 'SingleButton'
        }}
      />
    </SafeAreaView>
  );
};

export default OnboardingStart;

const styles = StyleSheet.create({
  text: {textAlign: 'center'},
  safeArea: {
    flex: 1
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
