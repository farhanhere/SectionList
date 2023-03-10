import React, { useState } from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity } from 'react-native';

export default function App() {
  const [clr, setClr] = useState([])
  const [Data, setData] = useState([
    {
      Key: 0,
      title: 'Burgers',
      data: [{ Key: 1, title: 'Chicken' }, { Key: 2, title: 'Beef' }, { Key: 3, title: 'Cheese' }, { Key: 4, title: 'Tikka' }],
    },
    {
      Key: 1,
      title: 'Pizza',
      data: [{ Key: 5, title: 'Tikka' }, { Key: 6, title: 'Chicken' }, { Key: 7, title: 'Cheese' }, { Key: 8, title: 'beef' }],
    },
    {
      Key: 2,
      title: 'Drinks',
      data: [{ Key: 9, title: 'Pepsi' }, { Key: 10, title: 'Mint' }, { Key: 11, title: 'Coke' }],
    },



  ]);

  return (
    <View style={styles.container}>
      <SectionList
        sections={Data}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={[{ fontSize: 50 }, { marginBottom: 10 }, { marginLeft: 15 }]}>{title}</Text>

        )}

        keyExtractor={item => item.Key}
        renderItem={({ item }) => 

          <TouchableOpacity style={[styles.text, { backgroundColor: clr[item.Key] ? "red" : "lightgrey" }]} onPress={() => {
            setClr(prevState => {
              const newState = [...prevState];
              newState[item.Key] = !newState[item.Key];
              return newState;
            });
          }}>
            <Text style={styles.text1}>{item.title}</Text>

          </TouchableOpacity>

        }


      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100,
  },


  text: {
    width: 350,
    height: 50,
    marginLeft: 20,
    marginBottom: 10,
    backgroundColor: 'grey',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10
  },

  text1: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
