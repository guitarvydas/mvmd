exports.pythonify = function (s) {
    return s
	.replace ("<", "LT")
	.replace (">", "GT")
    ;
}

var indent = undefined;

exports.setIndent = function (n) { indext = n; }
exports.ind = function () { indent  += 4; return ""; }
exports.outd = function () { indent  -= 4; return ""; }

exports.lines = function (s) {
    console.log ('b lines...');
    console.log (s);
    console.log ('e lines...');
    var lines = s.split ('\n');
    console.log (lines);
    var indentedLines = ""
    lines.forEach (line => {
	indentedLines += spaces () + line + '\n';
    });
    return indentedLines;
}

function spaces () {
    var s = "";
    var n = indent;
    while (n > 0) {
	s += " ";
	n -= 1;
    }
    return s;
}
