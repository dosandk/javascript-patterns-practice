import path from "path";

const __dirname = path.dirname(fileURLToPath(new URL(import.meta.url)));

import {getDirs, readFilesFromDir} from "./index.js";
import {fileURLToPath} from "url";
const tracksPath = path.join(__dirname, '../../../', 'tracks');
const tracksDirs = await getDirs(tracksPath);
const tasksDirs = await getDirs(path.join(tracksPath, tracksDirs.at(0)));

console.error('tracksDirs', tracksDirs);
console.error('tasksDirs', tasksDirs);

const filesPath = path.join(tracksPath, tracksDirs.at(0), tasksDirs.at(0));

console.error('filesPath', filesPath);

const filesContent = await readFilesFromDir(filesPath);

console.error('filesContent', filesContent);
