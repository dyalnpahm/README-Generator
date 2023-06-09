const fs= require ('fs')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return '';
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}
  


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://mit-license.org/'
  }

if (license === 'GNU'){
  return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license){
    return '';
  } else {
    return ` ## Licenses
    This project is covered under the ${license} license. To learn more click the license button at the top.`

  }
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Questions](#questions)
  * [Credits](#credits)
  
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  
  ## Questions
  Have questions about this project?  
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}
  ## Credits
  ${data.credits}


`;
}

module.exports = generateMarkdown;
