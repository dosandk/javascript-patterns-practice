const getIndexTemplate = taskName => `
export
`;

const getIndexSpecTemplate = (trackName, taskName) => `
import {} from './solution/index.js';

describe('${trackName.toLowerCase()}/${taskName}', () => {
  it('should be defined', () => {
    expect(${taskName}).toBeDefined();
  });

  // [your tests here]
});
`;

const getSolutionTemplate = (taskName) => `
export
`;

const getReadmeTemplate = taskName => `
# ${taskName}

`;

const getIndexSpecHtmlTemplate = () => {
  const jasmineVersion = '4.0.1';
  const cdnPath = 'https://cdnjs.cloudflare.com/ajax/libs/jasmine';

  return `
<!DOCTYPE html>
<link rel="stylesheet" href="${cdnPath}/${jasmineVersion}/jasmine.css" />

<script src="${cdnPath}/${jasmineVersion}/jasmine.js"></script>
<script src="${cdnPath}/${jasmineVersion}/jasmine-html.js"></script>
<script src="${cdnPath}/${jasmineVersion}/boot0.js"></script>
<script src="${cdnPath}/${jasmineVersion}/boot1.js"></script>

<script type="module" src='index.spec.js'></script>
`;
};

const getReadmeSolutionTemplate = taskName => `
# ${taskName} solution


\`\`\`js

\`\`\`
`;

const getTaskTemplates = (taskPath, trackName, taskName) => {
  return {
    [`${taskPath}/index.js`]: getIndexTemplate(taskName).trim(),
    [`${taskPath}/index.spec.js`]: getIndexSpecTemplate(trackName, taskName).trim(),
    [`${taskPath}/readme.md`]: getReadmeTemplate(taskName).trim(),
    [`${taskPath}/index.spec.html`]: getIndexSpecHtmlTemplate().trim(),
    [`${taskPath}/solution/index.js`]: getSolutionTemplate(taskName).trim(),
    [`${taskPath}/solution/readme.md`]: getReadmeSolutionTemplate(taskName).trim(),
  };
};

module.exports = getTaskTemplates;
