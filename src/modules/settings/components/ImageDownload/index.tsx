import React from 'react';

import { InputBase, TextField } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';


import Dropzone from '~/components/Dropzone';

interface Props {
  className?: string;
}

const ImageDownload: React.FC<Props> = ({ className }) => {
  return (
    <>
      <Tabs value={0} aria-label="Select image">
        <Tab label="По ссылке" />
        <Tab label="С компьютера" />
      </Tabs>
      <div>
        {/* <TextField fullWidth label="Ссылка на изображение" />

        <TextField fullWidth label="Открыть" type="file" /> */}
        <Dropzone/>
      </div>
    </>
  );
};

export default ImageDownload;
