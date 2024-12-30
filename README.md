# Expo ImagePicker Android Gallery Issue

This repository demonstrates a bug encountered while using Expo's ImagePicker on Android devices. The issue is intermittent, preventing image selection from the device's gallery.  iOS functionality remains unaffected.

## Bug Description

The ImagePicker component loads, but fails to display images from the device gallery. No error messages are logged in the Expo console.  The behavior is inconsistent; sometimes it works, other times it doesn't.  The bug appears to relate to interactions between the Expo ImagePicker library and specific Android devices or system configurations. 

## Reproduction Steps

1. Run the `bug.js` example on an Android device.
2. Attempt to select an image from the device's gallery using the ImagePicker.
3. Observe that no images load in the picker (though the picker itself displays).

## Solution (bugSolution.js)

The proposed solution involves using the `mediaTypes` prop with `ImagePicker.launchImageLibraryAsync` to explicitly specify which media types to include. In some cases, Android systems may experience this issue if it's trying to fetch too many different media types.
