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
import CustomDropdown from '../components/CustomDropDown';

const AddPostScreen = () => {
  const [selectedType, setSelectedType] = useState('Type 1');
  const [selectedCategory, setSelectedCategory] = useState('Category 1');

  const typeOptions = [
    {label: 'Type 1', value: 'Type 1'},
    {label: 'Type 2', value: 'Type 2'},
    {label: 'Type 3', value: 'Type 3'},
  ];

  const categoryOptions = [
    {label: 'Category 1', value: 'Category 1'},
    {label: 'Category 2', value: 'Category 2'},
    {label: 'Category 3', value: 'Category 3'},
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Create a New Post</Text>

      <CustomDropdown
        label="Select Type"
        options={typeOptions}
        selectedValue={selectedType}
        onValueChange={setSelectedType}
      />

      <CustomDropdown
        label="Select Category"
        options={categoryOptions}
        selectedValue={selectedCategory}
        onValueChange={setSelectedCategory}
      />

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
