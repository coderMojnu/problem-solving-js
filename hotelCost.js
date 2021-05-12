const cost = (days) => {
    if(days > 0 && days <= 10){
        return days*100;
    }
    else if(days > 10 && days <= 20){
        let discountDay = days - 10;
        return 1000 + discountDay*80;
    }
    else if(days > 20 && days <= 30){
        discountDay = days - 20;
        return 1000 + 800 + discountDay*50;
    }
    else {
        return 'Sorry, something else';
    }
}
console.log(cost('a'))