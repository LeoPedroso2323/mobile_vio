import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import api from "../axios/axios";
import CustomDateTimePicker from "../components/DateTimePicker";  // Alterado para CustomDateTimePicker

export default function CadastroEvento({ navigation }) {
  const [evento, setEvento] = useState({
    nome: "",
    descricao: "",
    data_hora: "",
    local: "",
    fk_id_organizador: "",
  });

  async function handleEvento() {
    await api.postEvento(evento).then(
      (response) => {
        console.log(response.data.message);
        Alert.alert("OK", response.data.message);
      },
      (error) => {
        Alert.alert("Erro", error.response.data.error);
        console.log(error);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça Cadastro de um Evento</Text>
      
      {/* Usando o componente renomeado */}
      <CustomDateTimePicker
        type={"date"}
        buttonTitle={
          evento.data_hora === "" 
            ? "Selecione a data do Evento" 
            : evento.data_hora.toLocaleString()
        }
        setValue={setEvento}
        dateKey={"data_hora"}
      />
      
      <TextInput
        placeholder="Descrição"
        value={evento.descricao}
        onChangeText={(value) => setEvento({ ...evento, descricao: value })}
        style={styles.input}
      />
      
      <TextInput
        placeholder="Local"
        value={evento.local}
        onChangeText={(value) => setEvento({ ...evento, local: value })}
        style={styles.input}
      />
      
      <TextInput
        placeholder="ID do Organizador"
        value={evento.fk_id_organizador}
        onChangeText={(value) => setEvento({ ...evento, fk_id_organizador: value })}
        style={styles.input}
      />
      
      {/* Botão Cadastrar */}
      <TouchableOpacity onPress={handleEvento} style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      {/* Botão Home */}
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderColor: "gray",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 5,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
