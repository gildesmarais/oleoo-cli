# oleoo-cli

This is a command line interface for [oleoo](https://github.com/thcolin/oleoo). *oleoo* parses scene release names and returns objects with title, tags and flags, etc.

`oleoo-cli` takes a release name and parses or guesses it to a proper scene release name. It can optionally print the full JSON directly to STDOUT.

## Usage

I recommend using [npx](https://github.com/npm/npx) to run oleoo-cli directly.

When called without arguments, oleoo-cli parses the input and returns the generated release name:

```
$ npx gildesmarais/oleoo-cli 'Arrow.S03E01.FASTSUB.VOSTFR.HDTV.x264-ADDiCTiON'
Arrow.S03E01.VOSTFR.HDTV.x264.FASTSUB-ADDiCTiON
```

You can also let oleoo *guess*:

```
$ npx gildesmarais/oleoo-cli --guess 'Bataille a Seattle BDRip'
Bataille.A.Seattle.BDRip-NOTEAM
```

Or print the full JSON:

```
$ npx gildesmarais/oleoo-cli --json 'Arrow.S03E01.FASTSUB.VOSTFR.HDTV.x264-ADDiCTiON'
{
  original: 'Arrow.S03E01.FASTSUB.VOSTFR.HDTV.x264-ADDiCTiON',
  language: 'VOSTFR',
  source: 'HDTV',
  encoding: 'x264',
  resolution: null,
  dub: null,
  year: null,
  flags: [ 'FASTSUB' ],
  season: 3,
  episode: 1,
  episodes: [ 1 ],
  type: 'tvshow',
  group: 'ADDiCTiON',
  title: 'Arrow',
  generated: 'Arrow.S03E01.VOSTFR.HDTV.x264.FASTSUB-ADDiCTiON',
  score: 5
}
```

`npx gildesmarais/oleoo-cli --help` lists all available options:

```
$ npx gildesmarais/oleoo-cli --help
Usage: oleoo-cli [options] <name>

Options:
  -V, --version  output the version number
  -g, --guess    choose between parse (default) or guess
  -j, --json     print json output (default: false)
  -d, --debug    print debug information (default: false)
  -h, --help     display help for command
```
