import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("CadastroEvento")}
        >
          Cadastro de Eventos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("CadastroIngresso")}
        >
          Cadastro de Ingresso
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("CadastroOrganizador")}
        >
          Cadastro de Organizadores
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f1f1f1", // Fundo claro
      padding: 20,
    },
    input: {
      width: "80%", 
      height: 50,
      borderWidth: 1.5,
      borderColor: "#2E8B57",
      borderRadius: 10,
      marginBottom: 20,
      paddingLeft: 15,
      fontSize: 16,
      backgroundColor: "#fff", 
    },
    button: {
      width: "80%",
      height: 50,
      backgroundColor: "#2E8B57",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      marginBottom: 20,
    },
    buttonText: {
      color: "#fff", 
      fontSize: 18,
      fontWeight: "bold",
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#2E8B57", 
      marginBottom: 40,
    },
  });
  