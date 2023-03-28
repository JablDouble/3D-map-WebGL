import { useEffect, useState } from 'react';

import { SpotifyAPI } from '../../../../shared/public-api';

export default function useSpotifyDevices(accessToken: string | undefined) {
  const [devices, setDevices] = useState<SpotifyApi.UserDevice[]>();

  useEffect(() => {
    if (accessToken) {
      (async () => {
        const response = await SpotifyAPI.core.getMyDevices();
        setDevices(response.body.devices);
      })();
    }
  }, [accessToken]);

  return devices;
}
