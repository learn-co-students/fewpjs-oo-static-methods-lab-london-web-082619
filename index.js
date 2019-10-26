class Formatter {
  //add static methods here

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.substring(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-']+/g, '');

  }

  static titleize(string){
    const permittedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let stringArray = string.split(" ");
    
    stringArray.forEach(word => {
      if (permittedWords.find(word))  {
        word = word.charAt(0).toUpperCase() + word.substring(1);
      }
    })

    return stringArray.join(" ");

  }

}