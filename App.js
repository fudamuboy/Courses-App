import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';
import CoursesInfo from './components/CoursesInfo';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default function App() {
  // the usage of Modal when the button is clicked
  const [modalVisible, setModalVisible] = useState(false)
  const [courses, setCourses] = useState([])

  const baslaModal = () => {
    setModalVisible(true)
  }
  const endModal = () => {
    setModalVisible(false)
  }

  const addCourse = (courseTitle) => {
    // console.log(courseTitle);
    setCourses((currentCourses) => [
      ...currentCourses,
      { text: courseTitle, id: Math.random().toString() },
    ])
    endModal()

  }

  // for seen if the modal is visible u have toc reate a components n
  //  then inside make a props who check the visibility of modal
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title='KURS EKLE' onPress={baslaModal} />
        <CoursesInfo visible={modalVisible} onAddCourse={addCourse} onCancel={endModal} />
      </View>
      <View>
        <FlatList data={courses}
          renderItem={({ item }) => (
            <View style={styles.itemler}>
              <Text style={styles.text}>{item.text} </Text>
            </View>
          )} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

    paddingTop: 60,
    paddingHorizontal: 30,


  },
  itemler: {
    backgroundColor: 'gray',
    margin: 8,
    marginHorizontal: 50,


  },
  text: {
    padding: 8,

  },

});
