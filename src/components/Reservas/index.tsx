import { StyleSheet, FlatList } from 'react-native';
import { prismaClient } from '../../services/db';
import { ReservaList } from './list';

export function Reservas({ filter }: { filter: boolean }) {

  const reservas = prismaClient.reserva.useFindMany({
    where: {
      concluido: filter
    }
  });

  return (
    <>
      <FlatList
        data={reservas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ReservaList data={item} />}
      />
    </>
  );
}

const styles = StyleSheet.create({

})