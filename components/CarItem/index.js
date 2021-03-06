import React from 'react'
import {View, Text, ImageBackground} from 'react-native';
import StylesButton from '../stylesbutton';
import styles from './styles';

const CarItem = (props) => {
    const {name, tagline, taglineCTA, image} = props.car;
    return (
        <View style={styles.carContainer}>
            <ImageBackground 
                source={image}
                style={styles.image}
            />
            <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>
                {tagline}
                {' '}
                <Text style={styles.subtitleCTA}>
                    {taglineCTA}
                </Text>
            </Text>
            </View>
            <View style={styles.buttonContainer}>
                <StylesButton
                    type="primary"
                    content={"Custom Order"}
                    onPress={() => {
                        console.warn("Custom Order is pressed");
                    }}
                />
                <StylesButton
                    type="secondary"
                    content={"Existing Inventory"}
                    onPress={() => {
                        console.warn("Another button pressed");
                    }}/>
            </View>
        
      </View>
    );
};

export default CarItem;
