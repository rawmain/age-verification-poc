import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {
  IODSExperimentalContextProvider,
  IONewTypefaceContextProvider,
  IOThemeContextProvider,
  ToastProvider
} from '@pagopa/io-app-design-system';
import {PersistGate} from 'redux-persist/integration/react';

import {StyleSheet} from 'react-native';
import {persistor, store} from './store';
import RootContainer from './screens/RootContainer';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={style.gestureHandler}>
      <SafeAreaProvider>
        <IODSExperimentalContextProvider>
          <IONewTypefaceContextProvider>
            <IOThemeContextProvider theme={'light'}>
              <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                  <ToastProvider>
                    <RootContainer />
                  </ToastProvider>
                </PersistGate>
              </Provider>
            </IOThemeContextProvider>
          </IONewTypefaceContextProvider>
        </IODSExperimentalContextProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const style = StyleSheet.create({
  gestureHandler: {
    flex: 1
  }
});

export default App;
