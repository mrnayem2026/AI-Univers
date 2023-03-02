const loadAiDate = async() => {
    const URL = ` https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(URL)
    const date = await res.json()
    showAiData(date.data.tools);
}

const showAiData = (data) =>{
    console.log(data[0].published_in);
   data = data.splice(0,6)
    data.forEach( data => {
       document.getElementById('aiCardContainer').innerHTML  += `   
       <div class="card w-96 bg-base-100 shadow-xl border">
       <figure class="px-10 pt-10">
         <img src="${data.image}" alt="Shoes" class="Ai Tools" />
       </figure>
       <div class="card-body">
         <h2 class="text-3xl  font-black">Features</h2>
         <p class="font-normal text-sm">1. <span>${data.features[0]}</span></p>
         <p class="font-normal text-sm">2. <span>${data.features[1]}</span></p>
         <p class="font-normal text-sm">3. <span>${data.features[2]}</span></p>
         <hr class="border">
      
        <section class="flex justify-between">
           <div>
               <h1 id="cardTitle" class="text-3xl  font-black">${data.name}</h1> <br>
               <p><img src="./icon/icon.png" alt="Date Icon" class="inline" > ${data.published_in} </p>
           </div>
           <div class="card-actions pt-5">
               <button class="btn btn-outline btn-error text-sm font-bold">Details</button>
             </div>
        </section>
         
       </div>
     </div>       
       `

    })
}

loadAiDate()