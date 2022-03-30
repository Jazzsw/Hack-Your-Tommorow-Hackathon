function searchForUser(){

var searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', ()=>{

database.ref('/Users').once("value", function(snapshot){
    var obj = (snapshot.val());
    var keysArr = (Object.keys(obj));
    var length = keysArr.length;
    

var serchedUser = document.getElementById('search').value
if(obj[serchedUser] != null){
    sendReq(User, serchedUser)
}else{
    alert('User not Found')
}


})//end of ref
})//end of event

}//end of function

function sendReq(SentFrom, Resip){
   alert ('Request sent to '+ Resip) 

   database.ref('/Users/'+SentFrom).push({
    'defaultName': Resip,
    'sentBy': SentFrom,
    'sent': 'true',
    'accepted' : ''
    })

    database.ref('/Users/'+Resip).push({
        'defaultName': SentFrom,
        'sentBy': SentFrom,
        'sent': 'true',
        'accepted' : ''
        })



}