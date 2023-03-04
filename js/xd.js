const arr1 = [
  // {id: 3, date: '24-02-2022'},
  // {id: 5, date: '24-02-2027'},
  // {id: 2, date: '24-02-2023'},
  {id: 3, date: '2022-02-24'},
  {id: 5, date: '2027-02-24'},
  {id: 2, date: '2023-02-24'},
].map(obj => {
  return {...obj, date: new Date(obj.date)};
});

// console.log(arr1);

// ✅ Sort in Ascending order (low to high)
const sortedAsc = arr1.sort(
  (objA, objB) => Number(objA.date) - Number(objB.date),
);

// 👇️ {id: 3, date: Thu Feb 24 2022,
//     id: 2, date: Fri Feb 24 2023
//     id: 5, date: Wed Feb 24 2027}
// console.log(sortedAsc);


let originalDate = '24/02/2022'; // Declare a variable and assign the original date string to it.
let splitDate = originalDate.split('/'); // Split the date string into an array of substrings using the '/' character as a separator.
let formattedDate = splitDate[2] + '/' + splitDate[1] + '/' + splitDate[0]; // Construct a new date string by concatenating the year, month, and day values from the array in the desired order using the '/' character as a separator.
// console.log(formattedDate); // Output the formatted date string to the console.
