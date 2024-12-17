import { Modal, StyleSheet, Text, TextInput, View, Image, Button } from 'react-native'
import React, { useState } from 'react'


// here we go contunue with the opening of the modal 
export default function CoursesInfo({ visible, onAddCourse, onCancel }) {
    const [enterCourseText, setEnterCourseText] = useState('')

    // au clic sur le botuon i take the value n send by onAddCourse through a props 
    const addCourseHandler = () => {
        onAddCourse(enterCourseText)
        setEnterCourseText('')
    }



    // recuperationde la value avec son attribut pr oeration so pr envoyer ust const 
    const inputText = (enterCourseText) => {
        setEnterCourseText(enterCourseText)
    }
    return (
        <Modal
            animationType="slide"
            visible={visible}            // for opening modal otehrwise use false 
        >
            <View style={styles.centeredView}>
                <Image
                    style={styles.images}
                    source={require('../assets/kartal.png')} />
                <TextInput
                    style={styles.input}
                    placeholder='Enter something'
                    value={enterCourseText} onChangeText={inputText}
                    autoCorrect={false}
                    keyboardType="default" />
                <View style={styles.btnContainer}>

                    <View style={styles.btn} >
                        <Button title='EKLE' color='red' onPress={addCourseHandler} />
                    </View>
                    <View style={styles.btn}>
                        <Button title='IPTAL ET' color='blue'
                            onPress={onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray'
    },
    images: {
        width: 250,
        height: 250,
        borderRadius: 10,
        margin: 15,
    },
    btnContainer: {
        flexDirection: 'row',
        marginTop: 10,





    },
    btn: {
        width: 150,
        marginHorizontal: 8,

    },
    input: {
        borderWidth: 1,
        backgroundColor: 'pink',
        borderColor: 'pink',
        margin: 10,
        borderRadius: 10,
        width: 200,
    },
})