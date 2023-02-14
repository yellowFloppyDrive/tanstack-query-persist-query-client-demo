import {
  createSyncStoragePersister
} from "@tanstack/query-sync-storage-persister";

const syncStoragePersister = createSyncStoragePersister({
  storage: localStorage
});

export default syncStoragePersister;