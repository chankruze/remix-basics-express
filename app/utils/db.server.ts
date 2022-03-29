/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Mar 29 2022 21:23:44 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

declare global {
  var __db: PrismaClient | undefined;
}

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
} else {
  if (!global.__db) {
    global.__db = new PrismaClient();
  }
  db = global.__db;
}

export { db };
