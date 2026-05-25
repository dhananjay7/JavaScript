let ArrFnc = (str) => {
    let lowerStr = str.toLowerCase();
   let  vowels = 0 ;
    for(let char of lowerStr){
       if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        vowels ++ ;
       }
    }
    return vowels ; 
};

console.log(ArrFnc("Hello world"));