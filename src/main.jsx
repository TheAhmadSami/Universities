import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import App from "./App.jsx";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 0 },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistQueryClientProvider>
  </BrowserRouter>
);
