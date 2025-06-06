import { SafeAreaView } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';
import '../global.css';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
  return (
    <>
      <SafeAreaView className="flex-1 bg-white" edges={['left', 'right', 'bottom', 'top']}>
        <Slot />
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
};

export default RootLayout;
