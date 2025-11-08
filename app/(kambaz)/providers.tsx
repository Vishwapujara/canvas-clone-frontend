"use client";

import React, { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./store";
import type { AppStore } from "./store";

/**
 * Client-only Providers wrapper.
 * - Creates the Redux store on the client once and reuses it via useRef.
 * - Avoids any server-side evaluation of the runtime store.
 */
export default function Providers({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}