import React from 'react';
import { View, Text, Button } from 'react-native';

const C_C3BED4 = ({ props, navigation }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#495A80' }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
            #495A80
        </Text>

        <Button onPress={() => {
            navigation.navigate("C_C7FFEC")
        }} title="GO TO C7FFEC"/>

        <View style={{ height: 30 }}></View>

        <Button style={{ marginTop: 30 }} onPress={() => {
            navigation.navigate("Login")
        }} title="GO TO Login" />
    </View>
)

export default C_C3BED4;