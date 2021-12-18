# Extract substring between prefix and suffix

def getValueBetween(str, prefix, suffix = None):
  index = str.index(prefix)
  if index == -1:
    return ''

  resultStart = index + len(prefix)
  str = str[resultStart:]
  if suffix == None:
    return str

  index = str.index(suffix)
  if index == -1: 
    return ''
  str = str[0:index]
  return str


result = getValueBetween('Hello <username> and bye!', '<', '>')
print(result)
