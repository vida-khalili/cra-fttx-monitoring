import createCache from "@emotion/cache";
import React, { PropsWithChildren } from "react";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";

const head = document.querySelector("head");

// <meta name="emotion-insertion-point" content="">
const emotionInsertionPoint = document.createElement("meta");
emotionInsertionPoint.setAttribute("name", "emotion-insertion-point");
emotionInsertionPoint.setAttribute("content", "");

head?.appendChild(emotionInsertionPoint);

const cacheRtl = createCache({
  key: "fttx",
  speedy: true,
  insertionPoint: emotionInsertionPoint,
  stylisPlugins: [rtlPlugin],
});

const RTL = (props: PropsWithChildren) => (
  <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>
);

export default RTL;
