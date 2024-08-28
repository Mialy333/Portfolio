import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Bienvenue dans mon univers! Je suis une Développeuse Web en formation à la recherche d'un contrat d'apprentissage de 12 mois à partir d'Octobre 2024 (4jrs en entreprise + 1j à l'école). Je renforce actuellement mes bases en Javascript, HTML et CSS. J'explore également l'univers des frameworks avec React.js, et le back-end avec Django et Node.js. Mon objectif est de monter en expertise pour créer des expériences utlisateurs immersives, personnalisées et génératrices de revenus.`;

export const ABOUT_TEXT = `Après un licenciement économique en 2023 dans la finance, je décide d'opérer une reconversion professionnelle. 

Je songe d'abord à reprendre mon activité de stratège en communication digitale en refaisant mes pages de vente avec quelques notions d'API.

En faisant mes recherches, j'applique un tuto du créateur de contenus vidéos nommé Graven. Je réalise que coder me plaît beaucoup plus que reprendre mon activité initiale.

Mais le besoin de me professionnaliser avec des experts sur les bonnes pratiques se fait sentir. Je me forme alors au métier de Développeuse Web Fullstack à ADA Tech School.

J'ai une appétence pour le frontend via React.js et la programmation orientée objet sur Javascript. Je reste ouverte à d'autres langages et frameworks backend (ex: Django) pour créer des sites Web et des applications modernes. Une préférence pour MongoDB pour la gestion de base de données non-relationnelle.

Au-delà de ça, je suis pianiste et je compose, j'aime lire des récits fictifs, la mode, et j'adore cuisiner des pâtisseries :)`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Formation Full Stack Developer",
    company: "ADA Tech School",
    description: `Apprentissage des langages de bases avec projets collectifs. Format: 9 mois de formation continue + 12 mois d'apprentissage en vue de passer le RNCP de niveau 6 (BAC+3/4). BIEN DETAILLER les projets collectifs.`,
    technologies: ["HTML", "CSS", "Javascript", "Django", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2019 - 2021",
    role: "Entreprenariat",
    company: "Mialy Ericka",
    description: `Stratégie de communication digitale pour les femmes entrepreneures`,
    technologies: ["relations clients", "création de produit", "itération", "recueil des besoins"],
  },

  {
    year: "2017 - 2023",
    role: "Financial Markets",
    company: "A voir",
    description: `Poste de commerciaux spécialisés en finance de marché entre France, Japon et Luxembourg`,
    technologies: ["relations clients", "analyse", "recueil des besoins"],
  },

];

export const PROJECTS = [
  {
    title: "Fullstack Portfolio - Frontend",
    image: project3,
    description:
      "Interface minimaliste présentant l'ensemble de mes expériences, réalisations et mes informations de contact.",
    technologies: ["React", "Framer Motion"],
  },
  {
    title: "Blog : Fullstack en Vrac - Fullstack",
    image: project4,
    description:
      "Les tribulations d'une ancienne financière devenue développeuse web fullstack. Une plateforme de création et publication de posts avec insertion d'images et textes, la possibilité d'éditer, de commenter les articles. Gestion du back-end avec la création d'un compte Admin.",
    technologies: ["HTML", "Tailwind", "Django"],
  },
  {
    title: "Tracker d'habitudes pour Multipotentiels - Programmation Orientée Objet",
    image: project1,
    description:
      "(approche POO pour la partie code métier) Une application pour gérer les tâches, les envies et les projets des personnes au profil dit Multipotentiels. Possbilité de créer des tâches, les éditer et analyser la progression, calcul des profils avec des intérêts similaires.",
    technologies: ["Nuxt", " Ou Sveltekit"],
  },
  {
    title: "Art & Piano - Frontend",
    image: project2,
    description:
      "Play automatique - transition smooth - soundwave - Lien vers l'image, lecture mp3, bouton précédent-suivant - Plateforme créative mêlant mes compositions personnelles au piano avec des oeuvres d'art. Gestion des API Restful.",
    technologies: ["Figma", "Vue", "les3.dev"],
  },
];


export const CONTACT = {
  email: "mialy.ratsimbazafy@gmail.com",
};
