const paymenSuccess = true;
const marks = 85;
function courseEnroll(callback){
    console.log('Course enrollment is in proggress');
    
    setTimeout(function() {
        if(paymenSuccess){
            callback()
        } else {
            console.log( 'Payment Failed');
        }
    }, 2000)
}

function progress(callback){
    console.log('Course on Proggress');
    
    setTimeout(function(){
        if (marks >= 80) {
            callback()
        } else { 
                console.log('You could not get enough marks to get the certificate')    
      }
    },2000);
}

function getCertificate() {
    console.log('Preparing your certificate');
    setTimeout(function(){

        console.log('Congrates! you got the certificate')
    },1000)
}

courseEnroll(function(){
    progress(getCertificate)
});

