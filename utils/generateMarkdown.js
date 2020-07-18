// function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title} ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#Installation)
* [Tests](#Tests)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Questions](#Questions)

## Installation

To install project dependencies run: 

\`\`\`
${data.installation}
\`\`\`

## Tests

To run tests run: 

\`\`\`
${data.tests}
\`\`\`

## Usage

${data.usage}

## License

${explainLicense(data.license)}

## Contributing

${data.contributing}

## Questions
Feel free to email me at ${data.email} with any questions.

Check out my GitHub profile: [${data.github}](https://www.github.com/${data.github})
`;
}

function renderLicenseBadge(license) {
    if (license === 'APACHE 2.0' || license === 'GPL 3.0' || license === 'BSD 3') {
        let licenseSplit = license.split(' ');
        return `![githublicense](https://img.shields.io/badge/license-${licenseSplit[0]}%20${licenseSplit[1]}-blue.svg)`;
    }
    if (license === 'MIT') {
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
  