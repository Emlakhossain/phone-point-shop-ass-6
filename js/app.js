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
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img style="width:200px;" src=${phone.image} class="card-img-top img-fluid mx-auto p-3" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to show that equal
                height action.</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
        </div>
    </div>
        `;
        searchResult.appendChild(div);

    })
}


