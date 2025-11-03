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

function renderProjects() {
    const fullstackGrid = document.querySelector('#fullstack .projects-grid');
    const backendGrid = document.querySelector('#backend .projects-grid');
    const lowLevelGrid = document.querySelector('#low-level .projects-grid');

    projects.forEach(project => {
        const projectCard = `
            <a href="${project.link}" style="text-decoration: none;">
                <div class="project-card">
                    <div class="project-image">
                        <img src="${project.image}" alt="" />
                        <div class="project-icons">
                            ${project.icons.map(icon => `<img src="${icon}" alt="" />`).join('')}
                        </div>
                    </div>
                    <div class="project-info">
                        <h3>${project.name}</h3>
                        <p>
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
    socials.forEach(social => {
        const socialLink = `
            <a href="${social.url}" style="margin-right: 16px;">
                <i class="${social.icon}" aria-hidden="true"></i>
            </a>
        `;
        socialIcons.innerHTML += socialLink;
    });
}

renderProjects();
renderSocials();