function bin_hex(){
    var bin=document.getElementByld("bin").value;
    var message = +bin+;

    document.getElementByld("content").innerHTML=message;

    if (bin="0000"){
        var hex=document.getElementByld("hex").innerHTML;
        hex += "0";
    }
}