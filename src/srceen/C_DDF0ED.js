import React from 'react';
import { View, Text, Button } from 'react-native';

const C_DDF0ED = ({ props, navigation }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#DDF0ED' }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
            #DDF0ED
        </Text>

        <Button onPress={() => {
            navigation.navigate("App")
        }} title="IS LOGIN" />
    </View>
)

export default C_DDF0ED;