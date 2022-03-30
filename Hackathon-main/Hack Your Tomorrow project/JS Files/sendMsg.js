
function openChat(sentName){
//===========================display messages==================\

    database.ref('/Users/' + User).once("value", function (snapshot) {
        var obj = (snapshot.val());
        var keysArr = (Object.keys(obj));
        var length = keysArr.length;
       
        for(i=0; i<length; i++){
        if (fndName == (obj[keysArr[i]].defaultName)) {
            var friendKey = [keysArr[i]]
            

            database.ref('/Users/' + User + '/' + friendKey + '/chatroom').once("value", function (snapshot) {
                var obj = (snapshot.val());
                var keysArr = (Object.keys(obj));
                var length = keysArr.length;
                //console.log(obj)
            
                for(i=1; i<length; i++){
                    var msg = document.createElement('p')
                    var msgTxt = document.createTextNode(obj[keysArr[i]].message)
                    msg.appendChild(msgTxt)
                    console.log(obj[keysArr[i]].sentBy)
                    if(obj[keysArr[i]].sentBy == User){
                        msg.className = 'sentByYou'
                    }else{
                        msg.className = 'sentByThem'
                    }
                    document.getElementById('chatDiv').appendChild(msg)
                }
                function scroll(){
                    var objDiv = document.getElementById("chatDiv");
                    objDiv.scrollTop = objDiv.scrollHeight;
                }
                scroll()
            })
        }
    }
    })
 
}//end of function

//=========================UPDATE WITH SEND===================
document.getElementById('sendBtn').addEventListener('click', function(){
console.log('sending....')
    //==============translate=====================
database.ref('/userInfo').once("value", function (snapshot) {
    var obj = (snapshot.val());
    var keysArr = (Object.keys(obj));
    var length = keysArr.length;
   
    for(i=0; i<length; i++){
    if (fndName == (obj[keysArr[i]].username)) {
        var friendLangKey = [keysArr[i]]
        var langPath = ('/userInfo/' + friendLangKey +'/lang')

    database.ref(langPath).once("value", function (snapshot) {
        var obj = (snapshot.val());
        FriendsLanguage = obj

        var message = document.getElementById('sendMsg').value
       PushTranslate(message, FriendsLanguage)
    })
}
    }
})
//===================end of translate====================

})

document.body.addEventListener("keydown", function(e){
    //console.log(e)
    
    if(e.code == 'Enter'){
console.log('sending......')
        database.ref('/userInfo').once("value", function (snapshot) {
            var obj = (snapshot.val());
            var keysArr = (Object.keys(obj));
            var length = keysArr.length;
           
            for(i=0; i<length; i++){
            if (fndName == (obj[keysArr[i]].username)) {
                var friendLangKey = [keysArr[i]]
                var langPath = ('/userInfo/' + friendLangKey +'/lang')
        
            database.ref(langPath).once("value", function (snapshot) {
                var obj = (snapshot.val());
                FriendsLanguage = obj
        
                var message = document.getElementById('sendMsg').value
        
               PushTranslate(message, FriendsLanguage)
            })
        }

    
            }
        })





    }
})


