import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const UserInfo = ({ item, id }) => {
    const navigation = useNavigation();
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    return (
        <TouchableOpacity style={styles.container} onPress={toggleExpansion}>
            <View style={styles.detailsContainer}>
                <View style={styles.header}>
                    <Text style={styles.name}>{item.fName} {item.Lname}</Text>
                    <AntDesign name={expanded ? 'up' : 'down'} size={20} color='#555' style={styles.expandIcon} />
                </View>
                {expanded && (
                    <View style={styles.detailsView}>
                        <Text style={styles.details}>Phone Number: {item.phoneNumber}</Text>
                        <Text style={styles.details}>Email: {item.email}</Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    detailsContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
        marginRight: 10,
        color: '#2b6777',
    },
    detailsView: {
        marginTop: 10,
        marginLeft: 5,
        borderLeftWidth: 1,
        borderColor: '#ccc',
        paddingLeft: 10,
    },
    details: {
        fontSize: 16,
        marginVertical: 5,
        color: '#555',
    },
    expandIcon: {
        flex: 1,
        textAlign: 'right',
        color: '#ff8c00',

    },
});

export default UserInfo;
