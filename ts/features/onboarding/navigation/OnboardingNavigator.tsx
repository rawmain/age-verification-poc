import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingStart from '../screens/OnboardingStart';
import ONBOARDING_ROUTES from './routes';

/**
 * Screen parameters for the onboarding navigator.
 * New screens should be added here along with their parameters.
 */
export type OnboardingNavigatorParamsList = {
  [ONBOARDING_ROUTES.MAIN]: undefined;
  [ONBOARDING_ROUTES.START]: undefined;
};

const Stack = createNativeStackNavigator<OnboardingNavigatorParamsList>();

/**
 * The onboarding related stack which is used to navigate between onboarding screens on the first app launch.
 * It includes the initial carousel screen, the start screen, the PIN creation screen and the biometric screens.
 * The three biometric screens are shown based on the device's biometric capabilities and the user's settings.
 */
const OnboardingNavigator = () => (
  <Stack.Navigator
    initialRouteName={ONBOARDING_ROUTES.START}
    screenOptions={{headerShown: false}}>
    <Stack.Screen name={ONBOARDING_ROUTES.START} component={OnboardingStart} />
  </Stack.Navigator>
);

export default OnboardingNavigator;
