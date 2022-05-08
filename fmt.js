exports.pythonify = function (s) {
    return s
	.replace ("<", "lt_")
	.replace (">", "gt_")
    ;
}
