// 모듈 - 커스텀 드랍다운 셀렉트

const customDropdowns = document.querySelectorAll('.extra-dropdown');

if (customDropdowns.length >= 1) {
    customDropdowns.forEach(function(el) {
        extraDropDown(el);
    });
}

function extraDropDown(element) {
    const selectLabel = element.querySelector('[type="text"]');
    const selectList = element.querySelector('.dropdown-list');
    const listItems = selectList.querySelectorAll('.dropdown-items');
    const clickTrap = (e) => {
        e.stopPropagation();

        const isInside = e.composedPath().includes(element)

        if (isInside === true) {
            return;
        } else {
            selectList.classList.remove('show');
        }
    };

    document.addEventListener('click', clickTrap, { capture: false });

    element.addEventListener('click', (e) => {
        switch(selectList.classList.contains('show')) {
            case true :
                selectList.classList.remove('show');
                break;
            case false :
                selectList.classList.add('show');
                break;
            default :
                console.log('!!');
        }
    }, { capture: true });

    listItems.forEach(function(e) {
        e.addEventListener('click', function() {
            let isThereAnyChosen = selectList.querySelector('.chosen');

            if (isThereAnyChosen) {
                isThereAnyChosen.classList.remove('chosen');
            }

            e.classList.add('chosen');
            selectLabel.value = e.textContent;
        });
    });
}