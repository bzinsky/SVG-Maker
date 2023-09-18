const colorKeywords = require(`./colorKeywords`);

const questions = [
    
    {
        name: 'shapeType',
        message: 'What is the shape of your logo?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle']
    },
    
    {
        name: 'ShapeColorChoice',
        message: 'What color would you like your logo? First choose a format:',
        type: 'list',
        choices: ["Keyword", "HEX"]
    },
    
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color keyword",
        when: (answers) => {
            if (answers.textColorChoice === 'keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                    return true;
                }
            }
            return console.log("\n Please enter a valid color keyword")
        }
    },
   
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape hexadecimal number (#CCCCCC)",
        when: (answers) => {
            if (answers.shapeColorChoice === 'HEX') {
                return true;
            }
            return false;
        },
    },

    {
        name: 'text',
        message: 'What is the text? (three character maximum)',
        type: 'input',
        validate: 
        (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text must be three characters or less! Please try again");
            }
            return true;
        }
    },

    {
        name: 'textColorChoice',
        message: 'What is the color of the text? Choose a color format: ',
        type: 'list',
        choices: ['keyword', 'HEX']
    },

    {
        type: "input",
        name: "textColor",
        message: "Enter the text color keyword",
        when: (answers) => {
            if (answers.textColorChoice === 'keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                    return true;
                }
            }
            return console.log("\n Please enter a valid color keyword")
        }
    },

    {
        type: "input",
        name: "textColor",
        message: "Enter the text hexadecimal number (#CCCCCC)",
        when: (answers) => {
            if (answers.textColorChoice === 'HEX') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },
];

module.exports = questions