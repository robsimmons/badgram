@{%

const mooLexer = require('moo').compile({
    space: { match:/[ \t\n]+/, lineBreaks: true },
    ident: {
        match: /[a-z][a-zA-Z0-9_]*/,
        keywords: { keyword: ['fn', 'tfn', 'match', 'ifz', 'forall', 'exists'] }
    },
    sig: 'SIG',
});

%}

@lexer mooLexer

Main    -> _ Tp0 _

Tp1     -> %ident
         | "(" _ Tp0 _ ")"

Tp0      -> Tp1

_       -> %space | null