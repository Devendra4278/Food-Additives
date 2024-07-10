let availableKeywords = [
    'Tartrazine',
    'Sunset Yellow FCF',
    'Cochineal',
    'Azorubine',
    'Ponceau',
    'Allura Red AC',
    'Brilliant Blue FCF',
    'Brilliant Black BN',
    'Sodium Benzoate',
];

const resultBox = document.querySelector('.result-box');
const inputBox = document.getElementById('search-box');

inputBox.onkeyup = function(){
    console.log('Keyup event triggered'); 
    let result = [];
    let input = inputBox.value;  
    console.log('Input value:', input); 
    if(input.length > 0){  
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    console.log('Filtered result:', result);
    display(result);
}

function display(result){
    if (result.length > 0) {
        const content = result.map((list) => {
            return `<li style="z-index:100;color:black;" onclick="goToPage('${list}')">${list}</li>`;
        }).join('');
        resultBox.innerHTML = `<ul style="z-index:100;color:black;height:fit-content;">${content}</ul>`;
    } else {
        resultBox.innerHTML = ''; 
    }
    console.log('Result box innerHTML:', resultBox.innerHTML); 
}

function goToPage(keyword) {
    localStorage.setItem('selectedKeyword', keyword);
    window.location.href = 'info.html';
}
function scrollToParagraph(paragraph1) {
    const paragraph = document.getElementById(paragraph1);
    if (paragraph) {
        paragraph.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Paragraph with id ${paragraph1} not found.`);
    }
}