let Items = [250, 645, 300, 900, 50];

let i = 0 ; 
for (let val of Items){
    console.log(`value at index ${i} = ${val}`);
    let offer = val / 10 ;
    Items[i] = Items[i] - offer ;
    console.log(`value after offer is ${Items[i]}`);
    i++;
}