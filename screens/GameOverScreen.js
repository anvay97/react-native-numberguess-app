import React from "react";
import { View, StyleSheet, Text, Button, Image} from "react-native";
import GlobalStyles from '../constants/GlobalStyles';

const GameOverScreen = ({rounds, userNumber, onRestart}) =>{
    return(
        <View style={styles.screen}>
            <Text style={GlobalStyles.title}>Game Is Over !!! </Text>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image} 
                    source={require('../assets/success.png')} 
                    resizeMode= 'cover'
                    />
            </View>
            <Text style={GlobalStyles.title} >No of Rounds : {rounds} </Text>
            <Text style={GlobalStyles.title} >User Number : {userNumber} </Text>
            <View style={styles.buttonContainer}>
                <Button title='NEW GAME ' onPress={onRestart} />
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageContainer:{
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },

    image:{
        width: '100%',
        height: '100%',
    },

    buttonContainer:{
        marginVertical: 20
    }

});

export default GameOverScreen;