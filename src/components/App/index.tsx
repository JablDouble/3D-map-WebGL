import React, { useState } from 'react';
import * as Sentry from '@sentry/react';

function App() {
  const [value, setValue] = useState('App works!');

  return (
    <div>
      <p>{value}</p>
      <button type="button" onClick={() => setValue('App changed!')}>
        Change title
      </button>
    </div>
  );
}

export default Sentry.withProfiler(App);
