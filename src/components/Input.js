import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{marginBottom: 15}}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={{
          backgroundColor: 'aliceblue',

          borderColor: 'red',
          flexDirection: 'row',
          borderWidth: 0.5,
          padding: 15,
          borderColor: error ? 'red' : isFocused ? 'darkblue' : 'light',
        }}>
        <TextInput
          style={{color: 'darkblue', width: '100%'}}
          {...props}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}></TextInput>
      </View>
      {error && (
        <Text style={{color: 'red', fontSize: 12, marginTop: 7}}>{error}</Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: 'grey',
    marginVertical: 5,
  },
  inputContainer: {
    height: 50,
    backgroundColor: 'aliceblue',
    borderColor: 'red',
    // marginHorizontal: 15,
    flexDirection: 'row',
    borderWidth: 0.5,
    padding: 15,
  },
});
