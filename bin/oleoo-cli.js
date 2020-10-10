#!/usr/bin/env node
'use strict'

const oleoo = require('oleoo')
const { program } = require('commander')

program.version(require('../package.json').version)

program
  .option('-m, --mode <mode>', 'choose between parse (default) or guess', 'parse')
  .option('-j, --json', 'print json output', false)
  .option('-d, --debug', 'print debug information', false)

const modes = {
  parse: oleoo.parse,
  guess: oleoo.guess
}

program
  .arguments('<name>')
  .action(name => {
    const release = modes[program.mode](name)

    if (program.json) {
      console.log(release)
    } else {
      console.log(release.generated)
    }
  })

program.parse(process.argv)

if (program.debug) console.log(program.opts())
