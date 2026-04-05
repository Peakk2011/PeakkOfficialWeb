/**
 * @file Main application script for the Mintkit boilerplate.
 * @description This script sets up the main content, styles
 */
// Components
import { Mint } from "https://mint-teams.web.app/Mintkit/mint.js";
import { Navbar } from "./comp/navbar.ts";
import { Header } from "./comp/header.ts";
import { Typeface1, Typeface2, Typeface3 } from './comp/typeface.ts';
import { FascinateNotes } from "./comp/fascinate-notes.ts";
import { AnimationOpen } from './comp/animation-open.ts';
import { VisitDesignWorks } from "./comp/visit-design-works.ts";
import { AboutPeakk } from "./comp/about-peakk.ts";
// Effects
import { initCursor } from './fx/cursor.ts';
import { initRipple } from './fx/ripple.ts';
import { initScramble } from "./fx/scramble.ts";
import { createAnimationOpen } from './fx/fx-animation-open.ts';
// Stylesheet
// @ts-ignore
import "./app.css";

const rootPath: string = "#app";
const LAZY_SECTION_ROOT_MARGIN = '300px 0px';

interface IContent {
    title: string;
    description: string;
}

const content: IContent = {
    title: "Peakk - Developer & Designer",
    description: `
        Peakkofficial, Peakk2011
        Design Services | Landing Pages | Website | Social Media
    `,
};

interface LazySection {
    id: string;
    minHeight: string;
    html: string;
}

const initialHtml: string = `
    ${Navbar.components}
    ${Header.components}
    ${AnimationOpen.components}
`;

const lazySections: LazySection[] = [
    {
        id: 'typeface-1',
        minHeight: '1080px',
        html: Typeface1.components,
    },
    {
        id: 'typeface-2',
        minHeight: '1080px',
        html: Typeface2.components,
    },
    {
        id: 'typeface-3',
        minHeight: '1200px',
        html: Typeface3.components,
    },
    {
        id: 'fascinate-notes',
        minHeight: '1600px',
        html: FascinateNotes.components,
    },
    {
        id: 'visit-design-works',
        minHeight: '1080px',
        html: VisitDesignWorks.components,
    },
    {
        id: 'about-peakk',
        minHeight: '1080px',
        html: AboutPeakk.components,
    }
];

const html: string = `
    ${initialHtml}
    ${lazySections
        .map(({ id, minHeight }) => `
            <div
                class="lazy-section-slot"
                data-lazy-section="${id}"
                style="min-height: ${minHeight};"
                aria-hidden="true"
            ></div>
        `)
        .join('')}
`;

const initNavbarScroll = (): void => {
    const nav = document.querySelector("nav");
    if (!nav) return;

    const checkSections = (): void => {
        const darkSections = document.querySelectorAll<HTMLElement>("[data-navbar='dark']");
        if (darkSections.length === 0) return;

        const navBottom = nav.getBoundingClientRect().bottom;
        let isDark = false;

        darkSections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= navBottom && rect.bottom >= navBottom) {
                isDark = true;
            }
        });

        nav.classList.toggle("navbar-dark", isDark);
    };

    window.addEventListener("scroll", checkSections, { passive: true });
    checkSections();
};

const initLazySections = (): void => {
    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const slot = entry.target as HTMLDivElement;
            const sectionId = slot.dataset.lazySection;
            const section = lazySections.find(({ id }) => id === sectionId);

            if (!section) {
                currentObserver.unobserve(slot);
                return;
            }

            slot.innerHTML = section.html;
            slot.classList.add('lazy-section-slot-loaded');
            slot.removeAttribute('aria-hidden');
            slot.style.minHeight = '0';

            currentObserver.unobserve(slot);
        });
    }, { rootMargin: LAZY_SECTION_ROOT_MARGIN });

    document
        .querySelectorAll<HTMLDivElement>('.lazy-section-slot')
        .forEach((slot) => observer.observe(slot));
};

Mint.injectTitle(`<title>${content.title}</title>`);

Mint.init(() => {
    Mint.inject({
        html: {
            id: rootPath,
            location() {
                return html;
            },
        },
    });

    initLazySections();

    window.setTimeout(() => {
        initNavbarScroll();
        initCursor();
        initRipple();
        initScramble();
        void createAnimationOpen();
    }, 0);
});