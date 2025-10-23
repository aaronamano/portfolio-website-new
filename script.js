const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const subTabButtons = document.querySelectorAll('.sub-tab-button');
const subTabContents = document.querySelectorAll('.sub-tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.dataset.tab;

        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        tabContents.forEach(content => {
            if (content.id === tab) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    });
});

subTabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const subTab = button.dataset.subtab;

        subTabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        subTabContents.forEach(content => {
            if (content.id === subTab) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    });
});