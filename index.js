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

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. 
    There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;
    I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate
    yo@u to be a tea@cher!?`;
// console.log(cleanText(sentence));

function cleanText(sentence) {
  return sentence.replace(/[|&;$%@"<>()+,\n]/g, "");
}

//  ########################################################################

/**
 * 1.c. After cleaning the text in the sentence from question number b you will get
 * the following text.
 * Count the number of words in this text. Don't include words with only one letter.
 */

sentence = cleanText(sentence);
// console.log(countWords(sentence));

function countWords(sentence) {
  const totalWords = sentence.split(" ").filter((v) => v.length > 1).length;
  return totalWords;
}

// ################################################################################

/**
 * 1.d. How many words were used to construct this sentence.
 * Now, don't exclude one letter words.
 */

// console.log(varietyOfWords(sentence));

function varietyOfWords(sentence) {
  sentence = sentence.toLowerCase();
  const words = sentence.split(" ");
  const uniqueWords = new Set(words);
  return uniqueWords.size;
}

/**
 * 2.a. Looping a triangle: 
 * Write a loop that makes seven calls to console.log to output the following triangle:
 * 
    #
    ##
    ###
    ####
    #####
    ######
    #######
 */

    for (let i = 1; i <= 7; i++) console.log("#".repeat(i));

/**
 * 2.b. Write a function which returns array of seven random numbers in a range of 0-9. 
 * All the numbers must be unique
 */

console.log(sevenRandomNumbers());

function sevenRandomNumbers() {
    let rand = () => ~~(Math.random() * 10);
    let numbers = new Set();
    while (numbers.size < 7) numbers.add(rand());
    return Array.from(numbers);
}