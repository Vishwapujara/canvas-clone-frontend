"use client";

import React, { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
// Use a relative import to the store file in the same directory
import { makeStore, AppStore } from "./store";

/**
 * Client-only Providers wrapper.
 */
export default function Providers({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}