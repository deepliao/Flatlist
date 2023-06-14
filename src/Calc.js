import React, { useState } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Calc = () => {
  const [result, setResult] = useState('');

  const handlePress = () => {
    const sqrtResult = Math.sqrt(1 * 1 + 2 * 2 + 2 * 2);
    setResult(sqrtResult);
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <Text style={styles.headtitle}>Distance of (x,y,z) from (0,0,0)</Text>
      <Text style={styles.subtitle}>Write the code for this app which calculates {"\n"}d =Math.sqrt(x*x+y*y+z*Z)</Text>
      <Text style={styles.subtitle}>1</Text>
      <Text style={styles.subtitle}>2</Text>
      <Text style={styles.subtitle}>2</Text>
      <Button title='CALCULATE DISTANCE' onPress={handlePress} />
      <Text style={styles.subtitle}>distance to (1,2,2) is d = {result}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    marginHorizontal: 6,
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#fddcb9',
    borderColor: 'black',
    borderWidth: 2
  },
  image: {
    width: 60,
    height: 60,
    overflow: 'hidden',
    position: 'relative',
    top: 20,
    right: 20
  },
  content: {
    flex: 1,
    padding: 5
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    position: 'relative',
    top: 20,
    textAlign: 'center'
  },
  headtitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333'
  }
});

export default Calc;
