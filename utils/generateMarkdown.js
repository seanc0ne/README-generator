// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ## Description
    ${data.description}
    ## Table of Contents
    [Questions](#Questions)
    [Installation](#Installation)
    [Usage](#Usage)
    [License](#License)
    [Contributing](#Contributing)
    [Tests](#Tests)
    ## Questions
        Feel free to email me at ${data.email} with any questions.
        [${data.github}](https://www.github.com/${data.github})
    ## Installation
        ${data.installation}
    ## Usage
        ${data.usage}
    ## License 
        ${explainLicense(data.license)}
    ## Contributing
        ${data.contributing}
    ## Tests
        ${data.tests}
  `;
  }

function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![githublicense](https://img.shields.io/badge/license-${license}-blue.svg)`;
    } else {
        return '';
    }
}

function explainLicense(license) {
    if (license !== 'None') {
        return `This application is covered under the ${license} license.`;
    } else {
        return '';
    }
}
  
  module.exports = generateMarkdown;
  