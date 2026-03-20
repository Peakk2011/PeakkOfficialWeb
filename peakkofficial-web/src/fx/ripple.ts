/*
    ripple.ts
    Ripple click effect
        - Supports mouse and touch
        - MutationObserver watches for dynamically added elements
        - Attach via data-ripple attribute on any element
*/

export const initRipple = (): void => {
    document.querySelectorAll<HTMLElement>('[data-ripple]').forEach(attachRipple);

    const observer = new MutationObserver((mutations: MutationRecord[]) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType !== Node.ELEMENT_NODE) return;

                const el = node as HTMLElement;

                if (el.hasAttribute('data-ripple')) attachRipple(el);
                el.querySelectorAll<HTMLElement>('[data-ripple]').forEach(attachRipple);
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
};

// WeakSet to avoid attaching twice on same element
const attached = new WeakSet<HTMLElement>();

export const attachRipple = (el: HTMLElement): void => {
    if (attached.has(el)) return;
    attached.add(el);

    let ripple: HTMLDivElement | null = null;

    const createRipple = (x: number, y: number): void => {
        ripple = document.createElement('div');
        ripple.className = 'ripple-effect';

        const rect: DOMRect = el.getBoundingClientRect();
        ripple.style.left = `${x - rect.left}px`;
        ripple.style.top = `${y - rect.top}px`;

        el.appendChild(ripple);
    };

    const removeRipple = (): void => {
        if (!ripple) return;
        const href = el.getAttribute('data-href');
        const current = ripple;
        ripple = null;
        current.addEventListener('animationend', () => {
            current.remove();
            if (href) window.location.href = href;
        });
    };

    // Mouse
    el.addEventListener('mousedown', (e: MouseEvent) => createRipple(e.clientX, e.clientY));
    el.addEventListener('mouseup', removeRipple);
    el.addEventListener('mouseleave', removeRipple);

    // Touch
    el.addEventListener('touchstart', (e: TouchEvent) => {
        const t = e.touches[0];
        createRipple(t.clientX, t.clientY);
    });
    el.addEventListener('touchend', removeRipple);
    el.addEventListener('touchcancel', removeRipple);
};