import React from 'react';
import './App.css';
import Users from "./components/Users";
import {PersistQueryClientProvider} from "@tanstack/react-query-persist-client";
import queryClient from "./query/queryClient";
import syncStoragePersister from "./query/syncStoragePersister";

function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister: syncStoragePersister,
        buster: "blabla",
      }}
      onSuccess={() => queryClient.resumePausedMutations()}
    >
      <Users/>
    </PersistQueryClientProvider>
  );
}

export default App;
