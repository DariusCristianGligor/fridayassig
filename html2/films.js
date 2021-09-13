let postAllFilms=(films)=>
{
let actorIndexFilms=window.location.href.split("&");
let html=``;
html += `
    <div class="listDiv">
    <p>Films:</p>
    <ul>
`
   
for(let j of films)
{
    {
        if(actorIndexFilms.includes(j.episode_id.toString()))
            {console.log(j.title);
               html+=`<li>${j.title}</li>`;    
            }
    }
}
html += `
</ul>

    </div>`
    document.getElementById("peopleDiv").innerHTML=html;
}
let getAllFilms= async()=>{

      const films=await fetch('https://swapi.dev/api/films').then(obj => obj.json());
    const filmsArray=films.results;
    console.log(filmsArray);
    postAllFilms(filmsArray);
}
getAllFilms();