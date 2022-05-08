{ parameter FROMDIR = $1
  { parameter TODIR = $2
    { for every .md file in FROMDIR/_posts => filename
      { strip date from front of filename => strippedFilename
	{ copy filename to TODIR/strippedFilename }
      }
    }
  }
}
