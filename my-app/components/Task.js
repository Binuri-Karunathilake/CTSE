import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import { fireStoreDB } from '../firebase';


const TodoTask = ({ task, id, onPressCheckbox, onPressDelete }) => {
    console.log(task);
    console.log(id);
    const db = fireStoreDB;

    return (
      <View style={styles.listItemContainer}>
        <TouchableOpacity onPress={() => onPressCheckbox(id)}>
          <View style={[styles.checkBox, task.status && styles.checkBoxChecked]}>
            {task.status && <Icon name="check" size={15} color="#fff" />}
          </View>
        </TouchableOpacity>

        <Text style={styles.taskText}>{task.taskName}</Text>

        <TouchableOpacity onPress={() => onPressDelete(id)}>
          <Icon name="trash" size={20} color="#000" />
        </TouchableOpacity>

      </View>
    )
  }

export default TodoTask

//styles
const styles = StyleSheet.create({
    listItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#4e97d1',
        opacity: 5,
        marginTop: 5,
        marginLeft:15,
        marginRight:15

      },

      checkBox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#000',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },

      checkBoxChecked: {
        backgroundColor: '#000',
      },
      
      taskText: {
        fontSize: 16,
        flex: 1,
      },
})