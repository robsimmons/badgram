const moo = require('moo');
const nearley = require('nearley');

const grammar = nearley.Grammar.fromCompiled(require('./grammar'));

function parser(text) {
    const nearleyParser = new nearley.Parser(grammar);
    nearleyParser.feed(text);
    return nearleyParser.results;
}

try { console.log(parser("INT")); } catch(_) { console.log('Fail (correct)'); }
try { console.log(parser("SIG")); } catch(_) { console.log('Fail (correct)'); }
try { console.log(parser("tfn")); } catch(_) { console.log('Fail (correct)'); }
console.log(parser(''));
console.log(parser('a'));
console.log(parser('(((a)))'));
console.log('done');
