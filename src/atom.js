import { atom } from 'recoil';
// import image files
import toyota from './Images/WorkImages/connected-services-plans.webp';
import swell from './Images/WorkImages/swell-home.webp';
import console from './Images/WorkImages/console-preview.webp';
import faculty from './Images/WorkImages/home-cropped.jpg';
import garden from './Images/WorkImages/coaches-high-res.webp';
import venture from './Images/WorkImages/vilcap-home-preview-desktop-high-res.webp';

// for header

export const headerMenuState = atom({
    key: 'header_menu_state',
    default: [
        {
            id: 0,
            value: 'HOME',
            linkTo: '/',
            isActive: true,
        },
        {
            id: 1,
            value: 'WORK',
            linkTo: '/work',
            isActive: false,
        },
        {
            id: 2,
            value: 'WORDS',
            linkTo: '/words',
            isActive: false,
        },
        {
            id: 3,
            value: 'ABOUT',
            linkTo: '/about',
            isActive: false,
        },
        {
            id: 4,
            value: 'CONTACT',
            linkTo: '/contact',
            isActive: false,
        },
    ],
});

// for home page

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

// for work page

export const workListState = atom({
    key: 'work_list_state',
    default: [
        {
            id: 0,
            content: 'Audio Multimedia and Connected Services experiences',
            image_path:
                'https://owltastic.com/img/portfolio/toyota/connected-services-plans.webp',
            url: 'https://owltastic.com/projects/toyota-product-redesign.html',
            client: 'Toyota, via Saatchi & Saatchi',
        },
        {
            id: 1,
            content:
                'Information architecture, content strategy, brand refresh, and marketing site redesign',
            image_path:
                'https://owltastic.com/img/portfolio/swell/swell-home.webp',
            url: 'https://owltastic.com/projects/swell-marketing-redesign.html',
            client: 'Swell, via Faculty',
        },
        {
            id: 2,
            content:
                'UX design, product strategy, and visual design for a project management tool',
            image_path:
                'https://owltastic.com/img/portfolio/console/console-preview.webp',
            url: 'https://owltastic.com/projects/console-product-design.html',
            client: 'Faculty',
        },
        {
            id: 3,
            content: 'UX and visual design for a marketing website',
            image_path:
                'https://owltastic.com/img/portfolio/faculty/home-cropped.jpg',
            url: 'https://owltastic.com/projects/faculty-agency-marketing-site.html',
            client: 'Faculty',
        },
        {
            id: 4,
            content: 'Three portfolio design templates',
            image_path:
                'https://owltastic.com/img/portfolio/interior-design/homepage-preview.webp',
            url: 'https://owltastic.com/projects/interior-designer-portfolio.html',
            client: 'Adobe',
        },
        {
            id: 5,
            content: 'Marketing site design for a venture capital firm',
            image_path:
                'https://owltastic.com/img/portfolio/village-capital/home-preview.webp',
            url: 'https://owltastic.com/projects/venture-capital-landing-page.html',
            client: 'Village Capital',
        },
        {
            id: 6,
            content: 'Poetry discovery website and build',
            image_path:
                'https://owltastic.com/img/portfolio/verse/home-max.webp',
            url: 'https://owltastic.com/projects/poetry-discovery-website.html',
            client: 'Verse',
        },
        {
            id: 7,
            content: 'Web and product design for a home gardening startup',
            image_path:
                'https://owltastic.com/img/portfolio/gardenary/coaches-high-res.webp',
            url: 'https://owltastic.com/projects/garden-startup-design.html',
            client: 'Gardenary',
        },
        {
            id: 8,
            content: 'Design series focused on world-changing women',
            image_path:
                'https://owltastic.com/img/portfolio/celebrate-good/zitkala-sa-preview.webp',
            url: 'https://owltastic.com/projects/celebrate-the-good-profiles.html',
            client: 'Adobe',
        },
        {
            id: 9,
            content: 'Web and product design for a psychology product',
            image_path: 'https://owltastic.com/img/portfolio/bcfg/preview.jpg',
            url: 'https://owltastic.com/projects/behavior-change-product-app.html',
            client: 'University of Pennsylvania',
        },
        {
            id: 10,
            content:
                'Website designs and UI kits for nonprofit and ecommerce websites',
            image_path:
                'https://owltastic.com/img/portfolio/pet-booking/ui-kit.jpg',
            url: 'https://owltastic.com/projects/adobe-ui-kits.html',
            client: 'Adobe',
        },
        {
            id: 11,
            content: 'Website design for a fintech company',
            image_path:
                'https://owltastic.com/img/portfolio/fintech-website/website.jpg',
            url: 'https://owltastic.com/projects/financial-software-website.html',
            client: 'Openfin',
        },
        {
            id: 12,
            content: 'Landing page and advertising campaign',
            image_path:
                'https://owltastic.com/img/portfolio/scroll-landing-page/mobile.webp',
            url: 'https://owltastic.com/projects/scroll-landing-page.html',
            client: 'Scroll',
        },
        {
            id: 13,
            content: 'Bausaus inspired landing page design',
            image_path:
                'https://owltastic.com/img/portfolio/bauhaus-type/bauhaus-homepage.webp',
            url: 'https://owltastic.com/projects/bauhaus-inspired-landing-page.html',
            client: 'Adobe',
        },
    ],
});
