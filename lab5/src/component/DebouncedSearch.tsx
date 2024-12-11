/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import debounce from 'lodash.debounce';

interface DebouncedSearchProps {
    onSearch: (term: string) => void;
}

const DebouncedSearch: React.FC<DebouncedSearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const debouncedSearch = useCallback(
        debounce((term) => onSearch(term), 500),
        []
    );

    const handleSearch = (text: string) => {
        setQuery(text);
        debouncedSearch(text);
    };

    return (
        <TextInput
            value={query}
            onChangeText={handleSearch}
            placeholder="Search users..."
            style={styles.input}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
    },
});

export default DebouncedSearch;
