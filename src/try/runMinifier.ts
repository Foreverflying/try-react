import { Minifier } from './Minifier'

const minifier = new Minifier(`${__dirname}/../../src/try`, `${__dirname}/../../min/try`, ['runMinifier.ts'])
// const minifier = new Minifier(`${__dirname}/../../src/try`, `${__dirname}/../../minified/try`, ['try.ts'])
minifier.compileProject()
