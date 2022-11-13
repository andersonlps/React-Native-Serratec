import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Div1 from './src/components/Div1';
import Div2 from './src/components/Div2';
import Div3 from './src/components/Div3';
import Div4 from './src/components/Div4';
import Div5 from './src/components/Div5';
import { styles } from './src/components/styles';

export default function App() {
 

  return (
    <View style={styles.container}>
      <Div1 />
      <Div2 />
      <Div3 />
      <Div4 />
      <Div5 />
    </View>
  );
}


