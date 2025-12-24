const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const subTabButtons = document.querySelectorAll('.sub-tab-button');
const subTabContents = document.querySelectorAll('.sub-tab-content');

// Function to set the active tab
function setActiveTab(tab) {
    tabButtons.forEach(btn => {
        btn.classList.remove('bg-gray-700', 'text-white', 'shadow-inner');
    });
    const button = document.querySelector(`.tab-button[data-tab="${tab}"]`);
    if (button) {
        button.classList.add('bg-gray-700', 'text-white', 'shadow-inner');
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
    } else if (tab === 'experience') {
        renderExperience();
    } else if (tab === 'projects') {
        renderProjects();
    }
}

// Function to set the active sub-tab
function setActiveSubTab(subTab) {
    subTabButtons.forEach(btn => {
        btn.classList.remove('bg-gray-700', 'text-white', 'shadow-inner');
    });
    const button = document.querySelector(`.sub-tab-button[data-subtab="${subTab}"]`);
    if (button) {
        button.classList.add('bg-gray-700', 'text-white', 'shadow-inner');
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


function renderProjects() {
    const projectsGrid = document.querySelector('#projects .projects-grid');

    // Clear existing projects
    projectsGrid.innerHTML = '';

    projects.forEach(project => {
        const projectCard = `
            <a href="${project.link}" class="text-decoration-none">
                <div class="bg-gray-700 rounded-xl shadow-xl overflow-hidden w-[290px] flex flex-col transition duration-200 max-h-[300px] hover:translate-y-[-6px] hover:scale-105 hover:shadow-2xl border border-gray-600">
                    <div class="relative">
                        <img src="${project.image}" alt="" class="w-full h-36 object-cover bg-gray-800 block" />
                        <div class="absolute bottom-2 right-2 flex gap-2">
                            ${project.icons.map(icon => `<img src="${icon}" alt="" class="w-6 h-6 bg-gray-800 rounded p-0.5 border border-gray-600" />`).join('')}
                        </div>
                    </div>
                    <div class="p-5 flex-1 flex flex-col overflow-y-auto max-h-44">
                        <h3 class="mt-0 mb-3 text-white text-xl">${project.name}</h3>
                        <p class="text-gray-300 text-base m-0 flex-1">
                            ${project.description}
                        </p>
                    </div>
                </div>
            </a>
        `;
        projectsGrid.innerHTML += projectCard;
    });
}

function renderExperience() {
    const experienceContainer = document.querySelector('.experience-container');
    
    // Clear existing content
    experienceContainer.innerHTML = '';
    
    experience.forEach(item => {
        const experienceItem = `
            <div class="mb-8 pb-8 border-b border-gray-700 last:border-b-0">
                <div class="flex justify-between items-start mb-3">
                    <div>
                        <h3 class="text-xl font-semibold text-white mb-1">${item.title}</h3>
                        <h4 class="text-lg text-gray-300 font-medium">${item.organization}</h4>
                        ${item.location ? `<p class="text-sm text-gray-400 mt-1"><i class="fas fa-map-marker-alt mr-1"></i>${item.location}</p>` : ''}
                    </div>
                    <span class="text-sm text-gray-400 font-medium bg-gray-700 px-3 py-1 rounded-full">${item.dateRange}</span>
                </div>
                <p class="text-gray-300 leading-relaxed">${item.description}</p>
            </div>
        `;
        experienceContainer.innerHTML += experienceItem;
    });
}

function renderSocials() {
    const socialIcons = document.querySelector('.aboutme-icons');
    // Clear existing icons
    socialIcons.innerHTML = '';
    socials.forEach(social => {
        const socialLink = `
            <a href="${social.url}" class="mr-4">
                <i class="${social.icon} text-gray-300 text-3xl transition duration-300 ease-in-out hover:text-gray-500" aria-hidden="true"></i>
            </a>
        `;
        socialIcons.innerHTML += socialLink;
    });
}

// Set the initial active tab and sub-tab
setActiveTab('aboutme');
setActiveSubTab('fullstack');