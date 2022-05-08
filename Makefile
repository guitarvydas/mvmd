grammar=mvmd.ohm
prep=./prep/prep
identity-format=identity-mvmd.fmt
format=mvmd.fmt
src=mvmd.das
here=`pwd`

script: grokAndReformat

all: identity grokAndReformat

identity:
	${prep} "." '$$' ${grammar} ${identity-format} --stop=1 <${src}

grokAndReformat:
	${prep} "." '$$' ${grammar} ${format} --stop=1 <${src}

