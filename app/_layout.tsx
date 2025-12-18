import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import Toast from 'react-native-toast-message'
import {toastConfig} from '../constants/ToastConfig/ToastConfig'
import { useColorScheme } from '@/hooks/use-color-scheme';
import {Provider} from 'react-redux'
import {store} from '../redux_store/Store'


export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
<>
    <Provider store={store}>  
      <Stack
          screenOptions={{
          headerShown: false,                  // No header anywhere
          animation: 'slide_from_right',       // Smooth native transitions
          contentStyle: { backgroundColor: 'transparent' },
          animationDuration: 250,              // Slightly faster but smooth
        }}
      >
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        <Stack.Screen name="index"  />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
      <Toast  />
      </Provider>  
</>  
  );
}
