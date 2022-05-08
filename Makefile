grammar=mvmd.ohm
prep=./prep/prep
identity-format=identity-mvmd.fmt
src=mvmd.das
here=`pwd`

all: identity

identity:
	${prep} "." '$$' ${grammar} ${identity-format} --stop=1 <${src}

