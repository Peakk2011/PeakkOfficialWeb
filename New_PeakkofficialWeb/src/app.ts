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
import { AnimationOpen } from './comp/animation-open.ts'
// Effects
import { initCursor } from './fx/cursor.ts';
import { initRipple } from './fx/ripple.ts';
import { initScramble } from "./fx/scramble.ts";
import { createAnimationOpen } from './fx/fx-animation-open.ts';
// Stylesheet
import './app.css';

const rootPath: string = "#app";

interface IContent {
    title: string;
    description: string;
    keywords: string;
}

const content: IContent = {
    title: "Peakk",
    description: `
        Peakkofficial, Peakk2011
        Design Services | Landing Pages | Website | Social Media
    `,
    keywords: "Mintkit, JavaScript, framework, web development",
};

const html: string = `
    ${Navbar.components}
    ${Header.components}

    ${AnimationOpen.components}

    ${Typeface1.components}
    ${Typeface2.components}
    ${Typeface3.components}
    ${FascinateNotes.components}
`;

const initNavbarScroll = (): void => {
    const nav = document.querySelector("nav");
    if (!nav) return;

    const darkSections = document.querySelectorAll<HTMLElement>("[data-navbar='dark']");
    if (darkSections.length === 0) return;

    const checkSections = (): void => {
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

    setTimeout(() => {
        initNavbarScroll(),
        initCursor(),
        initRipple(),
        initScramble(),
        createAnimationOpen(),
        0
    });
});

/**
 * Creates and injects a meta tag into the document's <head>.
 * @param {string} name - The name attribute of the meta tag
 * @param {string} content - The content attribute of the meta tag.
 */

const injectMeta = (name: string, content: string): void => {
    const meta = document.createElement("meta");
    meta.name = name;
    meta.content = content;
    document.head.appendChild(meta);
};

injectMeta("description", content.description.replace(/<br\s*\/?>/g, " "));
injectMeta("keywords", content.keywords);