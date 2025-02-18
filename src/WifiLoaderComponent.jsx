// filepath: /d:/New folder/react/API anime/src/components/WifiLoaderComponent.jsx
import React from 'react';
import { WifiLoader } from 'react-awesome-loaders';

export const WifiLoaderComponent = () => {
  return (
    <>
      <WifiLoader
        background={"transparent"}
        desktopSize={"15px"}
        mobileSize={"15px"}
        backColor="#E8F2FC"
        frontColor="#4645F6"
      />
    </>
  );
};