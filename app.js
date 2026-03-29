document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('grid-container');
  const viewList = document.getElementById('view-list');
  const viewDetail = document.getElementById('view-detail');
  const btnBack = document.getElementById('btn-back');
  const detailContent = document.querySelector('.detail-content');

  // Generate 40 numbers
  for (let i = 1; i <= 40; i++) {
    const btn = document.createElement('div');
    btn.className = 'number-card';
    btn.textContent = i;
    btn.addEventListener('click', () => openDetail(i));
    gridContainer.appendChild(btn);
  }

  function openDetail(id) {
    if (!window.oracleData) return;
    const cardData = window.oracleData.find(c => c.id === id);
    if (!cardData) return;

    // Populate data
    document.getElementById('detail-number').textContent = id;
    document.getElementById('detail-title').textContent = cardData.name;
    document.getElementById('detail-keyword').textContent = cardData.keyword;
    document.getElementById('detail-sens').textContent = cardData.generalMeaning;
    document.getElementById('section1-title').textContent = cardData.section1Title || "Passé";
    document.getElementById('detail-past').textContent = cardData.past || cardData.section1Text;
    
    document.getElementById('section2-title').textContent = cardData.section2Title || "Présent";
    document.getElementById('detail-present').textContent = cardData.present || cardData.section2Text;
    
    document.getElementById('section3-title').textContent = cardData.section3Title || "Futur";
    document.getElementById('detail-future').textContent = cardData.future || cardData.section3Text;
    
    // Clean advice
    let advice = cardData.advice.replace(/^«\s*|\s*»$/g, '').trim();
    document.getElementById('detail-advice').textContent = `« ${advice} »`;

    // Transition
    viewList.classList.remove('active');
    viewList.classList.add('hidden');
    
    // reset scroll container
    detailContent.scrollTop = 0;
    
    viewDetail.classList.remove('hidden');
    viewDetail.classList.add('active');
  }

  btnBack.addEventListener('click', () => {
    viewDetail.classList.remove('active');
    viewDetail.classList.add('hidden');
    
    viewList.classList.remove('hidden');
    viewList.classList.add('active');
  });
});
