# CV en Ligne — Racine FAYDIOR
> **Responsable Pôle Fibre Optique & Conduite de Travaux Télécoms** (FTTH / GPON / FTTM / Backbone)

Ce projet est une vitrine professionnelle cinématographique et interactive conçue selon les standards du design **Preset C — « Signal Brut »** (Tech Direct : Bleu Signal `#2563EB`, fond technique, typographies *Space Grotesk*, *DM Serif Display* et *Space Mono*, animations GSAP 3 avec ScrollTrigger, micro-interactions magnétiques et tableau de bord de compétences).

---

## 🚀 Consultation Immédiate

Vous pouvez ouvrir et explorer le CV dès maintenant, **sans aucune installation préalable** :
- **Double-cliquez simplement sur le fichier `index.html`** dans l'explorateur Windows pour l'ouvrir dans Chrome, Edge ou votre navigateur favori.
- Tous les scripts (animations GSAP, ScrollTrigger, icônes Lucide, jauges interactives) s'exécutent de façon fluide et réactive.
- Le bouton **« Télécharger mon CV »** télécharge directement votre fichier PDF certifié `CV Racine FAYDIOR.pdf` déjà présent dans le dossier.

---

## 🛠️ Architecture du Projet

Le projet a été développé avec une double structure :

1. **Version Autonome (`index.html`)** :
   - Fichier complet prêt pour la consultation immédiate ou l'hébergement statique (GitHub Pages, Netlify Drag & Drop, etc.).
   
2. **Version Modulaire React 19 + Tailwind CSS + Vite (`src/`)** :
   - `src/App.jsx` : Composant React complet avec `gsap.context()` et ScrollTrigger.
   - `src/index.css` : Configuration Tailwind CSS, textures SVG `<feTurbulence>` et animations.
   - `package.json` : Dépendances modernes (React 19, Lucide React, GSAP, Vite).

---

## 💻 Exécution en Mode Développement (Optionnel avec Node.js)

Si vous installez [Node.js](https://nodejs.org/) sur votre machine :

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement local
npm run dev

# 3. Compiler pour la production
npm run build
```

---

## 🌐 Déploiement en Ligne (Gratuit en 2 minutes)

- **Sur Vercel** : Importez le dépôt ou glissez-déposez le dossier sur [vercel.com](https://vercel.com).
- **Sur Netlify** : Glissez-déposez directement le dossier sur [app.netlify.com/drop](https://app.netlify.com/drop).
- **Sur GitHub Pages** : Activez GitHub Pages dans les paramètres de votre dépôt GitHub en sélectionnant la branche principale.
