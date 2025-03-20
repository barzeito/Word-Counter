const textInput = document.getElementById('text-input');
const wordCountDisplay = document.getElementById('word-count');
const charCountDisplay = document.getElementById('char-count');
const wordFrequenciesDisplay = document.getElementById('word-frequencies');

textInput.addEventListener('input', () => {
    const text = textInput.value;
    const cleanText = text.replace(/[^\w\s]|_/g, '');
    const words = cleanText.split(/\s+/).filter(word => word !== '');
    const wordCount = words.length;
    const charCount = text.length;

    const wordFrequency = {};
    for (const word of words) {
        if (wordFrequency[word]) {
            wordFrequency[word]++;
        } else {
            wordFrequency[word] = 1;
        }
    }

    wordFrequenciesDisplay.innerHTML = '';
    for (const [word, frequency] of Object.entries(wordFrequency).sort((a, b) => a[0].localeCompare(b[0]))) {
        const para = document.createElement('p');
        para.textContent = `${word}: ${frequency}`;
        wordFrequenciesDisplay.appendChild(para);
    }

    wordCountDisplay.textContent = wordCount;
    charCountDisplay.textContent = charCount;
})