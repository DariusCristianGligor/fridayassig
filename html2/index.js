let postPeopleCards = (jsPeopleArray) => {
    let html = '';
    jsPeopleArray
        .map((person) => {
            let k=``;
            for(let film of person.films)
 {
    let arrayFilms=film.split('/');
   let a=arrayFilms.length;
   a=a-2;
   k+=`&${arrayFilms[a]}`;
 }
            html += `
    <div class="people", id="element">
    <p>Name: ${person.name}</p>
    <p>Skin color: ${person.skin_color}</p>
    <p>Hair:${person.height}</p>
    <p>Mass:${person.mass}</p>
    <a href="films.html?${k}">
        <button class="Button">
            Show Films
        </button>
    </a>
    </button>
`
html += `
</ul>

    </div>`   
}
  ); 
   document.getElementById("peopleDiv").innerHTML=html;
}
let getAllThePeople = async () => {

    const people = await fetch('https://swapi.dev/api/people').then(obj => obj.json());
    postPeopleCards(people.results);
}

let showMovies=async (x)=>{
   let movieTitles=[];
   for(let c of x)
   {   
       const title=await fetch(c)
       .then(obj => obj.json());
       movieTitles.push(title.title);
   }
   html=``;
   movieTitles.map((title) => {
    html += `<li>${title}</li>
`;
}
);
  
 return html;
}
getAllThePeople();

let darkMode=()=>{
    var btnOnOf = document.getElementById("btnOnOf");
    var body=document.getElementById("body");
    var divPeople=document.getElementsByClassName("people");

    console.log("in button");
    if(btnOnOf.innerHTML==="Dark Mode")
    {
        body.style.background="black";
        btnOnOf.innerHTML="Blue Mode";
        for( let x of divPeople)
        {
            x.style.background="rgb(66, 64, 64)";
        }
    }
    else{
        btnOnOf.innerHTML="Dark Mode";
        for( let x of divPeople)
        {
            x.style.background="dodgerblue";
        }
        body.style.background="rgb(207, 194, 194)";
    }

    
}

  