const API_KEY = "454c6ed4a3d5b8412eb5eced8391f0e9e97c6564";

const URL = `https://www.tokkobroker.com/api/v1/property/?lang=es_ar&key=${API_KEY}`;

const loader = document.getElementById("loader");
const propertiesGrid = document.getElementById("propertiesGrid");

fetch(URL)

.then(response => response.json())

.then(data => {

    console.log(data);

    loader.classList.add("hidden");

    if(data.objects.length === 0){

        propertiesGrid.style.display = "block";

    }else{

        console.log(data.objects);

        // Acá después renderizamos las cards

    }

})

.catch(error=>{

    console.error(error);

    loader.classList.add("hidden");

});