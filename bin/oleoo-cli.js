#!/usr/bin/env node
'use strict'

const oleoo = require('oleoo')
const { program } = require('commander')

program.version(require('../package.json').version)

program
  .option('-g, --guess', 'guess the release name instead of parsing', false)
  .option('-j, --json', 'print json output', false)
  .option('-d, --debug', 'print debug information', false)

const mode = program.guess ? 'guess' : 'parse'

program
  .arguments('<name>')
  .action(name => {
    const release = oleoo[mode](name)

    if (program.json) {
      console.log(release)
    } else {
      console.log(release.generated)
    }
  })

program.parse(process.argv)

if (program.debug) console.log(program.opts())
