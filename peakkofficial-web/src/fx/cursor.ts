const isTouchOnly = (): boolean =>
    window.matchMedia('(pointer: coarse)').matches &&
    !window.matchMedia('(pointer: fine)').matches;

export const initCursor = (): (() => void) | void => {
    if (isTouchOnly() || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const dot = document.createElement('div');
    dot.id = 'cursor-dot';
    document.body.appendChild(dot);

    let mouseX = 0;
    let mouseY = 0;
    let rafId = 0;
    let isVisible = false;

    const render = (): void => {
        rafId = 0;
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const requestRender = (): void => {
        if (rafId !== 0) return;
        rafId = window.requestAnimationFrame(render);
    };

    const onPointerMove = (e: PointerEvent): void => {
        if (e.pointerType !== 'mouse') return;

        if (document.pointerLockElement) {
            mouseX = Math.min(Math.max(mouseX + e.movementX, 0), window.innerWidth);
            mouseY = Math.min(Math.max(mouseY + e.movementY, 0), window.innerHeight);
        } else {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }
        requestRender();

        if (!isVisible) {
            isVisible = true;
            dot.style.opacity = '1';
        }
    };

    const onPointerDown = (): void => {
        dot.style.opacity = '0';
    };
    const onPointerUp = (): void => {
        dot.style.opacity = '1';
    };

    const setOpacity = (value: '0' | '1'): void => { dot.style.opacity = value; };
    const onMouseLeave = (): void => setOpacity('0');
    const onMouseEnter = (): void => setOpacity('1');
    const onPointerLockChange = (): void => setOpacity(document.pointerLockElement ? '0' : '1');

    document.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerdown', onPointerDown, { passive: true });
    document.addEventListener('pointerup', onPointerUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('pointerlockchange', onPointerLockChange);

    return () => {
        if (rafId !== 0) {
            window.cancelAnimationFrame(rafId);
        }

        document.removeEventListener('pointermove', onPointerMove);
        document.removeEventListener('pointerdown', onPointerDown);
        document.removeEventListener('pointerup', onPointerUp);
        document.removeEventListener('mouseleave', onMouseLeave);
        document.removeEventListener('mouseenter', onMouseEnter);
        document.removeEventListener('pointerlockchange', onPointerLockChange);
        dot.remove();
    };
};