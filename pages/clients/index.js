import React from 'react';
import Link from 'next/link';

function ClientsPage() {
  const clients = [
    {
      id: 'max',
      name: 'Maximilian',
    },
    {
      id: 'manu',
      name: 'Manuel',
    },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link
                href={{
                  pathname: '/clients/[id]',
                  query: {
                    id: id,
                  },
                }}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientsPage;
