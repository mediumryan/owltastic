import { atom } from 'recoil';
// import image files
import toyota from './Images/WorkImages/connected-services-plans.webp';
import swell from './Images/WorkImages/swell-home.webp';
import console from './Images/WorkImages/console-preview.webp';
import faculty from './Images/WorkImages/home-cropped.jpg';
import garden from './Images/WorkImages/coaches-high-res.webp';
import venture from './Images/WorkImages/vilcap-home-preview-desktop-high-res.webp';

// home page

export const workState = atom({
    key: 'work_state',
    default: [
        {
            id: 0,
            title: 'toyota',
            image_path: toyota,
        },
        {
            id: 1,
            title: 'swell',
            image_path: swell,
        },
        {
            id: 2,
            title: 'console',
            image_path: console,
        },
        {
            id: 3,
            title: 'faculty',
            image_path: faculty,
        },
        {
            id: 4,
            title: 'garden',
            image_path: garden,
        },
        {
            id: 5,
            title: 'venture',
            image_path: venture,
        },
    ],
});

export const aboutState = atom({
    key: 'about_state',
    default: [
        {
            id: 0,
            title: 'Dribbble’s Overtime Podcast',
            url: 'https://dribbble.com/overtime/2019/04/10/owltastic-s-meagan-fisher-on-adapting-to-the-modern-landscape-of-web-design',
            content:
                'Meagan Fisher on Adapting to the Modern Landscape of Web Design',
        },
        {
            id: 1,
            title: 'The Adobe Create Blog',
            url: 'https://creativecloud.adobe.com/cc/discover/article/balancing-form-and-function-a-conversation-with-digital-designer-meagan-fisher?locale=en',
            content:
                'Balancing Form and Function: A Conversation with Meagan Fisher',
        },
        {
            id: 2,
            title: 'The Yo! Podcast',
            url: 'https://yo.fm/couldwells',
            content:
                'The Couldwells: An Interview with Rob Hope of One Page Love',
        },
        {
            id: 3,
            title: 'Case Study',
            url: 'https://medium.com/@owltastic/helping-behavioral-scientists-create-behavior-change-for-good-dc120cfa9520',
            content:
                'Helping Behavioral Scientists Create Behavior Change for Good',
        },
        {
            id: 4,
            title: 'Case Study',
            url: 'https://medium.com/@owltastic/designing-a-marketing-concept-for-a-financial-software-company-476bfcb288d5',
            content:
                'Designing a Marketing Concept for a Financial Software Company',
        },
        {
            id: 5,
            title: 'Creative Bloq',
            url: 'https://www.creativebloq.com/business/meagan-fisher-business-design-91412936',
            content:
                'Featured Interview: Meagan Fisher on the Business of Design',
        },
    ],
});
