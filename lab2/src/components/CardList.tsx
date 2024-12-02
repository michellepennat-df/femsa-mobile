import React from 'react';
import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useListPokemon } from '../service/service';
import Card from './Card';
import CustomImage from './CustomImage';

const baseUrlImage =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png';

const renderCard = ({item}: {item: Pokemon}) => {
  const urlSplitted = item.url.split('/');
  const id = urlSplitted[urlSplitted.length - 2];
  return (
    <Card>
      <CustomImage uri={baseUrlImage.replace('{id}', id)} />
      <Text>{item.name}</Text>
    </Card>
  );
};

const CardList = () => {
  const flatListRef = React.useRef<FlatList>(null);
  const listPokemon = useListPokemon();

  return (
    <FlatList
      ref={flatListRef}
      data={listPokemon}
      renderItem={({item}: {item: Pokemon}) => renderCard({item})}
    />
  );
};

export default CardList;
