import fs from 'fs/promises';
import path from 'path';

import { TrackModel } from '../models/track.model.js';
import { TaskModel } from '../models/task.model.js';

const TASK_FIELDS_BY_FILES_NAMES = {
  'index.js': 'index',
  'index.spec.js': 'spec',
  'readme.md': 'readme',
  'solution/index.js': 'solution',
  'solution/readme.md': 'solutionReadme'
};

export const getDirs = async (dirPath = '') => {
  const list = await fs.readdir(dirPath);
  const dirs = [];

  for (const listItem of list) {
    const itemPath = path.join(dirPath, listItem);
    const stats = await fs.stat(itemPath);

    if (stats.isDirectory()) {
      dirs.push(listItem);
    }
  }

  return dirs;
};

const getTranslation = async (itemPath) => {
  const filesContent = {
    readme: {},
    solutionReadme: {}
  };

  if (/solution\.(?:.+)\.md/.test(itemPath)) {
    const locale = itemPath.match(/solution\.(.+)\.md/)[1];

    filesContent.solutionReadme[locale] = await fs.readFile(itemPath, 'utf-8');
  }

  if (/readme\.(?:.+)\.md/.test(itemPath)) {
    const locale = itemPath.match(/readme\.(.+)\.md/)[1];

    filesContent.readme[locale] = await fs.readFile(itemPath, 'utf-8');
  }

  return filesContent;
};

// TODO: add reading according translation
export const readFilesFromDir = async dirPath => {
  const list = await fs.readdir(dirPath);
  const filesContent = {};
  const contentTranslations = {
    readme: {},
    solutionReadme: {}
  };

  const doStep = async (filesList, dirName) => {
    if (!filesList.length) return;

    for (const item of filesList) {
      // NOTE: skip hidden directories and files with '_' prefix
      if (item.startsWith('_')) continue;

      const paths = dirName ? [dirPath, dirName, item] : [dirPath, item];
      const itemPath = path.join(...paths);
      const stats = await fs.stat(itemPath);

      if (stats.isDirectory()) {
        const dirList = await fs.readdir(itemPath);

        await doStep(dirList, item);
      } else {
        const key = TASK_FIELDS_BY_FILES_NAMES[dirName ? `${dirName}/${item}` : item];

        if (key) {
          filesContent[key] = await fs.readFile(itemPath, 'utf-8');
        }

        // NOTE: get translations
        const translations = await getTranslation(itemPath);

        if (translations.readme) {
          Object.assign(contentTranslations.readme, translations.readme);
        }
        if (translations.solutionReadme) {
          Object.assign(contentTranslations.solutionReadme, translations.solutionReadme);
        }
      }
    }
  };

  await doStep(list);

  filesContent.translations = contentTranslations;
  filesContent.languages = Object.keys(contentTranslations.readme);

  return filesContent;
};

export const createOrUpdateTask = async taskData => {
  const updatedTask = await TaskModel.findOneAndUpdate({ taskId: taskData.taskId }, taskData);

  if (updatedTask) {
    return updatedTask;
  }

  const task = new TaskModel({ ...taskData });

  return await task.save();
};

export const createOrUpdateTrack = async trackData => {
  const updatedTrack = await TrackModel.findOneAndUpdate({ trackId: trackData.trackId }, trackData);

  if (updatedTrack) {
    return updatedTrack;
  }

  const track = new TrackModel({ ...trackData });

  return await track.save();
};
