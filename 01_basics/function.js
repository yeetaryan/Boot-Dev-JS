function getLabel(numstars){
    if(numstars>7){
        return "great";
    }
    else if(numstars>=3){
        return "awful";
    }
    else{
        return "okay"
    }
}
console.log(getLabel(3));