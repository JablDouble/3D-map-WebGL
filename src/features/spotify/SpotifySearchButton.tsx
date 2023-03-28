import SearchIcon from '@mui/icons-material/Search';
import { IconButton, styled } from '@mui/material';
import React, { FC } from 'react';

const SearchIconButton = styled(IconButton)(() => ({
  position: 'absolute',
  right: 60,
  top: 15,
  fontSize: 30,
  cursor: 'pointer',
}));

interface SpotifySearchButtonProps {}

const SpotifySearchButton: FC<SpotifySearchButtonProps> = () => {
  return (
    <SearchIconButton>
      <SearchIcon color="secondary" />
    </SearchIconButton>
  );
};

export default SpotifySearchButton;
