const removeFirstSymbol = (str: string): string => {
  return str.slice(1, str.length)
}

const ucFirst = (str: string): string => {
  if (!str) return str

  return str.replace('-', ' ')[0].toUpperCase() + str.slice(1)
}

const transformLinkToLabel = (link: string): string => {
  return ucFirst(removeFirstSymbol(link))
}

export default transformLinkToLabel
