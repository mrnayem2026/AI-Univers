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
    console.log(result);

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
  