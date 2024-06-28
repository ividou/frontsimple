import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { getValueFor } from "../utils/storage";
import { materiasapi } from "../apis/getmaterias";

const Home = () => {
  const [token, setToken] = useState();
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    const getToken = async () => {
      const tokenn = await getValueFor("token");
      setToken(tokenn);
      obtenerMateria(tokenn);
    };

    const obtenerMateria = async (token) => {
      const Data = await materiasapi(token);
      console.log("materias", Data);
      setMaterias(Data.materias);
    };

    if (token) {
      obtenerMateria(token);
    } else {
      getToken();
    }
  }, [token]);

  const Item = ({ nombre }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{nombre}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <FlatList
        data={materias}
        renderItem={({ item }) => <Item nombre={item.nombre} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#f0f0f0",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#4caf50",
    padding: 30,
    marginVertical: 15,
    marginHorizontal: 25,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
  },
});

export default Home;
