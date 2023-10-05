

const getUsers = async () => { 
    try {
        const resp = await fetch("https://651da7e644e393af2d5a2461.mockapi.io/api/v1/users")
        const data = await resp.json();
        return data;
    
    } catch (err) {
        console.log(err);
        return [];
        
    }


}



const loadUserData =  async () => { 
    const users  = await getUsers();
    let strHTML = "";

    users.forEach( (user)=>{
        const { avatar, firstName, lastName } = user;

        strHTML += `<div class="col-md-3">
        <div class="card">
          <img src="${avatar}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${firstName} ${lastName}</h5>
          </div>
        </div>
      </div>`
    })

    document.getElementById("usersEl").innerHTML = strHTML;
}


 loadUserData();