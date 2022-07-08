let list = prompt("Print Number From-To").split('-');
console.log(list)
if(parseInt(list[0])>parseInt(list[1])){
    for(let i=parseInt(list[1]) ; i<=parseInt(list[0])  ; i++){
        document.write(`${i}`);
        document.write("<br>");
        
    }
}
else if(parseInt(list[1])>parseInt(list[0])){
    for(let i=parseInt(list[0]) ; i<=parseInt(list[1])  ; i++){
        document.write(`${i}`);
        document.write("<br>");
    }
}