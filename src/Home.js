import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [newsList, setNewsList] = useState([]);

  const fetchNews = async () => {
    try {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`;
      const options = { timeout: 10000 };
      const response = await fetch(url, options);
      const json = await response.json();
      setNewsList(json);
      setLoading(false);
      setRefreshing(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setRefreshing(false);
    }
  };


  useEffect(() => {
    fetchNews();
  }, []);

  const renderNewsItem = ({ item }) => (
      <View style={styles.container} >
        <View style={styles.content}>
          <Text style={styles.title}>{item.strMeal}</Text>
        </View>
        {item.strMealThumb ? (
          <Image source={{ uri: item.strMealThumb }} style={styles.image} />
        ) : null}
      </View>
  );

  const handleRefresh = () => {
    setRefreshing(true);
    fetchNews();
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.headtitle}>Meal Finder</Text>
      <Text style={styles.subtitle}>Main Ingredient:beef</Text>
      <FlatList
        data={newsList.meals}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.idMeal}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    marginHorizontal: 6,
    flexDirection: 'row',
    height:100,
    backgroundColor:'#fddcb9',
    borderColor:'black',
    borderWidth:2
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
    textAlign:'center'
  },
  headtitle:{
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333'
  },
  subtitle:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333'
  }
});

export default Home;
