let datefromApi = async()  =>{
    const URL = ` https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(URL)
    const date = await res.json()
    sortDate(date.data.tools)
}

let sortDate =(data)=>{
    // console.log(data);
    let result = data.sort(
        (objA, objB) =>   Number(objA.published_in)-Number(objB.published_in),
    )
    // console.log(result);

}

datefromApi() 

const arr1 = [
    {id: 3, date: new Date(2022, 1, 24)},
    {id: 5, date: new Date(2027, 1, 24)},
    {id: 2, date: new Date(2023, 1, 24)},
  ];

  // ✅ Sort in Descending order (high to low)
  const sortedDesc = arr1.sort(
    (objA, objB) =>   Number(objA.date)-Number(objB.date),
  );
  
  //  👇️ {id: 5, date: Wed Feb 24 2027,
  //      id: 2, date: Fri Feb 24 2023,
  // ️     id: 3, date: Thu Feb 24 2022}
//   console.log(sortedDesc);





// Main section start 

const loadAiDate = async() => {
  const URL = ` https://openapi.programming-hero.com/api/ai/tools`
  const res = await fetch(URL)
  const date = await res.json()
  showAiData(date.data.tools);
  showBtn(date.data.tools);

}

// Date fetch for Modal Start
const dataForModal = async(id) => {
  const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`
  const res = await fetch(URL)
  const data = await res.json()
  showDataInModal(data.data)
}
const showDataInModal = (data) =>{
  console.log(data);
  // loadAiDate()
  `

  `
}

// Date fetch for Modal End






// For forEach Start
const commonForEach = (data) =>{


data.forEach( data => {
  // console.log(data.id);
  // console.log(data.features[0]);

  // One by One Data show in modal function 'dataForModal(data.id)'
       dataForModal(data.id)
       
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
              <label  for="my-modal-3" class="btn btn-outline btn-error text-sm font-bold">Details</label >               
          </div>
       </section>         
      </div>
    </div> 

      `
   })
}
// For forEach End



// Show Ai tools Card upto 6 start
const showAiData = (data) =>{
 data = data.splice(0,6)
 commonForEach(data)
}
// Show Ai tools Card upto 6 end



// Show Ai All Tools from Api [start] 
const showBtn = (data) =>{
  let showAllDateContainer = document.getElementById('showAllDateContainer');
  if(data.length > 0 ) 
  {
      showAllDateContainer.classList.remove('hidden');
  }
  showAllDateContainer.addEventListener('click',function(){     
      commonForEach(data)
       showAllDateContainer.classList.add('hidden');
  })
}
// Show Ai All Tools from Api [End] 


// Sort Date Start 
document.getElementById('sortDate').addEventListener('click',function(){
  loadDateAgain()
  let showAllDateContainer = document.getElementById('showAllDateContainer');
  showAllDateContainer.classList.add('hidden');
})

let loadDateAgain = async()  =>{
  const URL = ` https://openapi.programming-hero.com/api/ai/tools`
  const res = await fetch(URL)
  const date = await res.json()
  shortDate(date.data.tools)
}

let shortDate =(data)=>{
let aiCardContainer =  document.getElementById('aiCardContainer');
aiCardContainer.textContent = '';
//   console.log(data);
//    let h = data.sort((a,b)=>{a.published_in - b.published_in })
//    console.log(h);
commonForEach(data)
}
// Sort Date End 




//  Loader Problem  start 
let toggle = ( status) =>{
  let lodder = document.getElementById('lodder');
  if(status === true){
      lodder.classList.remove('hidden')
  }
}
//  Loader Problem  end
loadAiDate()


  