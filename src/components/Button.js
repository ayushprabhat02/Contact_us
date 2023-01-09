import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({title, onPress = () => {}}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={{
          height: 50,
          width: '100%',
          backgroundColor: 'slateblue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
