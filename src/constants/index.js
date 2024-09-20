import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Bienvenue sur mon Portfolio! Anciennement financière, me voilà maintenant à explorer les univers du front-end (ex: React.js) et du back-end (ex: Django & Laravel) depuis Janvier 2024. J'ai un profil Fullstack avec une préférence pour la partie backend. Je suis ouverte aux nouvelles stacks. Mon objectif est d'intégrer les bonnes pratiques du Développement Web pour créer des applications performantes et les expériences utlisateurs de demain. Pour ce faire, je recherche actuellement un contrat d'apprentissage de 12 mois dès Octobre 2024 (4jrs Entreprise + 1j Ecole).`;

export const ABOUT_TEXT = `Après un licenciement économique en 2023 dans la finance, je décide d'opérer une reconversion professionnelle. 

Je songe d'abord à reprendre mon activité de stratège en communication digitale en créant un site web personnalisé.

En faisant mes recherches, j'applique un tuto du créateur de contenus vidéos nommé Graven. Je réalise que coder me plaît beaucoup plus que reprendre mon activité initiale.

Désormais le besoin de me professionnaliser avec des experts sur les bonnes pratiques se fait sentir. Je me forme alors au métier de Développeuse Web Fullstack à ADA Tech School.

Depuis plusieurs mois maintenant, j'ai beaucoup appris par la documentation et les expériences des encadrants. Cela m'a permis de réaliser mes premiers projets personnels que je vous invite à regarder ci-dessous.

Au-delà de ça, je suis pianiste et je compose, j'aime lire des récits fictifs, la mode, et j'adore cuisiner des pâtisseries :)`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Formation Full Stack Developer",
    company: "ADA Tech School",
    description: `Apprentissage des langages de bases avec projets collectifs. Format: 9 mois de formation continue + 12 mois d'apprentissage en vue de passer le RNCP de niveau 6 (BAC+3/4).`,
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
    company: "",
    description: `Poste de commerciaux spécialisés en finance de marché entre France, Japon et Luxembourg`,
    technologies: ["relations clients", "analyse", "recueil des besoins"],
  },

];

export const PROJECTS = [
  {
    title: "Création d'une API",
    image: project3,
    description:
      "Structuration des Features, Création des Bases de Données et Routes, Tests.",
    technologies: ["Go", "Gin"],
    githubLink: "https://github.com/Mialy333/Go-APIRest"
  },
  {
    title: "Blog",
    image: project4,
    description:
      "Intégration d'images, ajout/édition/suppression d'articles et commentaires, gestion des données utilisateurs, articles, et commentaires.",
    technologies: ["Django REST Framework ", "CSS", "SQLite"],
    githubLink: "https://github.com/Mialy333/Blog-projet-personnel"
  },
  {
    title: "Application Web de Vote",
    image: project1,
    description:
      "Visualisation des sondages, Création d'un compte admin & Intégration des tests CSRF.",
    technologies: ["Django", "CSS"],
    githubLink: "https://github.com/Mialy333/Django-Polls-Testing"
  },
  {
    title: "Plateforme de microblogging (Collectif)",
    image: project2,
    description:
      "Visualisation des articles, création des posts, authentification des utilisateurs, gestion de la base de données.",
    technologies: ["Laravel", "PostgreSQL"],
    githubLink: "https://github.com/Mialy333/Microblogging"
  },
];


export const CONTACT = {
  email: "mialy.ratsimbazafy@gmail.com",
};
