import * as React from 'react';
import {Text, View, Pressable, GestureResponderEvent} from 'react-native';
import {StyleSheet} from 'react-native';
import styles from '../../../styles';

export interface props {
  children: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
  color: string;
  width: number;
}

export default function ButtonAlignLeft(props: props) {
  switch (props.color) {
    case 'Red':
      return (
        <Pressable
          onPress={props.onPress}
          style={{
            ...styles.button_generic,
            ...{
              backgroundColor: '#bc231e',
              width: props.width,
              justifyContent: 'flex-start',
            },
          }}>
          {props.children}
        </Pressable>
      );
    case 'Yellow':
      return (
        <Pressable
          onPress={props.onPress}
          style={{
            ...styles.button_generic,
            ...{
              backgroundColor: '#e2b465',
              width: props.width,
              justifyContent: 'flex-start',
            },
          }}>
          {props.children}
        </Pressable>
      );
    case 'Green':
      return (
        <Pressable
          onPress={props.onPress}
          style={{
            ...styles.button_generic,
            ...{
              backgroundColor: '#0dbc6a',
              width: props.width,
              justifyContent: 'flex-start',
            },
          }}>
          {props.children}
        </Pressable>
      );
    case 'Blue':
      return (
        <Pressable
          onPress={props.onPress}
          style={{
            ...styles.button_generic,
            ...{
              backgroundColor: '#005997',
              width: props.width,
              justifyContent: 'flex-start',
            },
          }}>
          {props.children}
        </Pressable>
      );
  }
  return (
    <Pressable
      onPress={props.onPress}
      style={{
        ...styles.button_generic,
        ...{backgroundColor: '#bc231e'},
      }}>
      <Text style={{...styles.text_white, ...{fontSize: 32}}}>
        Invalid button color specified
      </Text>
    </Pressable>
  );
}
