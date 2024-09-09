# Objectif:

Développer une interface utilisateur (UI) cohérente et réutilisable en utilisant ReactJS et un Design System. L'application sera un mini-jeu de composition de potions magiques.
Contexte du Projet:
Le but est de concevoir une interface utilisateur qui permet aux utilisateurs de sélectionner et combiner des ingrédients pour créer des potions magiques, tout en respectant les principes d'un design system pour assurer la cohérence et la réutilisabilité des composants UI.
Détails Techniques:
Frontend (React):
Création et Utilisation de Composants UI: Développer des composants réutilisables pour les différentes parties de l'application (boutons, listes, formulaires, cartes, etc.) en suivant les principes d'un design system.
Pages et Composants:
1. Page de Sélection et Combinaison d'Ingrédients:
    * Composant de Sélection d'Ingrédients (Dropdowns, Listes).
    * Composant de Combinaison (Boutons, Formulaire de Soumission).
2. Page des Recettes Découvertes et Potions Créées:
    * Composant de Liste de Recettes (Cartes, Listes).
    * Composant de Détails de Potion (Modal, Pop-up).
3. Page de Gestion de l'Inventaire:
    * Composant de Liste d'Ingrédients (Tableau, Listes avec Quantités).
    * Composant de Modification de Quantité (Boutons d'Incrément/Decrément, Formulaires).
Ingrédients Disponibles:
* Argent, Bave de lama, Épine de hérisson, Plume de griffon, Hélium liquide, Poil de yéti, Or, Azote liquide, Queue d'écureuil, Crin de licorne, Jus de Horglup, Noix de coco, Yttrium, Mandragore.
Recettes de Potions:
* Potion d'invisibilité: Noix de coco, Yttrium, Mandragore
* Potion d'amour: Bave de lama, Plume de griffon, Hélium liquide
* Potion de jeunesse: Or, Crin de licorne, Azote liquide
* Potion d'immortalité: Poil de yéti, Jus de Horglup, Argent
* Potion de Clairvoyance: Épine de hérisson, Jus de Horglup, Noix de coco
* Potion de Force: Poil de yéti, Or, Argent
* Potion de Vitesse: Hélium liquide, Plume de griffon, Azote liquide
* Potion de Guérison: Crin de licorne, Mandragore, Bave de lama
* Potion de Transformation: Queue d'écureuil, Yttrium, Épine de hérisson
Fonctionnalités Supplémentaires:
* Interface Réactive et Attrayante: Utilisation de CSS-in-JS (Styled Components, Emotion) ou bibliothèques UI (Material-UI, Ant Design) pour une interface attrayante et réactive.
* Tests Unitaires: Création de tests unitaires  / E2E  pour chaque composant UI et page avec Jest, Cypress et React Testing Library.
Structure du Design System
1. Composants Atomes:
* Bouton (Button): Différents styles et tailles.
* Entrée (Input): Champs de texte, sélecteurs.
* Icones (Icons): Pour l'ajout, la suppression, etc.
2. Composants Molécules:
* Carte d'Ingrédient (Ingredient Card): Affichage des détails d'un ingrédient.
* Formulaire de Combinaison (Combination Form): Pour sélectionner et combiner des ingrédients.
3. Composants Organismes:
* Liste d'Ingrédients (Ingredient List): Affichage de tous les ingrédients avec quantités.
* Liste de Recettes (Recipe List): Affichage des recettes découvertes.
4. Templates:
* Page de Sélection: Combinaison des composants pour la sélection d'ingrédients.
* Page de Recettes: Affichage des recettes et potions créées.
* Page d'Inventaire: Gestion et mise à jour de l'inventaire.
5. Pages:
* Intégration des templates pour former les pages finales de l'application.

