import { StyleSheet, View } from 'react-native';
import HomePage from './pages/HomePage';

export default function App() {

  const playerList: object[] = [
    { id: 1, name: '川島', number: 1, position: 'GK' },
    { id: 2, name: '植田', number: 2, position: 'DF' },
    { id: 3, name: '室屋', number: 3, position: 'DF' },
    { id: 4, name: '板倉', number: 4, position: 'DF' },
    { id: 5, name: '長友', number: 5, position: 'DF' },
    { id: 6, name: '遠藤', number: 6, position: 'MF' },
    { id: 7, name: '柴崎', number: 7, position: 'MF' },
    { id: 8, name: '原口', number: 8, position: 'MF' },
    { id: 9, name: '鎌田', number: 9, position: 'FW' },
    { id: 10, name: '南野', number: 10, position: 'FW' },
    { id: 11, name: '古橋', number: 11, position: 'FW' },
  ]

  const listAction: object[] = [
    { id: 1, title: 'セカンドボール', nameAction: 'kick the ball' },
    { id: 2, title: '空中戦', nameAction: 'header' },
    { id: 3, title: 'アドバンテージ', nameAction: 'win the ball' },
    { id: 4, title: 'アウトオブプレー', nameAction: 'leave the field' },
  ]

  return (
    <View style={styles.container}>
      <HomePage players={playerList} actions={listAction} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
