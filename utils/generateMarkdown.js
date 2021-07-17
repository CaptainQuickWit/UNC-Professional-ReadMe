// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(licenseObj) {
  var licenseBadge = licenseObj.license;
  
  if (licenseBadge === null || licenseBadge === "" || licenseBadge === "NA" || licenseBadge === "N/A") {
    return "";
  }
  
  return licenseBadge;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseObj) {
  var licenseLink = licenseObj.license;
  if (licenseLink === null || licenseLink === "" || licenseLink === "NA" || licenseLink === "N/A") {
    return "";
  }

  if (licenseLink === "MIT") {
    licenseLink = `![License](https://img.shields.io/badge/License-MIT-yellow.svg)
    https://opensource.org/licenses/MIT`
  };
  if (licenseLink === "Apache") {
    licenseLink = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
    https://opensource.org/licenses/Apache-2.0`
  };
  if (licenseLink === "GNU General Public License 3.0") {
    licenseLink = `![License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)
    
    http://www.gnu.org/licenses/gpl-3.0`
  };
  if (licenseLink === "GNU General Public License 2.0") {
    licenseLink = `![License-GNU Public](https://img.shields.io/badge/License-GPL%20v2-blue.svg)
    
    https://img.shields.io/badge/License-GPL%20v2-blue.svg`
  };

  return licenseLink;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseObj) {
  var badge = licenseObj.license;
  if (badge === null || badge === "" || badge === "NA" || badge === "N/A") {
    return "";
  } else {

    return {license: licenseObj.license, 
      licenseLink: licenseObj.licenseLink,

    };
  }



}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.info}
  ## Installation
  ${data.install}
  ## Removal
  ${data.delete}
  ## Version
  ${data.version}
  ## License
  ${data.license}
  ## Authors
  ${data.authors}
  ## Test Cases
  ${data.test} 
  ## Username
  ${data.username} 
  ## Contact Info
  ${data.contact} 
`;
}

module.exports = generateMarkdown;
