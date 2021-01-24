export function updateURLParameter(url, paramKey, paramVal) {
  var TheAnchor = null
  var newAdditionalURL = ''
  var tempArray = url.split('?')
  var baseURL = tempArray[0]
  var additionalURL = tempArray[1]
  var temp = ''

  if (additionalURL) {
    var tmpAnchor = additionalURL.split('#')
    var TheParams = tmpAnchor[0]
    TheAnchor = tmpAnchor[1]
    if (TheAnchor) additionalURL = TheParams

    tempArray = additionalURL.split('&')

    for (var i = 0; i < tempArray.length; i++) {
      if (tempArray[i].split('=')[0] !== paramKey) {
        newAdditionalURL += temp + tempArray[i]
        temp = '&'
      }
    }
  } else {
    var tmpAnchor = baseURL.split('#')
    var TheParams = tmpAnchor[0]
    TheAnchor = tmpAnchor[1]

    if (TheParams) baseURL = TheParams
  }

  if (TheAnchor) paramVal += '#' + TheAnchor

  var rows_txt = temp + '' + paramKey + '=' + paramVal
  return baseURL + '?' + newAdditionalURL + rows_txt
}
