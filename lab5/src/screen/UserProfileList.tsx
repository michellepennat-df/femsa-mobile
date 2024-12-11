import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {fetchUsers, getCachedUsers} from '../service/service';
import DebouncedSearch from '../component/DebouncedSearch';
import {useQuery} from 'react-query';

const UserProfileList = () => {
  interface User {
    id: number;
    name: string;
  }

  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]);

  const {isLoading, error} = useQuery<any, {message: string}>(
    ['users'],
    async () => {
      const cachedData = await getCachedUsers();
      if (cachedData) {
        setAllUsers(cachedData);
        return cachedData;
      }

      const fetchedData = await fetchUsers();
      setAllUsers(fetchedData);
      return fetchedData;
    },
    {
      retry: 3,
      onSuccess: data => setFilteredUsers(data),
    },
  );

  const handleSearch = (term: string) => {
    const filtered = allUsers.filter(user =>
      user.name.toLowerCase().includes(term.toLowerCase()),
    );
    setFilteredUsers(filtered);
  };

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text style={styles.error}>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <DebouncedSearch onSearch={handleSearch} />
      <FlatList
        data={filteredUsers}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default UserProfileList;
