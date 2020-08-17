//
const inquirer = require("inquirer");
const fs = require("fs");

// Readme Template w/ badge

function generator(answers) {
	return `

![Github License](https://img.shields.io/badge/License-${answers.license}-red)

# ${answers.title}

${answers.description}

### Table of Contents
${answers.toc}

### Installation
${answers.installation}

### Usage
${answers.usage}

### Contributing
${answers.contributing}

### Tests
${answers.test}

#### Contact me
![${answers.githubUserName}](${answers.githubProfilePicture})
${answers.githubUserName}
Email me: [${answers.email}](mailto:${answers.email})

    `;
}

// Call inquirer to prompot questions

inquirer
	.prompt([
		{
			type: "input",
			name: "title",
			message: "What is your project title name?",
		},
		{
			type: "input",
			name: "description",
			message: "What is your project description?",
		},
		{
			type: "input",
			name: "toc",
			message: "What are you table of content?",
		},
		{
			type: "input",
			name: "installation",
			message: "What is your project installation?",
		},
		{
			type: "input",
			name: "usage",
			message: "What is your project usage?",
		},
		{
			type: "input",
			name: "license",
			message: "What is your project license?",
		},
		{
			type: "input",
			name: "contributing",
			message: "Who contributing?",
		},
		{
			type: "input",
			name: "test",
			message: "What is your project test?",
		},
		{
			type: "input",
			name: "githubUserName",
			message: "What is your github user name?",
		},
		{
			type: "input",
			name: "githubProfilePicture",
			message: "What is the link of your profile picture?",
		},
		{
			type: "input",
			name: "email",
			message: "What is your email?",
		},
	])
	.then((answers) => {
		console.log(answers);

		// fs write creates a README file in readme folder
		//1. where: readme/README.md
		//2. what: call function generator and pass users answers init
		//3. error check

		fs.writeFile("readme/README.md", generator(answers), (err) => {
			if (err) throw err;
			console.log("Your new file saved in the readme folder.");
		});
	})
	.catch((err) => {
		if (err) throw err;
	});
