import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Reserva } from '@prisma/client'
import { prismaClient } from '../../services/db';
import { Ionicons } from '@expo/vector-icons'

interface Props {
  data: Reserva
}

export function ReservaList({ data }: Props) {


  async function handleDeleteReserva() {
    await prismaClient.reserva.delete({
      where: {
        id: data.id
      }
    })
  }

  async function handleUpdateStatus() {
    await prismaClient.reserva.update({
      where: {
        id: data.id
      },
      data: {
        concluido: true
      }
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Quando: {data.dia.toDateString()} - {data.hora.toTimeString()}</Text>
      <Text style={styles.text}>{data.moradorApartamento} - {data.moradorNome}</Text>
      <Text style={styles.text}>Finalidade: {data.finalidade}</Text>

      <View style={styles.buttons}>
        <Pressable style={styles.buttonDelete} onPress={handleDeleteReserva}>
          <Ionicons name="trash-outline" size={16} color="#FFF" />
        </Pressable>

        {!data.concluido && (
          <Pressable style={styles.buttonComplete} onPress={handleUpdateStatus}>
            <Ionicons name="checkmark-outline" size={16} color="#FFF" />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#64748b",
    marginBottom: 30,
    padding: 14,
    borderRadius: 4,
  },
  text: {
    fontWeight: "500",
    color: "#FFF"
  },
  buttons: {
    position: "absolute",
    bottom: -18,
    flexDirection: "row",
    right: 0,
    zIndex: 99,
    gap: 8,
  },
  buttonDelete: {
    backgroundColor: "#ef4444",
    padding: 6,
    borderRadius: 99,
  },
  buttonComplete: {
    backgroundColor: "#22c55e",
    padding: 6,
    borderRadius: 99,
  }
})