function showRandomWords(type) {
  const selectedWords = getRandomItems(words, 6);

  const resultEl = document.getElementById('result');
  resultEl.innerHTML = '';  // ลบคำที่แสดงก่อนหน้านี้

  selectedWords.forEach(word => {
    const wordItem = document.createElement('div');
    wordItem.classList.add('word-item');
    
    const charSpan = document.createElement('span');
    const pinyinSpan = document.createElement('span');
    
    charSpan.classList.add('char');
    pinyinSpan.classList.add('pinyin');

    if (type === 'all') {
      charSpan.textContent = word.character;
      pinyinSpan.textContent = ' : ' + word.pinyin;
    } else if (type === 'character') {
      charSpan.textContent = word.character;
      pinyinSpan.textContent = '';
    } else if (type === 'pinyin') {
      charSpan.textContent = '';
      pinyinSpan.textContent = word.pinyin;
    }

    wordItem.appendChild(charSpan);
    wordItem.appendChild(pinyinSpan);
    resultEl.appendChild(wordItem);
  });
}

// Utility: Randomize and get unique items
function getRandomItems(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
