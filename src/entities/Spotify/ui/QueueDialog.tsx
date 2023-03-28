import { Box, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

import { SpotifyAPI } from '../../../shared/public-api';
import { Queue, QueueSongCard, SpotifyQueue } from '../../public-api';

interface QueueDialogProps {
  isOpen: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
  actionComponent: React.FunctionComponent<{ isLiked: boolean }>;
}

const QueueDialog: FC<QueueDialogProps> = ({
  isOpen,
  setOpen,
  actionComponent: ActionComponent,
}) => {
  const [queueList, setQueueList] = useState<SpotifyQueue>();

  useEffect(() => {
    if (isOpen) {
      (async () => {
        const queue: SpotifyQueue = await SpotifyAPI.getCurrentQueue();
        setQueueList(queue);
      })();
    }
  }, [isOpen]);

  return (
    <Dialog
      open={isOpen}
      onClick={() => setOpen(false)}
      aria-describedby="alert-dialog-slide-description"
    >
      <Box>
        <DialogTitle>Queue</DialogTitle>
        <DialogContent sx={{ padding: '40px' }}>
          <Box mb={2}>
            <Typography variant="h5" color="secondary" mb={1}>
              Plays right now
            </Typography>
            {queueList?.currently_playing && (
              <QueueSongCard
                track={queueList.currently_playing as Queue}
                renderAction={(isLiked) => <ActionComponent isLiked={isLiked} />}
              />
            )}
          </Box>
          <Box>
            <Typography variant="h5" color="secondary" mb={1}>
              Next in the playlist
            </Typography>

            {queueList?.queue.map((track) => (
              <QueueSongCard
                track={track}
                key={track.id}
                renderAction={(isLiked) => <ActionComponent isLiked={isLiked} />}
              />
            ))}
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default QueueDialog;
