import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { FormReserva } from '../../components/Form';
import { Reservas } from '../../components/Reservas';
import { useState } from 'react';
import Actions from '../../components/actions';

export function Home() {
  const [filter, setFilter] = useState(false)

  return (
    <>
      <StatusBar backgroundColor="#0f172a" barStyle="light-content" />

      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Controle de reservas</Text>
        <Text style={styles.text}>Gerencie as reservas dos moradores</Text>

        <FormReserva />

        <Actions filter={filter} setFilter={(status) => setFilter(status)} />

        {filter && (
          <Reservas filter={filter} />
        )}

        {!filter && (
          <Reservas filter={filter} />
        )}

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 14,
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: 'bold'
  },
  text: {
    color: "#e4e4e7"
  }
});
