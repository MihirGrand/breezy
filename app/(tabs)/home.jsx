import { View, Text, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const popularUrl = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const topRatedUrl = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const upcomingUrl = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_SECRET}`,
    },
  };

  useEffect(() => {
    fetch(popularUrl, options)
      .then((res) => res.json())
      .then((json) => setPopular(json.results))
      .catch((err) => console.error("error:" + err));
    fetch(nowPlayingUrl, options)
      .then((res) => res.json())
      .then((json) => setNowPlaying(json.results))
      .catch((err) => console.error("error:" + err));
    fetch(topRatedUrl, options)
      .then((res) => res.json())
      .then((json) => setTopRated(json.results))
      .catch((err) => console.error("error:" + err));
    fetch(upcomingUrl, options)
      .then((res) => res.json())
      .then((json) => setUpcoming(json.results))
      .catch((err) => console.error("error:" + err));
  }, []);
  return (
    <View>
      <Text>Home</Text>
      <ScrollView>
        <ScrollView horizontal={true}>
          <View className="flex-row gap-2">
            {popular.map((movie) => {
              return (
                <View key={movie.id} className="w-20">
                  <Image
                    className="h-40 rounded-md"
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                    resizeMode="cover"
                  />
                  <Text className=" font-medium text-wrap text-center">{movie.title}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <ScrollView horizontal={true}>
          <View className="flex-row gap-2">
            {nowPlaying.map((movie) => {
              return (
                <View key={movie.id} className="w-20">
                  <Image
                    className="h-40 rounded-md"
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                    resizeMode="cover"
                  />
                  <Text className=" font-medium text-wrap text-center">{movie.title}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <ScrollView horizontal={true}>
          <View className="flex-row gap-2">
            {topRated.map((movie) => {
              return (
                <View key={movie.id} className="w-20">
                  <Image
                    className="h-40 rounded-md"
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                    resizeMode="cover"
                  />
                  <Text className=" font-medium text-wrap text-center">{movie.title}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <ScrollView horizontal={true}>
          <View className="flex-row gap-2">
            {upcoming.map((movie) => {
              return (
                <View key={movie.id} className="w-20">
                  <Image
                    className="h-40 rounded-md"
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                    resizeMode="cover"
                  />
                  <Text className=" font-medium text-wrap text-center">{movie.title}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;
