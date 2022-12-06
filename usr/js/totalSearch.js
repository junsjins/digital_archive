// 모듈 - 종합 검색기

function totalSearch(element, filterArray, topSearchedArray, seachType) {
    const filterCategory = element.querySelector('[data-tot-select]');
    const searchInput = element.querySelector('[data-tot-input]');
    const btnSearch = element.querySelector('[data-tot-button]');
    const topSearchedList = element.querySelector('[data-tot-container]');

    // 실검색 데이터 영역
    const inputCategory = element.querySelector('[data-input-select]');
    const inputText = element.querySelector('[data-input-text]');
    const justDeco = element.querySelector('[data-just-deco-hr]');

    btnSearch.addEventListener('click', () => setAsValue(seachType));
    searchInput.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            e.preventDefault();
            setAsValue(seachType);
        }
    });

    if (filterArray === null) {
        filterCategory.remove();
        justDeco.remove();
    } else {
        filterArray.forEach((e) => {
            const newFilterOpt = document.createElement('option');

            newFilterOpt.textContent = e.label;
            newFilterOpt.value = e.value;

            filterCategory.appendChild(newFilterOpt);
        });
    }

    topSearchedArray.forEach((e) => {
        const newTextRow = document.createElement('li');
        const newTextClickable = document.createElement('button');

        newTextRow.classList.add('top-search-item');
        newTextRow.dataset.listUpdown = e.rankcompare;
        newTextRow.dataset.listAmount = e.ranknum;

        newTextClickable.setAttribute('type', 'button');
        newTextClickable.addEventListener('click', function() { searchInput.value = this.textContent; setAsValue(); });
        newTextClickable.dataset.searchText = '';
        newTextClickable.textContent = e.value;

        newTextRow.appendChild(newTextClickable);
        topSearchedList.appendChild(newTextRow);
    });

}

// select에 option 추가하는 내용 추가 필요
