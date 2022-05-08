exports.pythonify = function (s) {
    return s
	.replace ("<", "LT")
	.replace (">", "GT")
    ;
}

var indent = undefined;

exports.setIndent = function (n) { indent = n; }
exports.ind = function () { indent += 4; return ""; }
exports.outd = function () { indent -= 4; return ""; }

exports.lines = function (s) {
    var lines = s.split ('\n');
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
