let guests = prompt('How many people are coming to your wedding?');

function getPrice(input){
   
    if (input <= 50){
          return 4000;
    }
    else if (input >=50 && input <= 100){
         return 10000;
    }
    else if(input >=100 && input <= 200){
        return  15000;
    }
    else if (input > 200){
        return  20000;
    }
}
let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');