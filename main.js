const moo = require('moo');
const nearley = require('nearley');

const grammar = nearley.Grammar.fromCompiled(require('./grammar'));

const mooLexer = moo.compile({
    space: { match:/[ \t\n]+/, lineBreaks: true },
    ident: {
        match: /[a-z][a-zA-Z0-9_]*/,
        keywords: { keyword: ['fn', 'tfn', 'match', 'ifz', 'forall', 'exists'] }
    },
    sig: 'SIG',
});

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
console.log('done');
