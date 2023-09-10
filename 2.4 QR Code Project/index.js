/* 
1. Use the inquirer npm package to get user input.
2. Use the npm i qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'node:fs';
import { Buffer } from 'node:buffer';



const questions = [
  {
    type: 'input',
    name: 'link',
    message: "Enter your website link",
  },

];
  
  inquirer.prompt(questions).then((answers) => {
  const data = new Uint8Array(Buffer.from(answers.link));
fs.writeFile('input.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
  var image = qr.image(answers.link, {type: 'png'});
  image.pipe(fs.createWriteStream('qr.png'));
  console.log("qr code has been created!");
}); 
  });



// fs.writeFile('input.txt', 'Hello Node.js', (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });
