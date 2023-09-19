const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shape');
const { Circle, Triangle, Square } = require('./lib/shape');

const promptUser = async () => {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (color keyword or hexadecimal number):',
    },
  ]);


  let shape;
  if (userInput.shapeType === 'circle') {
    shape = new Circle();
  } else if (userInput.shapeType === 'triangle') {
    shape = new Triangle();
  } else if (userInput.shapeType === 'square') {
    shape = new Square();
  }

  shape.text = userInput.text;
  shape.textColor = userInput.textColor;
  shape.shapeColor = userInput.shapeColor;

  const svgContent = shape.render();
  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
};

promptUser();