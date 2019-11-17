import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const newGameHandler = () =>{
    setGuessRounds(0);
    setUserNumber(null);
  }

  const [guessRounds, setGuessRounds] = useState(0);

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  }

  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGameScreen  onStartGame = {startGameHandler}/>

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen  userChoice = {userNumber} onGameOver={gameOverHandler}/>
  } else if (guessRounds > 0){
    content = <GameOverScreen 
    numRounds = {guessRounds} userNumber = {userNumber} onRestart = {newGameHandler}/>
  }

  return (
    <View style={styles.screen}>
      <Header title = "Guess A Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1
    }
});
