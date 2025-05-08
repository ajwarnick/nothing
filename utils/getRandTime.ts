export function getRandTime():string{
  
    const getRndInteger = (min:number, max:number) => {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
  
    let dice:number = getRndInteger(1,12);
  
    if(dice <= 1){
        let num:number = getRndInteger(1,60);
        return num+'s'
    }else if(dice <= 7){
        let num:number = getRndInteger(1,60);
        return num+'m'
    }else if(dice <= 9){
        let num:number = getRndInteger(1,12);
        return num+'h'
    }else if(dice <= 11){
        let num:number = getRndInteger(1,30);
        return num+'d'
    }else{
        let num:number = getRndInteger(1,4);
        return num+'y'
    }
  }