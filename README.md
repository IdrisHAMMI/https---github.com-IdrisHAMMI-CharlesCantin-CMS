# Deploiment sur Netlify CMS

Pour les besoins de ce projet, je vais expliquer comment **j'ai déployé mon site web statique sur Netlify**.

Après avoir créé le compte, nous serons redirigés vers un tableau de bord personnel, pour ajouter notre site, nous devons aller dans l'onglet "Sites", ajouter un nouveau site et sélectionner "Importer un projet existant".

Le site Web nous renvoie à une autre page, qui nous demande de nous connecter à Github, GitLab ou BitBucket, qui sont tous des dépôts d'hébergement git.

Pour ce projet, je vais choisir Github car c'est là que mon code source est hébergé donc, il faudra selectioner Github et choisir un depot.
Après avoir sélectionné ce dépôt, vous serez invité à choisir un propriétaire, et à déployer sur la branche de votre choix. Dans mon cas, j'ai déployé mon référentiel 
sur Master.

Ensuite, en bas, il y aura une sélection de fenêtres avec de nombreuses options intitulées "Basic build settings".

Il est seulement nécessaire d'écrire des instructions dans cette section si votre site web est implémenté avec un générateur de site statique, dans lequel pour ce projet spécifique j'ai installé le générateur de site statique qui est Eleventy.

Le répertoire de base, n'est pas nécessaire à remplir car c'est un répertoire où Netlify installe les dépendances et lance la construction d'un site web sur commande, ce qui n'est utile que pour les monorepros, ou les sites web construits à partir d'un sous-répertoire d'un dépôt, alors que ce projet n'en a aucun.

La commande build est obligatoire dans ce cas, car elle construit et met à jour le site Web chaque fois que nous apportons une modification quelconque dans notre dépôt Github. La commande de base et universelle pour cela est "npm run build" ou "CI= npm run build".

Pour le répertoire de publication, je dois utiliser "_site" car c'est le répertoire pour déployer le site web après avoir exécuté la commande de construction, Eleventy utilise principalement _site car c'est la manière la plus sûre de déployer mais vous pouvez utiliser "public", "dist" ...

Après avoir entré ces commandes, vous pouvez maintenant appuyer sur le bouton "Deploy Site".

Si tout se passe bien, alors le site est en ligne ! Un lien généré aléatoirement vous sera donné pour que vous puissiez aller sur votre site web par la suite.
