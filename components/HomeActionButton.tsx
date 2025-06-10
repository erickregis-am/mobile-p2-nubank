import { View, Text, Image, ImageSourcePropType, StyleSheet, Dimensions, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';

interface ActionProps {
  title: string;
  image: ImageSourcePropType;
}

const { width } = Dimensions.get('window');

const BUTTON_SIZE = width * 0.18; // Uns 72px 
const IMAGE_SIZE = BUTTON_SIZE * 0.4; // Uns 28px

export default function HomeActionButton({ title, image }: ActionProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.button}>
        <Image style={styles.image} source={image} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    width: BUTTON_SIZE,
  },
  button: {
    backgroundColor: '#F0F1F5',
    borderRadius: '100%',
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    aspectRatio: 1,
  },
  text: {
    fontWeight: '600', 
    textAlign: 'center',
    fontSize: 13,
    width: '100%',
  },
});