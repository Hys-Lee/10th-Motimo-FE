"use client";

import { useEffect, useState } from "react";

export const MSWComponent = () => {
  const [mswReady, setMswReady] = useState(false);
  useEffect(() => {
    const init = async () => {
      const initMsw = await import("../../mocks/index").then(
        (res) => res.initMsw,
      );
      await initMsw();
      setMswReady(true);
    };

    if (!mswReady) {
      init();
    }
  }, [mswReady]);

  return null;
};
