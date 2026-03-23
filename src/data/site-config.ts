import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://hernanbutler.github.io/',
    title: 'Hernan Butler',
    subtitle: 'Product Owner & PM Jr | Priorización | Discovery | Gestión de Backlog | Métricas de Producto | Transformando ideas en productos digitales mediante metodologías ágiles | Técnico en Desarrollo Web',
    description: '',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
       
    ],
    footerNavLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/hernanbutler/'
        }
    ],
    hero: {
        text: "👥 Actualmente me desempeño como Product Owner Junior y Project Manager en entornos ágiles, coordinando proyectos SaaS y de desarrollo web. En este rol me enfoco en backlog management, documentación funcional y la transformación de necesidades en soluciones digitales aplicando prácticas reales",
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        }
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
