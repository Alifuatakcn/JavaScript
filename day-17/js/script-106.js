
const searchShows = async (q) => { 
    const resp = await axios(`https://api.tvmaze.com/search/shows?q=${q}`)
    const data = await resp.data;
    return data;
 }



 document.getElementById("txtMovie").addEventListener("input", async (e)=>{
    const q = e.target.value;

    const shows = await searchShows(q);

    let strHTML = "";

    shows.forEach( (item)=> {
        console.log(item.show)
        strHTML += createShowCard(item.show)
    })

    document.getElementById("tvShows").innerHTML = strHTML;


 })




 const createShowCard = (show) => { 
    const { name, image } = show;
    return `<div class="col-6 col-md-3">
          <div class="card">
            <img src="${image?.medium}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
            </div>
          </div>
        </div>`
  
  }