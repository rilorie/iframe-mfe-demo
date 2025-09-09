import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
const MyMicroFrontend = React.lazy(() => import('content/Button'));

function ParentApp () {
  return (
    <div>
      <h1>Parent Application</h1>
    </div>
  );
};

export default ParentApp;
