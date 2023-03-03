// Fetch Date for show ai card Start 
const aiCards = async (dataLimit) => {
  let URL = 'https://openapi.programming-hero.com/api/ai/tools'
  let res = await fetch(URL)
  let data = await res.json()
  displayAiCards(data.data.tools, dataLimit);
}
// Fetch Date for show ai card End


// Display Card Start 
const displayAiCards = (data, dataLimit) => {

  // display maximum 6 Ai Tools Start
  let showAllDateContainer = document.getElementById('showAllDateContainer');
  if (dataLimit && data.length > 6) {
    data = data.slice(0, 6);
    showAllDateContainer.classList.remove('hidden');
  }
  else {
    showAllDateContainer.classList.add('hidden');
  }
  // display maximum 6 Ai Tools Start

  //  display all ai tools  start
  data.forEach(data => {
    document.getElementById('aiCardContainer').innerHTML += `   
      <div class="card mt-3 w-96 bg-base-100 shadow-xl border ">
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
              <label  for="my-modal-3" class="btn btn-outline btn-error text-sm font-bold">Details</label >               
          </div>
       </section>         
      </div>
    </div> 
      `
  })
   // stop spinner or loader
   toggleSpinner(false);
  //  display all ai tools  end
  // console.log(data, dataLimit);
}
// Display Card End

// "showAllDateBtn" for show all ai Card [Start] 
document.getElementById('showAllDateBtn').addEventListener('click',function(){
  // start spinner or loader
  toggleSpinner(true);
  document.getElementById('aiCardContainer').textContent = ''
  aiCards()
  showAllDateContainer.classList.add('hidden');
})
// "showAllDateBtn" for show all ai Card [End] 

// Loder of Spinner Start 
const toggleSpinner = isLoading => {
  const loaderSection = document.getElementById('lodder');
  if(isLoading){
      loaderSection.classList.remove('hidden')
  }
  else{
      loaderSection.classList.add('hidden');
  }
}
// Loder of Spinner End 

// start spinner or loader
toggleSpinner(true)
aiCards(6)
// toggleSpinner(false)