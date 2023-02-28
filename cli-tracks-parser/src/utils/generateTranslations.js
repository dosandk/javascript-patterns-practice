// TODO: move to separate CLI
import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from "url";
import {getDirs} from "./index.js";
import { exec } from 'child_process';

const __dirname = path.dirname(fileURLToPath(new URL(import.meta.url)));
const tracksPath = path.join(__dirname, '../../../tracks/patterns');
const tasksDirs = await getDirs(tracksPath);

const locales = ['uk', 'en', 'ru'];

const crateOrUpdatePOFiles = async () => {
  for (const task of tasksDirs) {
    console.error('task', task);

    const translationsPath = path.join(tracksPath, task, 'translations');

    for (const locale of locales) {
      console.error('locale', locale);

      try {
        await fs.access(path.join(translationsPath, `readme.${locale}.po`));

        console.error(`translation for ${locale} exists`);

        exec(`msgmerge -U ${translationsPath}/readme.${locale}.po ${translationsPath}/readme.pot`, error => {
          if (error) {
            console.log(`Error during "msgmerge": `, error);
          }
        });

        exec(`msgmerge -U ${translationsPath}/solution.${locale}.po ${translationsPath}/solution.pot`, error => {
          if (error) {
            console.log(`Error during "msgmerge": `, error);
          }
        });
      } catch {
        exec(`msginit --no-translator -l ${locale} -i ${translationsPath}/readme.pot -o ${translationsPath}/readme.${locale}.po`, error => {
          if (error) {
            console.log(`Error during "msginit": `, error);
          }
        });

        exec(`msginit --no-translator -l ${locale} -i ${translationsPath}/solution.pot -o ${translationsPath}/solution.${locale}.po`, error => {
          if (error) {
            console.log(`Error during "msginit": `, error);
          }
        });
      }
    }
  }
};

const generateTranslationFiles = async () => {
  for (const task of tasksDirs) {
    console.error('task', task);

    const translationsPath = path.join(tracksPath, task, 'translations');
    // const readmePath = path.join(tracksPath, task, 'readme.md');
    // const solutionReadmePath = path.join(tracksPath, task, 'solution/readme.md');

    for (const locale of locales) {
      try {
        await fs.access(translationsPath);
        await fs.access(path.join(translationsPath, `readme.${locale}.po`));
        await fs.access(path.join(translationsPath, `solution.${locale}.po`));

        exec(`po2txt -i ${translationsPath}/readme.${locale}.po -o ${translationsPath}/readme.${locale}.md`, error => {
          if (error) {
            console.log(`Error during "po2txt" command for "readme" files: `, error);
          }
        });

        exec(`po2txt -i ${translationsPath}/solution.${locale}.po -o ${translationsPath}/solution.${locale}.md`, error => {
          if (error) {
            console.log(`Error during "po2txt" command for "solution" files: `, error);
          }
        });
      } catch (error) {
        console.error('Cannot get access to the "po" files', error);
      }
    }
  }
};

const createOrUpdatePOTFiles = async () => {
  for (const task of tasksDirs) {
    console.error('task', task);

    const translationsPath = path.join(tracksPath, task, 'translations');
    const readmePath = path.join(tracksPath, task, 'readme.md');
    const solutionReadmePath = path.join(tracksPath, task, 'solution/readme.md');

    try {
      await fs.access(translationsPath);
      console.error('exists');
    } catch (error) {
      console.error('translation directory does not exist');

      await fs.mkdir(translationsPath);
    } finally {
      exec(`txt2po -P ${readmePath} ${translationsPath}/readme.pot`, error => {
        if (error) {
          console.log(error);
        }
      });

      exec(`txt2po -P ${solutionReadmePath} ${translationsPath}/solution.pot`, error => {
        if (error) {
          console.log(error);
        }
      });
    }
  }
};

const deleteFiles = async (fileName = '') => {
  for (const task of tasksDirs) {
    const translationsPath = path.join(tracksPath, task, 'translations');

    try {
      await fs.access(path.join(translationsPath, fileName));
      await fs.unlink(path.join(translationsPath, fileName));
      console.error('exists');
    } catch (error) {
      console.error('not exists');
    }
  }
};

const deleteTranslationDir = async () => {

  for (const task of tasksDirs) {
    const translationsPath = path.join(tracksPath, task, 'translations');

    try {
      await fs.rm(translationsPath, {recursive: true, force: true});
      console.error('successfully deleted');
    } catch (error) {
      console.error('Error during deleting translation directory', error);
    }
  }
};

// deleteTranslationDir();

// await createOrUpdatePOTFiles();
// await crateOrUpdatePOFiles();
// await generateTranslationFiles();
