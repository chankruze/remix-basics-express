/*
Author: chankruze (chankruze@gmail.com)
Created: Tue Mar 29 2022 16:49:40 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import type { LoaderFunction } from "remix";
import { json, Link, useLoaderData } from "remix";
import type { Joke } from "@prisma/client";

import { db } from "~/utils/db.server";

type LoaderData = { joke: Joke };

export const loader: LoaderFunction = async ({ params }) => {
  const joke = await db.joke.findUnique({
    where: { id: params.jokeId },
  });
  if (!joke) throw new Error("Joke not found");
  const data: LoaderData = { joke };
  return json(data);
};

export default function JokeRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>{data.joke.content}</p>
      <Link to=".">{data.joke.name} Permalink</Link>
    </div>
  );
}
