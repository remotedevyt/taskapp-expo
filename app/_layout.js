import { Stack } from 'expo-router/stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

const Layout = () => {

    const [loaded, error] = useFonts({
        'poppins-medium': require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
        'poppins-regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
      }, [loaded, error]);
    
      if (!loaded && !error) {
        return null;
      }

    return (
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="task" options={{ title:'New Task',headerBackTitle:'Back' }} />
        </Stack>
    );
}

export default Layout;