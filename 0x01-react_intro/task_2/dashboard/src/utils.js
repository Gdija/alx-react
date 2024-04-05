function getFullYear(){
    const Year= new Date().getFullYear();
    return Year;
}

function getFooterCopy(isIndex){
    if (isIndex){
        return "Holberton School";
    } else{
        return "Holberton School main dashboard";
    }
}

export{getFullYear, getFooterCopy}