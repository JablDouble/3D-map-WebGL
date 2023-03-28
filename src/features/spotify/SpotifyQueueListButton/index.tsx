import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import { IconButton } from '@mui/material';
import React, { FC, useState } from 'react';

import { QueueDialog } from '../../../entities/public-api';

interface SpotifyQueueListButtonProps {
  actionComponent: React.FunctionComponent<{}>;
}

const SpotifyQueueListButton: FC<SpotifyQueueListButtonProps> = ({ actionComponent }) => {
  const [isOpenQueueDialog, setOpenQueueDialog] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpenQueueDialog((state) => !state)}>
        <QueueMusicIcon color="secondary" fontSize="large" />
      </IconButton>
      <QueueDialog
        isOpen={isOpenQueueDialog}
        setOpen={setOpenQueueDialog}
        actionComponent={actionComponent}
      />
    </>
  );
};

export default SpotifyQueueListButton;
