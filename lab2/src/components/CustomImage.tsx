import React from 'react';
import FastImage from 'react-native-fast-image';

interface CustomImageProps {
  uri: string;
}

const CustomImage = ({uri}: CustomImageProps) => {
  return (
    <FastImage
      style={{width: 100, height: 100}}
      source={{
        uri,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export default CustomImage;
