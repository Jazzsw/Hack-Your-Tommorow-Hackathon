function PushTranslate(text, language){
        
    var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=' + text + '&target_lang=' + language)

fetch(base).then(function(data){
return data.json()
}).then(function(result){
    console.log(result)
var translationArr = (result.translations[0])
var finalMsg = (translationArr.text)




database.ref('/Users/' + fndName).once("value", function (snapshot) {
    var obj = (snapshot.val());
    var keysArr = (Object.keys(obj));
    var length = keysArr.length;
   
    for(i=0; i<length; i++){
    if (User == (obj[keysArr[i]].defaultName)) {
        var friendKey = [keysArr[i]]

        database.ref('/Users/' + fndName + '/' + friendKey + '/chatroom').push({
            'message': finalMsg,
            'sentBy': User
        })

        var msg = document.createElement('p')
        var msgTxt = document.createTextNode(text)
        msg.appendChild(msgTxt)
        msg.className = 'sentByYou'
        document.getElementById('chatDiv').appendChild(msg)
        function scrollsend(){
            var objDiv = document.getElementById("chatDiv");
            objDiv.scrollTop = objDiv.scrollHeight;
        }
        scrollsend()


        // database.ref('/Users/' + fndName + '/' + friendKey + '/chatroom').on('value', (snapshot) => {
        //     //console.log(snapshot.val());
        //   }, (errorObject) => {
        //     console.log('The read failed: ' + errorObject.name);
    
        // })

    }}
})

database.ref('/Users/' + User).once("value", function (snapshot) {
    var obj = (snapshot.val());
    var keysArr = (Object.keys(obj));
    var length = keysArr.length;
   
    for(i=0; i<length; i++){
    if (fndName == (obj[keysArr[i]].defaultName)) {
        var yourKey = [keysArr[i]]

        database.ref('/Users/' + User + '/' + yourKey + '/chatroom').push({
            'message': text,
            'sentBy': User
        })

    }}
})

document.getElementById('sendMsg').value = ''

})
}



//=====================translate main page======================
function translateMainItems(){
database.ref('/userInfo').once("value", function (snapshot) {
    var obj = (snapshot.val());
    var keysArr = (Object.keys(obj));
    var length = keysArr.length;
       
        for(i=0; i<length; i++){
        if (User == (obj[keysArr[i]].username)) {
            var yourLangKey = (obj[keysArr[i]].lang)
    
//=============search===========
var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=Search&target_lang=' + yourLangKey)
fetch(base).then(function(data){
return data.json()
}).then(function(result){
    //console.log(result)
var translationArr = (result.translations[0])
var finaltxt = (translationArr.text)
document.getElementById('searchBtn').innerHTML = finaltxt
})
  //=============search========================          
    
  //====signout=====
var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=Sign+out&target_lang=' + yourLangKey)
fetch(base).then(function(data){
return data.json()
}).then(function(result){
    //console.log(result)
var translationArr = (result.translations[0])
var finaltxt = (translationArr.text)
document.getElementById('signOut').innerHTML = finaltxt
})
//================placeholder for user search====
var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=Search+for+username&target_lang=' + yourLangKey)
fetch(base).then(function(data){
return data.json()
}).then(function(result){
    //console.log(result)
var translationArr = (result.translations[0])
var finaltxt = (translationArr.text)
document.getElementById('search').placeholder = finaltxt
})
///placeholder

//===friends text====
var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=Your+Friends&target_lang=' + yourLangKey)
fetch(base).then(function(data){
return data.json()
}).then(function(result){
    //console.log(result)
var translationArr = (result.translations[0])
var finaltxt = (translationArr.text)
document.getElementById('friendText').innerHTML = finaltxt
})
//friends text

//======requests text====
var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=Friend+Requests&target_lang=' + yourLangKey)
fetch(base).then(function(data){
return data.json()
}).then(function(result){
    //console.log(result)
var translationArr = (result.translations[0])
var finaltxt = (translationArr.text)
document.getElementById('incomingReq').innerHTML = finaltxt
})
//requests text

var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=Back&target_lang=' + yourLangKey)
fetch(base).then(function(data){
return data.json()
}).then(function(result){
    console.log(result)
var translationArr = (result.translations[0])
var finaltxt = (translationArr.text)
document.getElementById('back').innerHTML = finaltxt
})

var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=message&target_lang=' + yourLangKey)
fetch(base).then(function(data){
return data.json()
}).then(function(result){
var translationArr = (result.translations[0])
var finaltxt = (translationArr.text)
document.getElementById('sendMsg').placeholder = finaltxt
})

var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=send&target_lang=' + yourLangKey)
fetch(base).then(function(data){
return data.json()
}).then(function(result){
var translationArr = (result.translations[0])
var finaltxt = (translationArr.text)
document.getElementById('sendBtn').innerHTML = finaltxt
})

    
        }}
    })
}


//-=============================update sign in page===================
document.getElementById('updateSignIn').addEventListener('click', function(){
   
var selection = document.getElementById('langUpdateSignIn')

console.log(selection.value)
    if(selection.value=='Français'){
        var pageLng = 'FR'
    }else if(selection.value=='Español'){
      var pageLng = 'ES'
    }else if(selection.value =='Italiano'){
       var pageLng = 'IT'
    }else if (selection.value == '日本'){
       var pageLng = 'JA'
    }else if (selection.value =='Deutsch'){
       var pageLng = 'DE'
    }else if (selection.value == 'English'){
       var pageLng = 'EN-US'
    }
//sign in txt
    var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=Sign+In&target_lang=' + pageLng)
    fetch(base).then(function(data){
    return data.json()
    }).then(function(result){
    var translationArr = (result.translations[0])
    var finaltxt = (translationArr.text)
    document.getElementById('signInTxt').innerHTML = finaltxt
    })

//username placeholder
var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=username&target_lang=' + pageLng)
    fetch(base).then(function(data){
    return data.json()
    }).then(function(result){
    var translationArr = (result.translations[0])
    var finaltxt = (translationArr.text)
    document.getElementById('logInUsername').placeholder = finaltxt
    })
    //pw placeholder
    var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=password&target_lang=' + pageLng)
    fetch(base).then(function(data){
    return data.json()
    }).then(function(result){
    var translationArr = (result.translations[0])
    var finaltxt = (translationArr.text)
    document.getElementById('logInPassword').placeholder = finaltxt
    })
    //toRegister
    var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=No+Acount?+Register+Here&target_lang=' + pageLng)
    fetch(base).then(function(data){
    return data.json()
    }).then(function(result){
    var translationArr = (result.translations[0])
    var finaltxt = (translationArr.text)
    document.getElementById('toRegister').innerHTML = finaltxt
    })
    //sign in Btn
    var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=Sign+In&target_lang=' + pageLng)
    fetch(base).then(function(data){
    return data.json()
    }).then(function(result){
    var translationArr = (result.translations[0])
    var finaltxt = (translationArr.text)
    document.getElementById('signIn').innerHTML = finaltxt
    })
//========================registerPage===========

//register txt
var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=Register&target_lang=' + pageLng)
fetch(base).then(function(data){
return data.json()
}).then(function(result){
var translationArr = (result.translations[0])
var finaltxt = (translationArr.text)
document.getElementById('registerTxt').innerHTML = finaltxt
})
//name
var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=Name&target_lang=' + pageLng)
fetch(base).then(function(data){
return data.json()
}).then(function(result){
var translationArr = (result.translations[0])
var finaltxt = (translationArr.text)
document.getElementById('name').placeholder = finaltxt
})
//username
var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=Username&target_lang=' + pageLng)
fetch(base).then(function(data){
return data.json()
}).then(function(result){
var translationArr = (result.translations[0])
var finaltxt = (translationArr.text)
document.getElementById('username').placeholder = finaltxt
})
//pw
var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=Password&target_lang=' + pageLng)
fetch(base).then(function(data){
return data.json()
}).then(function(result){
var translationArr = (result.translations[0])
var finaltxt = (translationArr.text)
document.getElementById('password').placeholder = finaltxt
})
//confirm pw
var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=Confirm+Password&target_lang=' + pageLng)
fetch(base).then(function(data){
return data.json()
}).then(function(result){
var translationArr = (result.translations[0])
var finaltxt = (translationArr.text)
document.getElementById('confirmPassword').placeholder = finaltxt
})
//regBtn
var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=Register&target_lang=' + pageLng)
fetch(base).then(function(data){
return data.json()
}).then(function(result){
var translationArr = (result.translations[0])
var finaltxt = (translationArr.text)
document.getElementById('register').innerHTML = finaltxt
})
//to sign in
var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=Already+Have+An+Account?+Sign+In&target_lang=' + pageLng)
fetch(base).then(function(data){
return data.json()
}).then(function(result){
var translationArr = (result.translations[0])
var finaltxt = (translationArr.text)
document.getElementById('toSignIn').innerHTML = finaltxt
})
//language option
var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=Language&target_lang=' + pageLng)
fetch(base).then(function(data){
return data.json()
}).then(function(result){
var translationArr = (result.translations[0])
var finaltxt = (translationArr.text)
document.getElementById('option').innerHTML = finaltxt
})
//langDropdown
var base = ('https://api-free.deepl.com/v2/translate?auth_key=a44681b6-0098-0abd-7eb0-788f5cde560e%3Afx&text=Language&target_lang=' + pageLng)
fetch(base).then(function(data){
return data.json()
}).then(function(result){
var translationArr = (result.translations[0])
var finaltxt = (translationArr.text)
document.getElementById('langOption').innerHTML = finaltxt
})




})