// Scramble text effect
//   - Triggers on hover via data-scramble-hover-fx attribute
//   - MutationObserver watches for dynamically added elements

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()';
const DEFAULT_DURATION = 2000;
const DEFAULT_STEPS = 20;

interface ScrambleOptions {
    duration?: number;
    chars?: string;
}

// Track active intervals per element
const activeIntervals = new WeakMap<HTMLElement, ReturnType<typeof setInterval>>();

// Store original text per element
const originalTexts = new WeakMap<HTMLElement, string>();

const attached = new WeakSet<HTMLElement>();

export const scrambleText = (
    element: HTMLElement,
    finalText: string,
    options: ScrambleOptions | number = {}
): void => {
    const {
        duration = DEFAULT_DURATION,
        chars = DEFAULT_CHARS,
    } = typeof options === 'number' ? { duration: options } : options;

    // Cancel any running animation
    if (activeIntervals.has(element)) {
        clearInterval(activeIntervals.get(element));
        activeIntervals.delete(element);
    }

    const stepDuration = duration / DEFAULT_STEPS;
    let currentStep = 0;

    const interval = setInterval(() => {
        if (currentStep === DEFAULT_STEPS) {
            element.textContent = finalText;
            clearInterval(interval);
            activeIntervals.delete(element);
            return;
        }

        let scrambled = '';
        for (let i = 0; i < finalText.length; i++) {
            scrambled += Math.random() < currentStep / DEFAULT_STEPS
                ? finalText[i]
                : chars[Math.floor(Math.random() * chars.length)];
        }

        element.textContent = scrambled;
        currentStep++;
    }, stepDuration);

    activeIntervals.set(element, interval);
};

export const cancelScramble = (element: HTMLElement): void => {
    if (activeIntervals.has(element)) {
        clearInterval(activeIntervals.get(element));
        activeIntervals.delete(element);

        // Restore original text
        if (originalTexts.has(element)) {
            element.textContent = originalTexts.get(element)!;
        }
    }
};

const attachScrambleHover = (el: HTMLElement): void => {
    if (attached.has(el)) return;
    attached.add(el);

    // Snapshot original text at attach time
    originalTexts.set(el, el.textContent ?? '');

    el.addEventListener('mouseenter', () => {
        const text = originalTexts.get(el) ?? el.textContent ?? '';
        const duration = el.dataset.scrambleDuration
            ? Number(el.dataset.scrambleDuration)
            : DEFAULT_DURATION;
        const chars = el.dataset.scrambleChars ?? DEFAULT_CHARS;

        scrambleText(el, text, { duration, chars });
    });

    el.addEventListener('mouseleave', () => cancelScramble(el));
};

export const initScramble = (): void => {
    document.querySelectorAll<HTMLElement>('[data-scramble-hover-fx]').forEach(attachScrambleHover);

    const observer = new MutationObserver((mutations: MutationRecord[]) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType !== Node.ELEMENT_NODE) return;

                const el = node as HTMLElement;

                if (el.hasAttribute('data-scramble-hover-fx')) attachScrambleHover(el);
                el.querySelectorAll<HTMLElement>('[data-scramble-hover-fx]').forEach(attachScrambleHover);
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
};