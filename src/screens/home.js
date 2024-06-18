import { View } from "react-native";
import { Text } from "react-native-paper";
import { getValueFor } from "../utils/storage";
import { useEffect, useState } from "react";
import { materiasapi } from "../apis/getmaterias";

//obtener el token
//solicitar la lista de materias
export default Home = () => {
  const [token, setToken] = useState();
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    const getToken = async () => {
      const token = await getValueFor("token");
      setToken(token);
    };

    const obtenerMateria = async (token) => {
      const Data = await materiasapi(token);
      console.log("materias", Data);
      setMaterias(Data);
    };
    getToken();
    obtenerMateria(token);
  }, []);

  return (
    <View>
      <Text>Home</Text>
      {/* Listar las materias
      usar flatlist
      crear card para las materias */}
    </View>
  );
};
