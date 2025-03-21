export function passwordValidation(password) {
    const length = password.length;
    if (length > 7) return 'success';
    else if (length > 4) return 'warning';
    else if (length > 0) return 'error';
}


export function  generateDisplayname(numParagraphs, numWords) {
    var loremText = '';
    var words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'Ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'Duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 'pariatur', 'Excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum',         ];
  
    for (var i = 0; i < numParagraphs; i++) {
      var paragraph = '';
      for (var j = 0; j < numWords; j++) {
        var randomWord = words[Math.floor(Math.random() * words.length)];
        paragraph += randomWord + ' ';
      }
      loremText +=  paragraph ;
    }
    return loremText;
}

export function getRandomInt(min, max) {
    if(!max){
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function  generateUsername(length) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function generateLoremText(numParagraphs, numWords){
    var loremText = '';
    var words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'Ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'Duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 'pariatur', 'Excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum',         ];
  
    for (var i = 0; i < numParagraphs; i++) {
      var paragraph = '';
      for (var j = 0; j < numWords; j++) {
        var randomWord = words[Math.floor(Math.random() * words.length)];
        paragraph += randomWord + ' ';
      }
      loremText +=  paragraph ;
    }
    return loremText;
}

export function generateString(length){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result.trim();
}

export function getRandTime(){
  
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  let dice = getRndInteger(1,12);

  if(dice <= 1){
      return '1s'
  }else if(dice <= 7){
      return '1m'
  }else if(dice <= 9){
      return '1h'
  }else if(dice <= 11){
      return '1d'
  }else{
      return '1y'
  }
}

export function buildParams(search){
    if (!search) return "";
  
    const params = new URLSearchParams();
  
    Object.entries(search).forEach(([key, value]) => {
      if (Array.isArray(value)) params.append(key, value.join(",,,"));
      else params.append(key, encodeURIComponent(value.toString()));
    });
  
    return `?${params}`;
}