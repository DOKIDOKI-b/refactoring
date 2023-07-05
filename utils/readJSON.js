import fs from "fs";
import { resolve } from "path";

const currentDirPath = resolve();

export const readJSON = (path) =>
  JSON.parse(fs.readFileSync(resolve(currentDirPath, path), "utf-8"));
