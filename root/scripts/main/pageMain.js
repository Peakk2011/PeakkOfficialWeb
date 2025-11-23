import { Mint } from 'https://mint-teams.web.app/Mintkit/mint.js';
import { mainData } from './mainData.js';
import { navbar } from '../../component/navbar.js';
import { animBg } from '../../component/animationBackground.js';
 
const mainTemplate = () => {
    return `
        ${navbar()}
        ${animBg()}
    `
}

Mint.inject({
    html: {
        id: '#app',
        location: mainTemplate
    }
});