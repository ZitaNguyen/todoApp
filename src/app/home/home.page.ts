import {Component} from '@angular/core';
import {Task} from '../models/task';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    /**
     * Déclaration d'un tableau permettant de stocker les taches de notre utilisateur
     * ---------------------------------------------------------------
     * Ici, grace au typage, (Task[]) mon tableau ne pourra contenir que des elements de type "Task"
     */
    tasks: Task[] = [
        {
            id: 1,
            title: 'Faire la vaisselle',
            status: false
        },
        {
            id: 2,
            title: 'Faire le ménage',
            status: true
        },
        {
            id: 3,
            title: 'Sortir la poubelle',
            status: false
        }
    ]; // Fin du tableau tasks


    /**
    * Ici, je cree une variable "newTask" qui respectera le format d'une tache.
     * A savoir: un id, un title, et un status
     * -------------------------------------------
     * On dit que newTask est un objet de type Task
    */
    newTask: Task = new Task();

    saveTask() {
        // console.log(this.newTask.title);

        if (undefined !== this.newTask.title) {

            // Ajout de la tache dans le tableau
            this.tasks.push(this.newTask);

            // Creation d'une nouvelle tache
            this.newTask = new Task();
        }
    }


} // Fin de Home Page
