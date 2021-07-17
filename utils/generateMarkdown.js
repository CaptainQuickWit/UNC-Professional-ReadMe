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
