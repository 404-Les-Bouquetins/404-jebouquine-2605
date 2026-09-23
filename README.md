# jebouquine

> Une librairie en ligne moderne, simple et chaleureuse, pensée pour retrouver l'expérience et l'authenticité d'une librairie traditionnelle sur le Web.

**JeBouquine.com** est un projet de site e-commerce spécialisé dans la vente de livres, développé par l'équipe **404 Les Bouquetins** dans le cadre des formations **Concepteur Développeur d'Applications (CDA)** et **Développeur Web et Web Mobile (DWWM)**.

---

## Le projet

JeBouquine a pour objectif de proposer une alternative aux grandes plateformes généralistes telles qu'Amazon ou la Fnac.

L'objectif n'est pas de reproduire leur modèle, mais de proposer une expérience davantage centrée sur le lecteur et la découverte :

- une navigation simple et intuitive ;
- une identité visuelle forte ;
- une interface moderne aux influences vintage ;
- une ambiance chaleureuse et authentique ;
- une expérience inspirée des librairies traditionnelles ;
- des outils facilitant la recherche et la découverte de nouveaux ouvrages.

La première version de JeBouquine est destinée au **marché français**, avec la possibilité d'une évolution vers l'international.

---

## Fonctionnalités principales

### Catalogue

Le catalogue permet de parcourir les ouvrages par catégories et de découvrir les nouveautés et recommandations.

La recherche peut être effectuée par :

- titre ;
- auteur ;
- ISBN ;
- éditeur ;
- catégorie.

Une **recherche avancée** complète la recherche simple grâce à un système de filtres.

La prise en charge des **livres audio** est également envisagée.

### Fiches livres

Chaque ouvrage dispose d'une fiche détaillée comprenant notamment :

- couverture ;
- titre ;
- résumé / synopsis ;
- auteur ;
- éditeur ;
- ISBN ;
- prix ;
- disponibilité ;
- description ;
- avis clients.

### Avis clients

Afin de garantir que les avis reposent sur une expérience réelle :

- seuls les utilisateurs ayant acheté un ouvrage peuvent publier un avis ;
- les utilisateurs peuvent signaler un avis inapproprié ;
- les avis signalés sont masqués et soumis à modération.

### Compte client

L'espace personnel permet notamment de :

- créer et gérer son compte ;
- gérer ses informations personnelles ;
- consulter ses commandes ;
- gérer ses préférences littéraires ;
- recevoir des recommandations personnalisées ;
- gérer ses notifications ;
- créer et gérer une liste de souhaits.

### Panier et commandes

Le panier permet :

- l'ajout d'articles ;
- la suppression avec confirmation ;
- la modification des quantités ;
- l'ajout d'une option cadeau ;
- la personnalisation de l'emballage et d'une carte.

Plusieurs modes de livraison sont prévus ou envisagés :

- livraison à domicile ;
- retrait en librairie locale ;
- livraison en point relais.

La liste des transporteurs reste à définir.

### Paiement sécurisé

Le site proposera un système de paiement sécurisé.

Les solutions envisagées sont :

- carte bancaire ;
- PayPal ;
- Stripe.

### Liseuse en ligne

JeBouquine prévoit également une **liseuse Web** permettant de consulter des ouvrages directement depuis le navigateur.

Son fonctionnement exact reste à définir en fonction :

- des droits d'exploitation des œuvres ;
- du type de contenu numérique disponible ;
- des modalités d'accès retenues : achat, abonnement, extrait gratuit, etc.

### Administration

Un back-office permettra aux administrateurs de gérer :

- les livres ;
- les catégories ;
- les commandes ;
- les utilisateurs ;
- les avis ;
- la modération.

---

## Identité visuelle

La direction artistique de JeBouquine associe **modernité et authenticité**.

L'interface doit rester épurée et contemporaine tout en intégrant des éléments rappelant l'univers des librairies traditionnelles et du livre papier.

L'objectif est de créer une identité forte et reconnaissable, sans tomber dans une esthétique excessivement rétro.

---

## Accessibilité et expérience utilisateur

La simplicité d'utilisation constitue l'un des axes principaux du projet.

Le site devra notamment :

- respecter les standards d'accessibilité ;
- proposer une navigation claire et intuitive ;
- être responsive et fonctionner sur ordinateur, tablette et smartphone ;
- proposer une aide contextuelle adaptée à la page consultée ;
- rester rapide et performant ;
- être optimisé pour le référencement naturel.

---

## Architecture générale

Le projet couvre l'ensemble d'une application Web full-stack :

```text
JeBouquine
│
├── Front-end
│   ├── Interface utilisateur
│   ├── Catalogue
│   ├── Recherche
│   ├── Fiches livres
│   ├── Panier
│   ├── Compte client
│   └── Liseuse
│
├── Back-end
│   ├── Authentification
│   ├── Gestion du catalogue
│   ├── Commandes
│   ├── Avis et modération
│   ├── Recommandations
│   └── Administration
│
└── Base de données
    ├── Utilisateurs
    ├── Livres
    ├── Commandes
    ├── Avis
    └── Données applicatives
```

---

## Contraintes du projet

JeBouquine devra être :

- **responsive** ;
- **accessible** ;
- **rapide et performant** ;
- **simple d'utilisation** ;
- **optimisé pour le référencement naturel (SEO)** ;
- conçu selon les bonnes pratiques de **sécurité** ;
- maintenable et évolutif.

---

## Évolutions envisagées

Plusieurs fonctionnalités pourront compléter le projet à terme :

- ouverture à l'international ;
- achat et revente de livres d'occasion ;
- application mobile dédiée ;
- application desktop dédiée ;
- développement des fonctionnalités liées aux livres numériques.

---

## Stack technique

La stack technique sera complétée au fur et à mesure des choix effectués pendant le développement.

| Domaine | Technologie |
| --- | --- |
| Front-end | À définir |
| Back-end | À définir |
| Base de données | À définir |
| API | À définir |
| Tests | À définir |
| Déploiement | À définir |

---

## Organisation Git

Le projet est développé de manière collaborative au sein de l'organisation GitHub **404-Les-Bouquetins**.

Organisation des branches envisagée :

```text
main
│
└── develop
    ├── feature/...
    ├── fix/...
    └── ...
```

Les nouvelles fonctionnalités sont développées dans des branches dédiées avant leur intégration dans la branche de développement.

Les conventions Git et les règles de contribution pourront être détaillées dans un fichier `CONTRIBUTING.md`.

---

## Équipe

### 404 Les Bouquetins

Projet réalisé par une équipe de **4 développeurs** issus des formations :

- **CDA** — Concepteur Développeur d'Applications ;
- **DWWM** — Développeur Web et Web Mobile.

**Organisation GitHub :** `404-Les-Bouquetins`

---

## Documentation

La documentation du projet comprend notamment :

- le cahier des charges et les spécifications ;
- l'analyse des besoins ;
- les wireframes ;
- les maquettes graphiques ;
- les prototypes interactifs ;
- la documentation technique ;
- la documentation de la base de données.

Ces documents seront ajoutés au dépôt au fur et à mesure de l'avancement du projet.

---

## État du projet

**Projet en cours de développement.**

Les fonctionnalités, choix techniques et éléments graphiques présentés dans ce dépôt sont susceptibles d'évoluer au cours de la conception et du développement.

---

<p align="center">
  <strong>JeBouquine.com</strong><br>
  <em>Le plaisir d'une librairie, en ligne.</em>
</p>

<p align="center">
  Développé par <strong>404 Les Bouquetins</strong>
</p>
