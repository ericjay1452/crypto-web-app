import { configureStore } from "@reduxjs/toolkit";
import {FetchedCryptoApi} from "../Api/CryptoApi"
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer : {
      [FetchedCryptoApi.reducerPath] : FetchedCryptoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(FetchedCryptoApi.middleware),
})

// setupListeners for Handling autorefresh and mounting of data
setupListeners(store.dispatch)