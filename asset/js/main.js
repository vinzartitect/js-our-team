// Per la pagina 'Chi siamo' del nostro sito aziendale, dobbiamo sviluppare la sezione "Il nostro team".
// Definiamo un array di oggetti che rappresentano i membri del team. 
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Milestone 1: stampare in console l'elenco dei membri del team, 
// scrivendo separatamente i dettagli di ciascun componente.
// Milestone 2: stampare i dati all'interno di un contenitore nella pagina html in modo dinamico, 
// creando per ciascun membro del team un elemento che conterrà i suoi dati.
// BONUS: stilizziamo la sezione realizzando le card di ciascun membro del team, come nel mockup allegato.

// creazione array di oggetti
let listaTeam = [
    {
        'Nome' : 'Wayne Barnett',
        'Ruolo' : 'Founder & CEO',
        'Foto' : 'wayne-barnett-founder-ceo.jpg',
    },
    {
        'Nome' : 'Angela Caroll',
        'Ruolo' : 'Chief Editor',
        'Foto' : './angela-caroll-chief-editor.jpg',
    },
    {
        'Nome' : 'Walter Gordon',
        'Ruolo' : 'Office Manager',
        'Foto' : './walter-gordon-office-manager.jpg',
    },
    {
        'Nome' : 'Angela Lopez',
        'Ruolo' : 'Social Media Manager',
        'Foto' : './angela-lopez-social-media-manager.jpg',
    },
    {
        'Nome' : 'Scott Estrada',
        'Ruolo' : 'Developer',
        'Foto' : './scott-estrada-developer.jpg',
    },
    {
        'Nome' : 'Barbara Ramos',
        'Ruolo' : 'Graphic Designer',
        'Foto' : './barbara-ramos-graphic-designer.jpg',
    }
];

console.log(listaTeam);

console.log(listaTeam[0].Nome);

// metodo per stampare tutti i valori
for ( let i = 0; i < listaTeam.length; i++ ) {

    for ( let key in listaTeam[i]) {

        console.log(listaTeam[i][key]);
        console.log(key);

    }
}



// metedo per stampare a video tutte le info
for ( let i = 0; i < listaTeam.length; i++ ) {

    document.getElementById("teamContainer").innerHTML +=
    `
    <div class="card mb-5">
       <img src="./asset/img/${listaTeam[i]["Foto"]}" class="card-img-top" alt="...">
       <div class="card-body">
          <h5 class="card-title">${listaTeam[i]["Nome"]}</h5>
          <p class="card-text">${listaTeam[i]["Ruolo"]}</p>
       </div>
    </div>    
    
    `;

}