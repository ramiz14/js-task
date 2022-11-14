function choose() {
    var text = "OK ve ya Cancel secin.";
    if (confirm(text) == true) {
      document.getElementById('result').innerHTML='Ok-u sectiniz'
    } else {
      document.getElementById('result').innerHTML='Cancel-i sectiniz'
    }
}
choose()
function age_limit() {
    var age = prompt('Yasinizi daxil edin,','0')
    if (age<18) {
        alert('Yasiniz uygun deyildir')
    }
    else{
        alert('Xos gelmishsiniz')
    }
}
setTimeout(() => {
    age_limit()
}, 1000);
function sepr(){
    var value=document.getElementById('inp').value
    var seher=document.getElementById('seher')
    var gunorta=document.getElementById('gunorta')
    var axsam=document.getElementById('axsam')
    for (var i = 0; i < value.length; i++) {
        if (!(isNaN(value[i]))) {
            if (value[i]==1) {
                seher.innerHTML='Seher qrupu'+ ' ' +value
            }
            else if(value[i]==2){
                gunorta.innerHTML='Gunorta qrupu'+ ' ' +value
            }
            else if(value[i]==3){
                axsam.innerHTML='Axsam qrupu'+ ' ' +value
            }
            break;
        }
        
    }
}