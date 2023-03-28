import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import React, { FC, useState } from 'react';

import { SpotifyAPI } from '../../../shared/public-api';

const FavoriteIconButton = styled(IconButton)(() => ({
  marginTop: '20px',
}));

export interface SpotifyFavoriteButtonProps {
  isLiked: boolean;
  trackId: string;
}

const SpotifyFavoriteButton: FC<SpotifyFavoriteButtonProps> = ({ isLiked, trackId }) => {
  const [currentLikeStatus, setCurrentLikeStatus] = useState(isLiked);

  const onAddToSavedTracksHandler = async () => {
    const response = await SpotifyAPI.core.addToMySavedTracks([trackId]);
    if (response) {
      setCurrentLikeStatus(true);
    }
  };

  const onRemoveFromSavedTracksHandler = async () => {
    const response = await SpotifyAPI.core.removeFromMySavedTracks([trackId]);
    if (response) {
      setCurrentLikeStatus(false);
    }
  };

  return (
    <FavoriteIconButton>
      {currentLikeStatus ? (
        <FavoriteRoundedIcon onClick={onRemoveFromSavedTracksHandler} color="success" />
      ) : (
        <FavoriteBorderRoundedIcon onClick={onAddToSavedTracksHandler} color="secondary" />
      )}
    </FavoriteIconButton>
  );
};

export default SpotifyFavoriteButton;
