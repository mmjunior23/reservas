import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Keyboard } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons'
import { prismaClient } from "../../services/db"

export function FormReserva() {
  const [dia, setDia] = useState("")
  const [hora, setHora] = useState("")
  const [moradorNome, setMoradorNome] = useState("")
  const [moradorApartamento, setMoradorApartamento] = useState("")
  const [finalidade, setFinalidade] = useState("Mudança 1");

  async function handleNewReserva() {
    if (dia === "") return;
    if (hora === "") return;
    if (moradorNome === "") return;
    if (moradorApartamento === "") return;

    await prismaClient.reserva.create({
      data: {
        dia: dia,
        hora: hora,
        moradorNome: moradorNome,
        moradorApartamento: moradorApartamento,
        finalidade: finalidade,
        concluido: false,
      }
    })

    setDia("")
    setHora("")
    setMoradorNome("")
    setMoradorApartamento("")
    Keyboard.dismiss()

  }

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={finalidade}
        onValueChange={(itemValue, itemIndex) => setFinalidade(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Mudança 1" value="Mudança 1" />
        <Picker.Item label="Mudança 2" value="Mudança 2" />
        <Picker.Item label="Obra 1" value="Obra 1" />
        <Picker.Item label="Obra 2" value="Obra 2" />
        <Picker.Item label="Churrasqueira 1" value="Churrasqueira 1" />
        <Picker.Item label="Churrasqueira 2" value="Churrasqueira 2" />
        <Picker.Item label="Salão de Festa" value="Salão de Festa" />
      </Picker>
      <TextInput
        placeholder="Informe a data (DD/MM/AAAA)"
        value={dia}
        onChangeText={setDia}
        style={styles.input}
      />
      <TextInput
        placeholder="Informe o horário (HH:MM:SS)"
        value={hora}
        onChangeText={setHora}
        style={styles.input}
      />
      <TextInput
        placeholder="Nome do morador"
        value={moradorNome}
        onChangeText={setMoradorNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Apartamento"
        value={moradorApartamento}
        onChangeText={setMoradorApartamento}
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={handleNewReserva}>
        <Text style={styles.buttonText}>Registrar</Text>
        <Ionicons name="add" size={24} color="#FFF" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f1f5f9",
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 8,
  },
  picker: {
    backgroundColor: "#f1f5f9",
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#22c55e",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 8,
    gap: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "500"
  }
})