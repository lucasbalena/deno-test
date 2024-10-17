#!/usr/bin/env deno --allow-read --allow-env

import hello from "./hello.ts";
import "jsr:@std/dotenv/load";

hello(
  Deno.env.get(
    "NAME",
  ) || "Lucas",
);
