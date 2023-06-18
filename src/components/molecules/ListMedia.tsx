import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import axios from "@helper/api/axios";
import ListItem from "@atoms/ListItem";

export default function ListMedia({ data }) {
  return (
    <View style={styles.category}>
      <Text style={styles.categoryTitle}>{data.title}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {/* {data.map((item, index) => (
          <VideoCard key={index} image={item.poster} onPress={() => {}} />
        ))} */}
        {data.content.map((item, index) => {
          return <ListItem key={item} data={item} type={data.type} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    width: "100%",
    paddingHorizontal: 10,
  },
  categoryTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
});
