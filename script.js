const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const subTabButtons = document.querySelectorAll('.sub-tab-button');
const subTabContents = document.querySelectorAll('.sub-tab-content');

// Function to set the active tab
function setActiveTab(tab) {
    tabButtons.forEach(btn => {
        btn.classList.remove('bg-black', 'text-white', 'shadow-inner');
    });
    const button = document.querySelector(`.tab-button[data-tab="${tab}"]`);
    if (button) {
        button.classList.add('bg-black', 'text-white', 'shadow-inner');
    }

    tabContents.forEach(content => {
        if (content.id === tab) {
            content.classList.remove('hidden');
            content.classList.add('block');
        } else {
            content.classList.remove('block');
            content.classList.add('hidden');
        }
    });

    if (tab === 'aboutme') {
        renderSocials();
    } else if (tab === 'projects') {
        renderProjects();
    }
}

// Function to set the active sub-tab
function setActiveSubTab(subTab) {
    subTabButtons.forEach(btn => {
        btn.classList.remove('bg-gray-800', 'text-white', 'shadow-inner');
    });
    const button = document.querySelector(`.sub-tab-button[data-subtab="${subTab}"]`);
    if (button) {
        button.classList.add('bg-gray-800', 'text-white', 'shadow-inner');
    }

    subTabContents.forEach(content => {
        if (content.id === subTab) {
            content.classList.remove('hidden');
            content.classList.add('block');
        } else {
            content.classList.remove('block');
            content.classList.add('hidden');
        }
    });
}

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.dataset.tab;
        setActiveTab(tab);
    });
});

subTabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const subTab = button.dataset.subtab;
        setActiveSubTab(subTab);
    });
});

function renderProjects() {
    const fullstackGrid = document.querySelector('#fullstack .projects-grid');
    const backendGrid = document.querySelector('#backend .projects-grid');
    const lowLevelGrid = document.querySelector('#low-level .projects-grid');

    // Clear existing projects
    fullstackGrid.innerHTML = '';
    backendGrid.innerHTML = '';
    lowLevelGrid.innerHTML = '';

    projects.forEach(project => {
        const projectCard = `
            <a href="${project.link}" class="text-decoration-none">
                <div class="bg-gray-100 rounded-xl shadow-md overflow-hidden w-[290px] flex flex-col transition duration-200 max-h-[300px] hover:translate-y-[-6px] hover:scale-105 hover:shadow-2xl">
                    <div class="relative">
                        <img src="${project.image}" alt="" class="w-full h-36 object-cover bg-white block" />
                        <div class="absolute bottom-2 right-2 flex gap-2">
                            ${project.icons.map(icon => `<img src="${icon}" alt="" class="w-6 h-6 bg-blue-900 rounded p-0.5" />`).join('')}
                        </div>
                    </div>
                    <div class="p-5 flex-1 flex flex-col overflow-y-auto max-h-44">
                        <h3 class="mt-0 mb-3 text-black text-xl">${project.name}</h3>
                        <p class="text-gray-600 text-base m-0 flex-1">
                            ${project.description}
                        </p>
                    </div>
                </div>
            </a>
        `;
        if (project.category === 'fullstack') {
            fullstackGrid.innerHTML += projectCard;
        } else if (project.category === 'backend') {
            backendGrid.innerHTML += projectCard;
        } else if (project.category === 'low-level') {
            lowLevelGrid.innerHTML += projectCard;
        }
    });
}

function renderSocials() {
    const socialIcons = document.querySelector('.aboutme-icons');
    // Clear existing icons
    socialIcons.innerHTML = '';
    socials.forEach(social => {
        const socialLink = `
            <a href="${social.url}" class="mr-4">
                <i class="${social.icon} text-black text-3xl transition duration-300 ease-in-out hover:text-gray-500" aria-hidden="true"></i>
            </a>
        `;
        socialIcons.innerHTML += socialLink;
    });
}

// Set the initial active tab and sub-tab
setActiveTab('aboutme');
setActiveSubTab('fullstack');