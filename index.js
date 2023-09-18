const inquirer = require("inquirer");
const fs = require("fs")
const questions = require('./lib/QA')
const setShape = require('./lib/setShape')
let SVG = require('./examples/logo.svg')
const { colorKeywords } = require('./lib/colorKeywords')


function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(('logo.svg'), svg.render(), () => console.log('Generated logo.svg'));
}

function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            createLogo(response);
        })
        .catch(err => {
             console.log(err)
        });
}

init();