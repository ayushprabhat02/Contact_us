import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const Homescreen = () => {
  const [inputs, setInputs] = React.useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = React.useState({});
  const validate = () => {
    // keyboard.dismiss();
    let valid = true;
    if (!inputs.name) {
      handleError('Please input name', 'name');
      valid = false;
    }
    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      valid = false;
    } else if (inputs.phone.length < 10) {
      handleError('pls Enter 10 digits phone number', 'phone');
    }
    if (!inputs.email) {
      handleError('Please input email', 'email');
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/))
      handleError('Please input valid email', 'email');
    if (!inputs.message) {
      handleError('Please input message', 'message');
      valid = false;
    }
  };

  const handleOnChange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };

  return (
    <View>
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 40}}>Contact Us</Text>
        <Text style={{fontSize: 18, color: 'grey', marginVertical: 10}}>
          Please Enter your Details
        </Text>
        <View style={{marginVertical: 20}}>
          <Input
            label="Name"
            placeholder="Enter your Name"
            error={errors.name}
            onFocus={() => {
              handleError(null, 'name');
            }}
            onChangeText={text => handleOnChange(text, 'name')}
          />
          <Input
            keyboardType="numeric"
            label="Phone"
            placeholder="Enter your Phone Number"
            error={errors.phone}
            onFocus={() => {
              handleError(null, 'phone');
            }}
            onChangeText={text => handleOnChange(text, 'phone')}
          />
          <Input
            label="Email"
            placeholder="Enter your Email"
            error={errors.email}
            onFocus={() => {
              handleError(null, 'email');
            }}
            onChangeText={text => handleOnChange(text, 'email')}
          />
          <Input
            label="Message"
            placeholder="Enter your Message"
            error={errors.message}
            onFocus={() => {
              handleError(null, 'messag');
            }}
            onChangeText={text => handleOnChange(text, 'message')}
          />
        </View>
        <Button title="Submit" onPress={validate} />
      </ScrollView>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
