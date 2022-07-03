document.addEventListener('DOMContentLoaded',()=> {





const selectDrop = document.querySelector('#countries');


fetch('http://restcountries.eu/rest/v2/all').then(res => {
    return res.json();
}).then(data => {
   let output ="";
   data.forEach(country => {
       output += <option>${country.Name}</option>;
   })

   selectDrop.innerHTML = output;
}).catch(err => {
    console.log(err);
})













})