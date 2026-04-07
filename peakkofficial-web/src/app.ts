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
import { bikePack } from "./comp/bike-pack.ts";
import { Footer } from "./comp/footer.ts";
import { RuntimeConsider } from "./comp/runtime-consider.ts";
// Effects
import { initCursor } from './fx/cursor.ts';
import { initRipple } from './fx/ripple.ts';
import { initScramble } from "./fx/scramble.ts";
import { createAnimationOpen } from './fx/fx-animation-open.ts';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    },
    {
        id: 'runtime-consider',
        minHeight: '1080px',
        html: RuntimeConsider.components,
    },
    {
        id: 'bike-pack',
        minHeight: '1080px',
        html: bikePack.components,
    },
    {
        id: 'footer',
        minHeight: '300px',
        html: Footer.components,
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

const SCROLL_CONFIGS = [
    {
        trigger: '.fascinate-notes-section',
        targets: '.fascinate-notes-flex-column-image, .fascinate-notes-buttons, .fascinate-notes-p, .fascinate-notes-card-1, .fascinate-notes-card-2',
        stagger: 0.18,
    },
    {
        trigger: '.visit-design-works',
        targets: '.visit-design-works-content-showcase',
    },
    {
        trigger: '.about-section-peakk',
        targets: '.about-section-peakk-sidebar, .about-section-peakk-content',
        stagger: 0.2,
    },
];

const initGSAPAnimations = (root: ParentNode = document): void => {
    SCROLL_CONFIGS.forEach(({ trigger, targets, stagger = 0 }) => {
        const el = root.querySelector<HTMLElement>(trigger);
        if (!el) return;

        gsap.from(targets, {
            y: 120,
            opacity: 0,
            scale: 0.85,
            filter: 'blur(20px)',
            rotationX: 15,
            stagger,
            duration: 1.5,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                // scrub: 1,
                toggleActions: 'restart reverse restart reverse',
                // play=enter, reverse=leave, play=re-enter, reverse=re-leave
            },
        });
    });
};

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

const initNavbarDropdown = (): void => {
    const dropdownToggle = document.querySelector<HTMLAnchorElement>(".navbar-dropdown-toggle");
    const dropdown = document.querySelector<HTMLLIElement>(".navbar-dropdown");

    if (!dropdownToggle || !dropdown) return;

    const closeDropdown = (): void => {
        dropdown.classList.remove('is-open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
    };

    // const openDropdown = (): void => {
    //     dropdown.classList.add('is-open');
    //     dropdownToggle.setAttribute('aria-expanded', 'true');
    // };

    dropdownToggle.addEventListener('click', (event) => {
        event.preventDefault();
        dropdown.classList.toggle('is-open');
        const expanded = dropdown.classList.contains('is-open');
        dropdownToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });

    window.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target as Node)) {
            closeDropdown();
        }
    });
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

            initGSAPAnimations(slot);
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
        initNavbarDropdown();
        initCursor();
        initRipple();
        initScramble();
        initGSAPAnimations();
        void createAnimationOpen();
    }, 0);
});