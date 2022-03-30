var registerDiv = document.getElementById('registerDiv')
registerDiv.style.display = 'none'

var searchDiv = document.getElementById('userSearchDiv')
searchDiv.style.display = 'none'

var chatDiv = document.getElementById('chatItems')
chatDiv.style.display = 'none'


document.getElementById('signOut').addEventListener('click',function(){
    window.location.reload();
})


function logIn(name) {
    User = name //=================current user=============

    translateMainItems()

    document.getElementById('signInDiv').style.display = 'none';

    searchDiv.style.display = 'block'

    searchForUser()
    displayReqs()
    displayFriends(name)
}


function displayReqs() {
    database.ref('/Users/' + User).once("value", function (snapshot) {
        var obj = (snapshot.val());
        var keysArr = (Object.keys(obj));
        var length = keysArr.length;

        for (i = 0; i < length; i++) {
            var list = (obj[keysArr[i]])
            if (list.sent == 'true' && list.accepted == '' && list.sentBy != User) {
                showReqBtns(list.defaultName)
                console.log('display reqs')
                
            }
        }
    })
}//end of function


function showReqBtns(name) {
    req = document.createElement('button')
    req.id = (name)
    req.className = 'reqBtn'
    var reqTxt = document.createTextNode(name)
    req.appendChild(reqTxt)
    searchDiv.appendChild(req)
}


//=====================accept function====================
document.body.addEventListener('click', (e) => {
    //console.log(e.target)

    if (e.target.className == 'reqBtn') {
        
        var sentBy = e.target.id

        database.ref('/Users/' + User).once("value", function (snapshot) {
            var obj = (snapshot.val());
            var keysArr = (Object.keys(obj));
            var length = keysArr.length;

            for (i = 0; i < length; i++) {

                if (sentBy == (obj[keysArr[i]].defaultName)) {
                    key = [keysArr[i]]//========key===============
                    console.log(key)

                    database.ref('/Users/' + User + '/' + key).update({  ///======aproves you end
                        accepted: 'true',
                    })
                    database.ref('/Users/' + User + '/' + key + '/chatroom').push({  ///=================approves their end===
                        'userRoom': sentBy + '--' + User,
                    })


                    friendUsername = document.createElement('button')
                    friendUsername.className = 'friendBtn'
                    friendUsernameTxt = document.createTextNode(sentBy)
                    friendUsername.appendChild(friendUsernameTxt)
                    document.getElementById('yourFriendsDiv').appendChild(friendUsername)
                }
            }
        })

        database.ref('/Users/' + sentBy).once("value", function (snapshot) {
            var obj = (snapshot.val());
            var keysArr = (Object.keys(obj));
            var length = keysArr.length;

            for (i = 0; i < length; i++) {

                if (User == (obj[keysArr[i]].defaultName)) {
                    key = [keysArr[i]]//========key===============
                    //console.log(key)

                    database.ref('/Users/' + sentBy + '/' + key).update({  ///=================approves their end===
                        accepted: 'true',
                    })
                    database.ref('/Users/' + sentBy + '/' + key + '/chatroom').push({  ///=================approves their end===
                        'userRoom': sentBy + '-' + User,
                    })
                }
            }
        })

        var btnDel = document.getElementById(sentBy)
        searchDiv.removeChild(btnDel)

    }//end of if


})




    // document.getElementById('fileInput').addEventListener('change', e =>{
    //     firebase.storage().ref.put(e.target.files[0])

    // })





    //==========DISPLAY FRIENDS=========
    function displayFriends(currentUser){

        database.ref('/Users/' + currentUser).once("value", function (snapshot) {
            var obj = (snapshot.val());
            var keysArr = (Object.keys(obj));
            var length = keysArr.length;

            for (i = 0; i < length; i++) {
                if(obj[keysArr[i]].sent == 'true' && obj[keysArr[i]].accepted =='true'){
                    //console.log(obj[keysArr[i]].defaultName)
                    friendUsername = document.createElement('button')
                    friendUsername.className = 'friendBtn'
                    friendUsername.id = (obj[keysArr[i]].defaultName)
                    friendUsernameTxt = document.createTextNode(obj[keysArr[i]].defaultName)
                    friendUsername.appendChild(friendUsernameTxt)
                    document.getElementById('yourFriendsDiv').appendChild(friendUsername)

                }
            }
        })
    }
    


    document.body.addEventListener('click', (e) => {
        //console.log(e.target)
    
        if (e.target.className == 'friendBtn') {
        document.getElementById('userSearchDiv').style.display = 'none'
        document.getElementById('chatItems').style.display = 'block'

        openChat(e.target.id)
        fndName = e.target.id

        }
        

    })


    document.getElementById('back').addEventListener('click', function(){
       
        document.getElementById('userSearchDiv').style.display = 'block'
        document.getElementById('chatDiv').innerHTML = ''
        document.getElementById('chatItems').style.display = 'none'

    })


    




  
     