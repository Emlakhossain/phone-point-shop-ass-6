/*
load search text 
*/
const loadSearchText = () => {
    const searchField = document.getElementById('search-field'); const searchText = searchField.value;
    searchField.value = '';
    // console.log(searchText);
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}

const displayPhone = (phones) => {
    const searchResult = document.getElementById('search-result');
    phones.forEach(phone => {
        if (!phones) {
            return alert('please type again')
        }
        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML = `
        <div class="card h-100">
        <img style="width:200px;" src=${phone.image} class="card-img-top img-fluid mx-auto p-3" alt="...">
        <div class="card-body">
            <h5 class="card-title"> Name:${phone.phone_name}</h5>
            <p class="card-text">Brand:${phone.brand}</p>
            <p> Price:${phone.slug} </p>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto py-2">
  <button class="btn btn-primary" type="button">More Info</button>
  
</div>
    </div>
        `;
        searchResult.appendChild(div);

    })
}


