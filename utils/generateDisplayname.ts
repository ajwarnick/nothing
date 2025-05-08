export function  generateDisplayname(numParagraphs:number, numWords:number):string {
    let loremText:string = '';
    let words:Array<string> = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'Ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'Duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 'pariatur', 'Excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum',         ];
  
    for (var i = 0; i < numParagraphs; i++) {
      let paragraph:string = '';
      for (var j = 0; j < numWords; j++) {
        let randomWord:string = words[Math.floor(Math.random() * words.length)];
        paragraph += randomWord + ' ';
      }
      loremText +=  paragraph ;
    }
    return loremText;
}
