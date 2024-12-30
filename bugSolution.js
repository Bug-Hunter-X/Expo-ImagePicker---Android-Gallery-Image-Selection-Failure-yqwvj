// bugSolution.js
import * as ImagePicker from 'expo-image-picker';

async function selectImage() {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    console.log(result.uri);
  }
}

// ... rest of the component