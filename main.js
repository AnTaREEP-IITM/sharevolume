const BASE_URL = 'https://data.sec.gov/api/xbrl/companyconcept/';
const DEFAULT_CIK = '0000004904';

async function fetchShareVolume(cik) {
    const response = await fetch(`${BASE_URL}CIK${cik}/dei/EntityCommonStockSharesOutstanding.json`, {
        headers: { 'User-Agent': 'American Electric Power ShareVolume App' }
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

function processShareData(data) {
    // Filter shares data
    const sharesData = data.units.shares.filter(entry => entry.fy > '2020' && typeof entry.val === 'number');
    const maxShare = sharesData.reduce((max, entry) => entry.val > max.val ? entry : max);
    const minShare = sharesData.reduce((min, entry) => entry.val < min.val ? entry : min);
    return {
        entityName: data.entityName,
        max: { val: maxShare.val, fy: maxShare.fy },
        min: { val: minShare.val, fy: minShare.fy }
    };
}

function displayShareVolume(data) {
    document.title = data.entityName;
    document.getElementById('share-entity-name').textContent = data.entityName;
    document.getElementById('share-max-value').textContent = data.max.val;
    document.getElementById('share-max-fy').textContent = data.max.fy;
    document.getElementById('share-min-value').textContent = data.min.val;
    document.getElementById('share-min-fy').textContent = data.min.fy;
}

async function loadData() {
    const urlParams = new URLSearchParams(window.location.search);
    const cik = urlParams.get('CIK') || DEFAULT_CIK;
    try {
        const data = await fetchShareVolume(cik);
        const processedData = processShareData(data);
        displayShareVolume(processedData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

loadData();