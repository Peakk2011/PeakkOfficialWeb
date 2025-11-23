import { inject } from 'https://mint-teams.web.app/Mintkit/mintkit.js';
import { initAnimations } from './contactAnimation.js';
import { contactData } from './contactData.js';

const template = () => {
    const linksHTML = contactData.links.map(link => {
        const iconHTML = link.icon === 'svg'
            ? `<svg class="icon-svg" viewBox="0 0 24 24"><path d="${link.svg}"/></svg>`
            : `<ion-icon name="${link.icon}" class="icon"></ion-icon>`;

        const target = link.href.startsWith('http') ? 'target="_blank"' : '';

        return `
            <li>
                <a href="${link.href}" ${target}>
                    ${iconHTML}
                    <span class="link-text">${link.text}</span>
                </a>
            </li>
        `;
    }).join('');

    return `
        <div class="card">
            <div class="logo">
                <img src="${contactData.logo}" alt="${contactData.name} Logo">
            </div>
            <h1>${contactData.name}</h1>
            <p class="subtitle">${contactData.title}<br>${contactData.subtitle}</p>
            <ul class="links">
                ${linksHTML}
            </ul>
        </div>
    `;
};

inject({
    html: {
        id: '#app',
        location: template
    }
});

initAnimations();