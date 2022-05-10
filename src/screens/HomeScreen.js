import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovie } from '../hooks/useMovie';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { moviesList, isLoading } = useMovie();

  const { width, height } = Dimensions.get("window")

  const renderItem = (item) => {

    return (
      <>
        {
          (item.Poster != "N/A") ?
            <Image
              source={{ uri: item.Poster }}
              resizeMode='stretch'
              style={{
                width: width,
                height: 500
              }}
            />
            : null
        }

        <View style={styles.containerText}>

          <Text style={styles.title} >
            {item.Title}
          </Text>

          <Text style={styles.year} >
            Año: {item.Year}
          </Text>

          <Text style={styles.type} >
            Tipo: {item.Type}
          </Text>

        </View>
      </>
    )
  }

  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: 'black',
        }}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>

      <View style={styles.loader}>
        {
          (isLoading) ?
            <ActivityIndicator
              size={80}
              color="#0000ff"
            />
            :
            <FlatList
              data={moviesList}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => renderItem(item)}
              ItemSeparatorComponent={ItemDivider}
            />
        }

      </View>

    </View>
  )
}



const styles = StyleSheet.create({

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',

    textAlign: 'center'
  },
  containerText: {
    backgroundColor: '#D3D3D3'
  },
  year: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  },
  type: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  },
  loader: {
    flex: 1,
    justifyContent: 'center'
  }
});
