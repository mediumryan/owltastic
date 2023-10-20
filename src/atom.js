import { atom } from 'recoil';
// import image files
import toyota from './Images/WorkImages/connected-services-plans.webp';
import swell from './Images/WorkImages/swell-home.webp';
import console from './Images/WorkImages/console-preview.webp';
import faculty from './Images/WorkImages/home-cropped.jpg';
import garden from './Images/WorkImages/coaches-high-res.webp';
import venture from './Images/WorkImages/vilcap-home-preview-desktop-high-res.webp';

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
