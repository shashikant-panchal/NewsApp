import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const AddPostScreen = () => {
  const [selectedType, setSelectedType] = useState('type1');
  const [selectedCategory, setSelectedCategory] = useState('category1');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Create a New Post</Text>

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Select Type</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedType}
            onValueChange={itemValue => setSelectedType(itemValue)}
            style={styles.pickerComponent}>
            <Picker.Item label="Type 1" value="type1" />
            <Picker.Item label="Type 2" value="type2" />
            <Picker.Item label="Type 3" value="type3" />
          </Picker>
        </View>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Select Category</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={itemValue => setSelectedCategory(itemValue)}
            style={styles.pickerComponent}>
            <Picker.Item label="Category 1" value="category1" />
            <Picker.Item label="Category 2" value="category2" />
            <Picker.Item label="Category 3" value="category3" />
          </Picker>
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="News Title"
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Insert News Content Here..."
        placeholderTextColor="#aaa"
        multiline
        numberOfLines={6}
      />

      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.imageButton}>
          <Text style={styles.imageButtonText}>Select Image</Text>
        </TouchableOpacity>
        <Image
          source={{uri: 'https://via.placeholder.com/120'}}
          style={styles.imagePreview}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#000',
  },
  pickerContainer: {
    marginBottom: 20,
  },
  pickerLabel: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000',
  },
  picker: {
    height: 60,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
  },
  pickerComponent: {
    height: 60,
    width: '100%',
  },
  input: {
    height: 60,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    fontSize: 18,
    color: '#000',
  },
  textArea: {
    height: 150,
    textAlignVertical: 'top',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  imageButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginRight: 15,
  },
  imageButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  imagePreview: {
    width: 120,
    height: 120,
    borderRadius: 12,
    resizeMode: 'cover',
  },
});

export default AddPostScreen;
