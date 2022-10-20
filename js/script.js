/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede e stilarli a vostro gusto :leichtes_lächeln:
BONUS 3:
Aggiungere attraverso un form un membro al team */

// creo array con dati oggetti:

const team = [
    {
       'name': 'Wayne',
       'last_name': 'Barnett',
       'role': 'Founder &amp; CEO',
       'image': './img/wayne-barnett-founder-ceo.jpg'
    },

    {
        'name': 'Angela',
        'last_name': 'Caroll',
        'role': 'Chief Editor',
        'image': './img/angela-caroll-chief-editor.jpg'
    },

    {
        'name': 'Walter',
        'last_name': 'Gordon',
        'role': 'Office Manager',
        'image': './img/walter-gordon-office-manager.jpg'
    },

    {
        'name': 'Angela',
        'last_name': 'Lopez',
        'role': 'Social Media Manager',
        'image': './img/angela-lopez-social-media-manager.jpg'
    },

    {
        'name': 'Scott',
        'last_name': 'Estrada',
        'role': 'Developer',
        'image': './img/scott-estrada-developer.jpg'

    },

    {
        'name': 'Barbara',
        'last_name': 'Ramos',
        'role': 'Graphic Designer',
        'image': './img/barbara-ramos-graphic-designer.jpg'
    }

]
console.log(team);

// stampo dati di ogni membro in console e poi in DOM + aggiungo foto:

const container = document.querySelector('.container');

for(i in team){
    console.log(team[i]);

    const infoDiv = document.createElement('div');
    container.append(infoDiv);
    const member = team[i];
    infoDiv.innerHTML = member.name + " " + member.last_name + "<br>ruolo: " + member.role + "<br>" + "<img src="+ member.image+ ">"
}

