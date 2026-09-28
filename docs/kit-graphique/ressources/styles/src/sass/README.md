# la découpe sass
## le main.sass
- Les éléménets partiels en .sass sont signifiées avec un `_` en début de nom.
  - exemple: `_boutton.sass`

- Le `main.sass` sert à assembler tous les éléménts partiels .sass
## abstracts
> comment fonctionne mon design ?
> 
### _breakpoints.sass
- centraliser les brakpoints du site ici.
  - les breakpoints sont en __min-width__

### _mixins.sass
- centraliser les mixins du site ici.

### _variables.sass
- centraliser les variables du site ici.

## base
> Quelles sont mes règles globales ?
### _base.sass
- une base de règles pour le site... exemple: utiliser les fonts...

### _fonts.sass
- les fonts utilisées.
  - seront transformées en variables dans `_variables.sass`

### _palette_couleurs.sass
- palette de couleurs "brute" à réutiliser dans `_variables.sass` pour les couleurs du site
  - c-a-d dans ma paellte "brute" je nomme mes couleurs
  -  dans `_variables.sass` ici on nous demande d'utiliser primary, secondary, accent ...

### _reset.sass
- nos reset de margin, padding...

## layout
> Comment ma page est-elle structurée ?
- `_footer.sass` et `_header.sass` sont assez explicites...
  - on y définis le style particulier de leur élément.

### _grid.sass
- pour définir ici l'utilisation des grids


## components
> Quels sont les éléments réutilisatbles ?
- on définis ici le style des "composants" (éléments réutilisables) du site
  - ex: _boutton.sass, _caroussel.sass, _carte.sass, _alert.sass, _form.sass, _input.sass
...

## pages
> Qu'est ce aui est spécifique à ma page ?
- définis le style particulier des pages...


