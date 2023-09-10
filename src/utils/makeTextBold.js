export function makeTextBold(inputText, targetTexts) {
  let result = inputText;
  targetTexts.forEach((targetText) => {
    result = result.split(targetText).join(`<strong>${targetText}</strong>`);
  });
  return result;
}
