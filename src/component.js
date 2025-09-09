import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

function ParentApp () {
  return (
    <div>
      <h1>Parent Application</h1>
      <iframe src="http://localhost:9000" width="100%" height="500px"></iframe>
    </div>
  );
};

export default ParentApp;
