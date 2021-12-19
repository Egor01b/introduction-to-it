
# Extract substring between prefix and suffix

def get_value_after(str, prefix):
  prefix_start = str.find(prefix)
  if prefix_start == -1:
    return ''
  resultStart = prefix_start + len(prefix)
  return str[resultStart:]


def get_value_before(str, suffix):
  suffix_start = str.find(suffix)
  if suffix_start == -1:
    return ''
  return str[0:suffix_start]


def get_value_between(str, prefix, suffix = None):  
  str = get_value_after(str, prefix)
  if suffix == None:
    return str
  str = get_value_before(str, suffix)
  return str

result = get_value_between('Hello <username> and bye!', '<', '>')
print(result)

