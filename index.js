class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^ A-Za-z0-9-']+/g, '');
  }

  static titleize(string){
    const splitString = string.toLowerCase().split(" "); 
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []

    for(let i = 0; i < splitString.length; i++){
      if(i === 0){
        result.push(this.capitalize(splitString[0]));
      } else {
        if(exceptions.includes(splitString[i])){
          result.push(splitString[i]);
        } else {
          result.push(this.capitalize(splitString[i]));
        }
      }
    }
    return result.join(" ");
  }
}