function CountVowels(msg){
   SLmsg = msg.toLowerCase() ;
let vowels = 0; 
for(let i = 0 ; i < SLmsg.length ; i ++){

    let char = SLmsg[i];
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ){
    vowels ++
  }
}  
return vowels;  
};

CountVowels("Hello world");