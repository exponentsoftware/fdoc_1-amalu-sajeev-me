const paragraph = `I love teaching. 
    If you do not love teaching what else can you love.
    I love JavaScript if you do not love something which
    can give life to your application what else can you love.`;

console.log(countWords(paragraph, "love", "you"));

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
