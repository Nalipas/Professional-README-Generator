function renderLicenseLink(data) {
  let license = `${data.license}`;
  let licenseLink = '';
  if (license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  };
  if (license === 'APACHE 2.0') {
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  };
  if (license === 'GPL 3.0') {
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
  };
  if (license === 'BSD 3') {
    licenseLink = 'https://choosealicense.com/licenses/bsd-3-clause/';
  };
  if (license === 'None') {
    licenseLink = 'https://choosealicense.com/no-permission/';
  };
  return licenseLink;
}

function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

* Installation(#installation)
* Usage(#usage)
* License(#license)
* Contributing(#contributing)
* Tests(#tests)
* Questions(#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseLink(data.license)}
![licenseBadge](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Contributing

${data.contribution}

## Tests

${data.test}

## Questions

If you have any questions, please feel free to reach out!

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}

`;
}

module.exports = generateMarkdown;
