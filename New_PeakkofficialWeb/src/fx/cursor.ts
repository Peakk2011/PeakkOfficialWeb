const isTouchOnly = (): boolean =>
    window.matchMedia('(pointer: coarse)').matches &&
    !window.matchMedia('(pointer: fine)').matches;

export const initCursor = (): (() => void) | void => {
    if (isTouchOnly()) return;

    const dot = document.createElement('div');
    dot.id = 'cursor-dot';
    document.body.appendChild(dot);

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent): void => {
        if (document.pointerLockElement) {
            mouseX = Math.min(Math.max(mouseX + e.movementX, 0), window.innerWidth);
            mouseY = Math.min(Math.max(mouseY + e.movementY, 0), window.innerHeight);
        } else {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const onMouseDown = (): void => {
        dot.style.opacity = '0';
    };
    const onMouseUp = (): void => {
        dot.style.opacity = '1';
    };

    const setOpacity = (value: '0' | '1'): void => { dot.style.opacity = value; };
    const onMouseLeave = (): void => setOpacity('0');
    const onMouseEnter = (): void => setOpacity('1');
    const onPointerLockChange = (): void => setOpacity(document.pointerLockElement ? '0' : '1');

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('pointerlockchange', onPointerLockChange);

    return () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mouseleave', onMouseLeave);
        document.removeEventListener('mouseenter', onMouseEnter);
        document.removeEventListener('pointerlockchange', onPointerLockChange);
        dot.remove();
    };
};