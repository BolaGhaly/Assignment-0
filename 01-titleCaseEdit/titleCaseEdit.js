function titleCaseEdit(title) {
  var capitalizeString = title.toLowerCase().split(" ");
  for (var i = 0; i < capitalizeString.length; i++) {
    capitalizeString[i] =
      capitalizeString[i].charAt(0).toUpperCase() + capitalizeString[i].substring(1);
  }
  return capitalizeString.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;