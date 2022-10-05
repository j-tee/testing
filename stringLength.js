function stringLength(str) {
    if(str.length < 1){
      throw'string cannot be null or empty';
    } else if ( str.length > 10){
      throw'string too long'
    }
    return str.length;
  }
  module.exports = stringLength;