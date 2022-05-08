    mdfiles = glob.glob (f'{posts}/*.md')
    for filename in mdfiles:
        fname1 = os.path.basename (filename)
        match = re.match (r'(^[0-9-]+)(.*)', fname1)
        if match:
            strippedFilename = f'{todir}/{match.group (2)}'
            shutil.copy (filename, strippedFilename)
        else:
            print (f'--{fname1}')
