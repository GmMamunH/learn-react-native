import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Service = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Post[]>([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <View className="border-2 shadow-slate-500 p-3 mb-2 rounded-lg">
              <Text className="font-bold">{item.title}</Text>
              <Text className="mb-12">
                {"\n"}
                {item.body}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Service;
