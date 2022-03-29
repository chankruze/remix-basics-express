/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Mar 29 2022 16:35:56 GMT+0530 (India Standard Time)


Copyright (c) geekofia 2022 and beyond
*/

import { LinksFunction } from "remix";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl,
    },
  ];
};

export default function IndexRoute() {
  return <div>Root Route</div>;
}
