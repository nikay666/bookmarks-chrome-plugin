import React from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

interface Props {
  className?: string;
}

const ImageDownload: React.FC<Props> = ({ className }) => {
  return (
    <>
      <Tabs value={0} aria-label="Select image">
        <Tab label="Item One" />
        <Tab label="Item Two" />
      </Tabs>
      <div>Item One</div>
    </>
  );
};

export default ImageDownload;
