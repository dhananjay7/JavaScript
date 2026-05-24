let Items = [250, 645, 300, 900, 50];
let discount = 10;
for(let i = 0 ; i < Items.length ; i++){
   let offer = Items[i]/discount;

   Items[i] = Items[i] - offer ;
}

console.log(Items);
// Length function always starts with 1 not with 0 unlike index of an array
