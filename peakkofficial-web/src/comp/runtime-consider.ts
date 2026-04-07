export const RuntimeConsider = {
    components: `
        <style>
            .runtime-consider-image {
    width: 100%;
    height: 875px;
    overflow: hidden;
    background-image: url('../../assets/runtime-consider.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

#runtime-consider-link {
    top: 62.8%;
    left: 50%;
}

@media screen and (max-width: 1770px) {
                .runtime-consider-image {
                    background-size: cover;
                }
}

@media screen and (max-width: 640px) {
            .runtime-consider-image {
                    background-image: url('../../assets/runtime-consider-mobile.png');
            }
}
        </style>

        <div class='visit-design-works' data-navbar="dark">
            <div class='runtime-consider-image'></div>
            <a class='visit-design-works-links-absolute-position' id='runtime-consider-link' href='https://mint-teams.web.app/runtime-consider/' target='_blank' rel='noopener noreferrer'></a>
        </div>
    `
}