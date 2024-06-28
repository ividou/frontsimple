// NewSubject.js
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Platform,
  Alert,
} from "react-native";
import { Button } from "react-native-paper";
import Input from "../components/input";
import { newSubjet } from "../config/urlapis";
import { useNavigation } from "@react-navigation/native";
import { getValueFor } from "../utils/storage";
import { materiasapi } from "../apis/getmaterias";

const NewSubject = () => {
  const [nombre, setNombre] = useState("");
  const navigation = useNavigation();

  const handleSave = async () => {
    if (!nombre) {
      Alert.alert("Error", "Por favor, ingresa el nombre de la materia.");
      return;
    }

    try {
      const token = await getValueFor("token");

      // Guardar la nueva materia
      const saveResponse = await fetch(newSubjet, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mani: token,
        },
        body: JSON.stringify({ nombre: nombre }),
      });

      const saveData = await saveResponse.json();

      if (saveResponse.ok) {
        Alert.alert("Éxito", "La materia ha sido guardada correctamente.", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
        setNombre(""); // Limpiar el input después de guardar

        // Actualizar la lista de materias después de guardar
        const materiasData = await materiasapi(token);
        if (materiasData) {
          console.log("Materias actualizadas:", materiasData);
          // Aquí puedes actualizar el estado de las materias si es necesario
        } else {
          console.log("Error al obtener las materias");
        }
      } else {
        Alert.alert(
          "Error",
          saveData.message || "Error al guardar la materia."
        );
      }
    } catch (error) {
      console.error("Error saving subject:", error);
      Alert.alert(
        "Error",
        "No se pudo guardar la materia. Verifica tu conexión a internet e intenta nuevamente."
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Nueva Materia</Text>
        <Input
          label="Nombre de la Materia"
          value={nombre}
          onChange={setNombre}
          icon="book"
        />
        <Button mode="contained" onPress={handleSave} style={styles.saveButton}>
          Guardar
        </Button>
        {/* Botón opcional para volver manualmente a Home */}
        {/* <Button
          onPress={() => navigation.navigate('Home')}
          title="Volver a Home"
        /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 25 : 0,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "80%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  saveButton: {
    marginTop: 20,
  },
});

export default NewSubject;
