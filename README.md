Une ToDo list chargeable depuis un serveur via l'url https://jsonplaceholder.typicode.com/todos?_limit=5. 

L'utilisateur aura ensuite la possibilité de rajouter un élément à la liste de tâche à faire à l'aide du formulaire.
    - Fonction 'addElement' qui permet d'ajouter l'entrée de la balise 'input' à la liste de taches à faire losque l'utilisateur appuie sur le bouton 'Ajouter'.

Il pourra aussi supprimer une tâche à l'aide de l'icône en forme de corbeille. 
    - Fontion 'removeElement' qui permet de supprimer un element de la liste lorsqu'on appuie sur l'icône corbeille.

Enfin, un système de filtre permettra de masquer ou d'afficher les tâches en fonction de leur état.
    - Fonction 'filterElements' qui permet de filtrer les elements de la listes en trois catégories 'Toutes' - affiche les éléments dont la checkbox est cochée ou non, 'À faire' - éléments dont la checkbox n'est pas chochée, 'Faites' - éléments dont la checkbox est cochée.