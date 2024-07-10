document.addEventListener('DOMContentLoaded', (event) => {
    const keyword = localStorage.getItem('selectedKeyword');
    console.log('Retrieved keyword from localStorage:', keyword); 
    if (keyword) {
        document.getElementById('keyword-title').innerText = keyword;
        displayKeywordDetails(keyword);
    } else {
        document.getElementById('keyword-title').innerText = 'No keyword selected';
        document.getElementById('keyword-details').innerText = 'No details available.';
    }
});

function displayKeywordDetails(keyword) {
    const details = {
        'Tartrazine': [
            'Made from: Synthesized from coal tar and petroleum products.' ,
            'Uses: Yellow food coloring in candies, soft drinks, chips, and baked goods.',
            'Health Effects: May cause allergic reactions and hyperactivity in sensitive individuals; some studies link it to behavioral issues in children.'
        ],
        'Sunset Yellow FCF': [
            'Made from: Synthesized from aromatic hydrocarbons from petroleum.',
            'Uses: Orange-yellow food coloring in candies, snacks, and beverages.',
            'Health Effects: Can cause allergic reactions and hyperactivity in sensitive individuals; potential carcinogenic effects in high doses.'
        ],
        'Cochineal': [
            'Made from: Extracted from cochineal insects but can also be synthesized.',
            'Uses: Red food coloring in beverages, candies, and cosmetics.',
            'Health Effects: Generally safe, but can cause allergic reactions in some individuals.'
        ],
        'Azorubine': [
            'Made from: Synthesized from coal tar.',
            'Uses: Red food coloring in jellies, desserts, and sauces.',
            'Health Effects: Can cause allergic reactions and hyperactivity in sensitive individuals; some studies link it to behavioral issues in children.'
        ],
        'Ponceau': [
            'Made from: Synthesized from coal tar.',
            'Uses: Red food coloring in confectionery, beverages, and processed foods.',
            'Health Effects: Potential allergen; linked to hyperactivity in children and possible carcinogenic effects.'
        ],
        'Allura Red AC': [
            'Made from: Synthesized from petroleum.',
            'Uses: Red food coloring in beverages, candies, and snacks.',
            'Health Effects: Generally safe but can cause allergic reactions and hyperactivity in sensitive individuals.'
        ],
        'Brilliant Blue FCF': [
            'Made from: Synthesized from aromatic hydrocarbons from petroleum.',
            'Uses: Blue food coloring in beverages, candies, and processed foods.',
            'Health Effects: Generally safe but can cause allergic reactions in some individuals.'
        ],
        'Brilliant Black BN': [
            'Made from: Synthesized from aromatic hydrocarbons from petroleum.',
            'Uses: Black food coloring in sauces, confectionery, and beverages.',
            'Health Effects: Can cause allergic reactions; linked to hyperactivity in children.'
        ],
        'Sodium Benzoate': [
            'Made from: Synthesized by combining benzoic acid and sodium hydroxide.',
            'Uses: Preservative in acidic foods like sodas, salad dressings, and fruit juices.',
            'Health Effects: Generally safe, but high intake may cause hyperactivity in sensitive individuals; potential carcinogenic effects when combined with vitamin C'
        ]
       
    };

    const keywordDetails = details[keyword] || ['No details available.'];
    const detailsList = keywordDetails.map(detail => `<li>${detail}</li>`).join('');
    document.getElementById('keyword-details').innerHTML = `<ul>${detailsList}</ul>`;
    console.log('Displaying details for:', keyword); 
}