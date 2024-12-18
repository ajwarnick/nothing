import './Comment.scss';

function Comment() {

    const generateLoremText = (numParagraphs, numWords) =>  {
        var loremText = '';
        var words = [
          'Lorem',
          'ipsum',
          'dolor',
          'sit',
          'amet',
          'consectetur',
          'adipiscing',
          'elit',
          'sed',
          'do',
          'eiusmod',
          'tempor',
          'incididunt',
          'ut',
          'labore',
          'et',
          'dolore',
          'magna',
          'aliqua',
          'Ut',
          'enim',
          'ad',
          'minim',
          'veniam',
          'quis',
          'nostrud',
          'exercitation',
          'ullamco',
          'laboris',
          'nisi',
          'ut',
          'aliquip',
          'ex',
          'ea',
          'commodo',
          'consequat',
          'Duis',
          'aute',
          'irure',
          'dolor',
          'in',
          'reprehenderit',
          'in',
          'voluptate',
          'velit',
          'esse',
          'cillum',
          'dolore',
          'eu',
          'fugiat',
          'nulla',
          'pariatur',
          'Excepteur',
          'sint',
          'occaecat',
          'cupidatat',
          'non',
          'proident',
          'sunt',
          'in',
          'culpa',
          'qui',
          'officia',
          'deserunt',
          'mollit',
          'anim',
          'id',
          'est',
          'laborum',
        ];
      
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
    
    let words = Math.floor(Math.random() * 40);
        words = 10;

    return (
        <div className="post__comment">
            <p>{ generateLoremText(1, words) }</p>
        </div>
        );
    }
    export default Comment;