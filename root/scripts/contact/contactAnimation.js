// Copyright © 2025 Mint teams
// Licensed under the MIT License

/**
 * @file animations.js
 * @description GSAP animations for contact page
 */

const ANIMATION_CONFIG = {
    card: {
        duration: 0.6,
        ease: 'power3.out'
    },
    logo: {
        duration: 1,
        delay: 0.2,
        ease: 'back.out(1.2)'
    },
    title: {
        duration: 1,
        delay: 0.4,
        ease: 'power3.out'
    },
    subtitle: {
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
    },
    links: {
        duration: 0.8,
        stagger: 0.1,
        delay: 0.8,
        ease: 'power3.out'
    }
};

// Initial state
gsap.set(
    '.links li',
    {
        y: 20 
    }
);

// Run animations
export const initAnimations = () => {
    gsap.to(
        '.card',
        {
            opacity: 1,
            ...ANIMATION_CONFIG.card
        }
    );
    gsap.to(
        '.logo',
        {
            opacity: 1,
            y: 0,
            ...ANIMATION_CONFIG.logo
        }
    );
    gsap.to(
        'h1',
        {
            opacity: 1,
            y: 0,
            ...ANIMATION_CONFIG.title
        }
    );
    gsap.to(
        '.subtitle',
        {
            opacity: 1,
            ...ANIMATION_CONFIG.subtitle
        }
    );
    gsap.to(
        '.links li',
        {
            opacity: 1,
            y: 0,
            ...ANIMATION_CONFIG.links
        }
    );
};