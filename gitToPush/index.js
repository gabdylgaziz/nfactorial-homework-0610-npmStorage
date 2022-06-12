#! /usr/bin/env node

const { program } = require('commander')

var exec = require('child_process').exec;

const welcome = () => {
    console.log("nFactorial Incubator 22' author Gabdylgaziz Zhagypar")
}

const gitPush = (name, username) => {
    exec('git add .');
    exec(`git commit -m "${name}"`);
    exec(`git push --${username}`)
}

program
    .command('welcome')
    .description('about this plug')
    .action(welcome)

program
    .command('gitToPush')
    .description('push to github')
    .argument("string", "pls put commit name")
    .argument("string", "your username")
    .action(gitPush)


program.parse();