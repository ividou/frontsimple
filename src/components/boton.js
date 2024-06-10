import React, { useState } from "react";
import { Button, ActivityIndicator } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { primaryColor, secundaryColor } from "../config/colors";

const Boton = (props) => {
  const { onClick, texto } = props;
  const [loading, setLoading] = useState(false);

  const handlePress = async () => {
    setLoading(true);
    try {
      await onClick();
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <Button
        mode="contained"
        onPress={handlePress}
        style={styles.button}
        contentStyle={styles.buttonContent}
      >
        {loading ? <ActivityIndicator color="white" /> : texto}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 5,
    backgroundColor: secundaryColor,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Boton;
