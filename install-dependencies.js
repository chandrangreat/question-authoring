#!/usr/bin/env node
const request = require('request');
const { exec } = require('child_process');

request('https://morning-peak-73646.herokuapp.com/players/repo', (error, response, dependencies) => {
  const bowerDependencies = JSON.parse(dependencies).join(' ');
  exec(`bower install ${bowerDependencies} --save`, (err, stdout, stderr) => {
    console.log(`${stdout}`);
    console.log(`${stderr}`);
  });  
});