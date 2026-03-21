// utils
const wait = (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, ms));

export const createAnimationOpen = async (): Promise<void> => {
    const folderIcons = document.getElementById('folder-icons');
    const PEAKKSVG = document.getElementById('Peakk');
    const ANIMATION_INTRODUCE = document.querySelector<HTMLElement>('.AnimationIntroduce');

    if (!PEAKKSVG || !folderIcons || !ANIMATION_INTRODUCE) {
        return;
    }

    // Pan center — fade in SVG
    await wait(200);
    PEAKKSVG.style.opacity = '1';

    // Pan left
    await wait(1400);
    PEAKKSVG.style.left = '52%';

    await wait(400);
    PEAKKSVG.style.scale = '80%';

    // Show gift icon
    await wait(600);
    folderIcons.style.opacity = '1';

    // Scale down SVG + resize icon
    await wait(1200);
    PEAKKSVG.style.transform = 'translate(65%, 25%)';
    PEAKKSVG.style.scale = '100%';
    folderIcons.style.transform = 'translate(-50%, -50%) scale(130%)';

    // Wait 1s then close animation
    await wait(1800);
    ANIMATION_INTRODUCE.classList.add('is-closing');

    // Wait for opacity to reach 0 then hide
    await wait(600);
    await wait(500);
    ANIMATION_INTRODUCE.style.display = 'none';
};
