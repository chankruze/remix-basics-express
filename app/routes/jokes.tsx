/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Mar 29 2022 16:42:18 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { Outlet } from "remix";

export default function JokesRoute() {
  return (
    <div>
      <h1>J🤪KES</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
