const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const subTabButtons = document.querySelectorAll('.sub-tab-button');
const subTabContents = document.querySelectorAll('.sub-tab-content');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Theme management
const THEMES = {
    DARK: 'dark',
    LIGHT: 'light'
};

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || THEMES.DARK;
    setTheme(savedTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update icon
    if (theme === THEMES.LIGHT) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setTheme(newTheme);
}

// Theme toggle event listener
themeToggle.addEventListener('click', toggleTheme);

// Initialize theme on load
initTheme();

// Function to set the active tab
function setActiveTab(tab) {
    tabButtons.forEach(btn => {
        btn.classList.remove('bg-tertiary', 'text-primary', 'shadow-inner');
    });
    const button = document.querySelector(`.tab-button[data-tab="${tab}"]`);
    if (button) {
        button.classList.add('bg-tertiary', 'text-primary', 'shadow-inner');
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
        btn.classList.remove('bg-tertiary', 'text-primary', 'shadow-inner');
    });
    const button = document.querySelector(`.sub-tab-button[data-subtab="${subTab}"]`);
    if (button) {
        button.classList.add('bg-tertiary', 'text-primary', 'shadow-inner');
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
                <div class="bg-tertiary rounded-xl shadow-xl overflow-hidden w-[290px] flex flex-col transition duration-200 h-[300px] hover:translate-y-[-6px] hover:scale-105 hover:shadow-2xl border border-custom">
                    <div class="relative">
                        <img src="${project.image}" alt="" class="w-full h-36 object-cover bg-secondary block" />
                    </div>
                    <div class="p-5 flex-1 flex flex-col overflow-y-auto">
                        <h3 class="mt-0 mb-3 text-primary text-xl">${project.name}</h3>
                        <p class="text-secondary text-base m-0 flex-1">
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
            <div class="mb-8 pb-8 border-b border-custom last:border-b-0">
                <div class="flex justify-between items-start mb-3 max-sm:flex-col max-sm:items-start max-sm:gap-2">
                    <div>
                        <h3 class="text-xl font-semibold text-primary mb-1">${item.title}</h3>
                        <h4 class="text-lg text-secondary font-medium">${item.organization}</h4>
                        ${item.location ? `<p class="text-sm text-tertiary mt-1"><i class="fas fa-map-marker-alt mr-1"></i>${item.location}</p>` : ''}
                    </div>
                    <div class="max-sm:self-end">
                        <span class="text-sm text-tertiary font-medium bg-tertiary px-3 py-1 rounded-full max-sm:text-xs max-sm:px-2 max-sm:py-1 max-sm:text-2xs tab-max-414:text-xs tab-max-414:px-2 tab-max-414:py-1 tab-max-414:whitespace-nowrap tab-max-375:text-2xs tab-max-375:px-1 tab-max-375:py-0">${item.dateRange}</span>
                    </div>
                </div>
                <p class="text-secondary leading-relaxed">${item.description}</p>
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
                <i class="${social.icon} text-secondary text-3xl transition duration-300 ease-in-out hover-text-tertiary" aria-hidden="true"></i>
            </a>
        `;
        socialIcons.innerHTML += socialLink;
    });
}

// Set the initial active tab and sub-tab
setActiveTab('aboutme');
setActiveSubTab('fullstack');