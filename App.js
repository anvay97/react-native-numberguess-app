import React,{ useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () =>{
  return Font.loadAsync({
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
} 

 
export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded){
    return(
      <AppLoading 
          startAsync={fetchFonts} 
          onFinish={()=>setFontLoaded(true)} 
      />
    ); 
  }

  const configureNewgameHandler = () =>{
    setGuessRounds(0);
    setUserNumber(null);

  }

  const startGameHandler = (selectedNumber) =>{
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds =>{
    setGuessRounds(numOfRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if(userNumber && guessRounds <=0 ){
    content  = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}  />;
  }

  else if(guessRounds > 0){
    content = <GameOverScreen  rounds={guessRounds} userNumber={userNumber} onRestart={configureNewgameHandler} />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
     {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1
  }
});
