const quicksort = (arr)=>{
  
    if(arr.length == 0)return[];
    if(arr.length == 1)return arr;
  
    let i = Math.floor(arr.length/2);
    let pivot = arr[i];
    arr.splice(i,1);
    
    return[
      ...quicksort(arr.filter(y => y < pivot)),
      pivot,
      ...quicksort(arr.filter(y => y >= pivot))
    ]
  }
  
  let items1 = [3,-2,9,4,2,7,19,1,20,];
  let items = [2]
  console.log(quicksort(items));
  console.log(quicksort(items1));