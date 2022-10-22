// creo array con dati oggetti:

const team = [
    {
       name: 'Wayne',
       last_name: 'Barnett',
       role: 'Founder &amp; CEO',
       image: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela',
        last_name: 'Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter',
        last_name: 'Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela',
        last_name: 'Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott',
        last_name: 'Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'

    },

    {
        name: 'Barbara',
        last_name: 'Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }

]
console.log(team);

// creo row dove posizionare i div dei singoli membri:
const container = document.querySelector('.container');

function createAllCards(){
    const row = document.createElement('div');
    row.className = 'row';
    for(let i = 0; i < team.length; i++){
        console.log(team[i]);
        const member = team[i];
        const template = printOneCard(member);
        row.innerHTML += template;   
    }    
}
createAllCards();

// funzione per creare un singolo div (card membro con nome + ruolo + foto):
function printOneCard(member){
        const infoDiv = document.createElement('div');
        container.append(infoDiv);
        infoDiv.innerHTML = "<div class='text-style'>" +  
        member.name + " " + member.last_name + "<br>" + "<em>" + member.role +"</em>" + "</div>" + "<br>" + "<img class='img-properties' src=./img/" + member.image + ">"

        return infoDiv;
}

const addBtn = document.getElementById('add-btn');
const submitBtn = document.getElementById('submit');

//funzione per aggiungere il form al click sul button "add member":
function addForm(){
    const newForm = document.getElementById('new-member-form').classList.remove("d-none");
    newForm.classList.add("show");
}

//funzione per raccogliere i dati dal form e generare una nuova card membro:
function collectData(){

    let newName = document.getElementById('field-name').value;
    let newLastName = document.getElementById('field-last-name').value;
    let newRole = document.getElementById('field-role').value;
    let newImage = document.getElementById('field-image').value;

    const newMember = {
        name: newName,
        last_name: newLastName,
        role: newRole,
        image: newImage
    }
    team.push(newMember);
    console.log(newMember); 
    const newInfoDiv = printOneCard(newMember);
    container.append(newInfoDiv); 
   
    document.getElementById('field-name').value = '';
    document.getElementById('field-last-name').value = '';
    document.getElementById('field-role').value = '';
    document.getElementById('field-image').value = '';
}

addBtn.addEventListener('click', addForm);

submitBtn.addEventListener('click', collectData);


