/*
1.a.Write a function which count the number of occurrence of words in a 
    paragraph or a sentence.The function countWords takes a paragraph 
    and two words as parameters. 
    It compare which word is most frequently occurred in the paragraph.
*/

const paragraph = `I love teaching. 
    If you do not love teaching what else can you love.
    I love JavaScript if you do not love something which
    can give life to your application what else can you love.`;

// console.log(countWords(paragraph, "love", "you"));

function countWords(paragraph, firstWord, secondWord) {
  let para = paragraph.toLowerCase();
  let firstWordCount = para.split(firstWord).length;
  let secondWordCount = para.split(secondWord).length;
  if (firstWordCount == secondWordCount) return `try some other words`;
  const result = firstWordCount > secondWordCount;
  return result
    ? `The word ${firstWord} more frequently occurred than ${secondWord}`
    : `The word ${secondWord} more frequently occurred than ${firstWord}`;
}

// ##########################################################################

/**
 * 1.b. Write a function called cleanText.
 * The function takes raw text as a parameter and returns the clean text.
 */

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. 
    There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;
    I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate
    yo@u to be a tea@cher!?`;
console.log(cleanText(sentence));

function cleanText(sentence) {
  return sentence.replace(/[|&;$%@"<>()+,]/g, "");
}
