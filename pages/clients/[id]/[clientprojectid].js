import React from 'react';
import { useRouter } from 'next/router';

function SelectedProjectClientPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Selected Project Client Page</h1>
    </div>
  );
}

export default SelectedProjectClientPage;
