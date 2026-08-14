// censorship.js
// DunbunMod basic comment moderation

function censorComment(text) {
  const badWordsRegex = /(shit|pussy|dick|fuck)/gi;
  return text.replace(badWordsRegex, 'DunbunMod has moderated the comment.');
}

// Example:
const input = "you fucking dick";
const output = censorComment(input);
console.log(output);
// -> "you DunbunMod has moderated the comment. DunbunMod has moderated the comment."