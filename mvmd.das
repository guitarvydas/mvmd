{ for every .md file in <fromdir>/_posts => filename
  { strip date from front of filename => strippedFilename
    {
      copy filename to <todir>/strippedFilename
    }
  }
}
