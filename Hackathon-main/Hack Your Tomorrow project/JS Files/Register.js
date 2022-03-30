var registerButton = document.getElementById('register');
var username = document.getElementById('username')
var password = document.getElementById('password')
var confirmPassword = document.getElementById('confirmPassword');
var regDiv = document.getElementById('registerDiv')


registerButton.addEventListener('click', function() {


    database.ref('/userInfo').once("value", function (snapshot) {
        var obj = (snapshot.val());
        var keysArr = (Object.keys(obj));
        var length = keysArr.length;


        for (i = 0; i < length; i++) {
            var ObjUserData = (obj[keysArr[i]]);
            var ObjUser = ObjUserData.username;

            if (ObjUser != username.value) {
                createAccount()
                return
            } else {
                alert('That Username Is Taken')
                username.value = ''
                password.value = ''
                confirmPassword.value = ''

                return
            }
        }//end of loop
    })//end of ref

regDiv.style.display = 'none'
document.getElementById('signInDiv').style.display = 'block'


})//end of event


function createAccount() {

    if (password.value == confirmPassword.value && username.value != null && password != null) {

        hash(password.value).then(function (result) {

            var username = document.getElementById('username')
            var languageChoice = document.getElementById('langDrop')
            console.log(languageChoice.value)


            if(languageChoice.value=='Français'){
                Lcode = 'FR'
            }else if(languageChoice.value=='Español'){
                Lcode = 'ES'
            }else if(languageChoice.value =='Italiano'){
                Lcode = 'IT'
            }else if (languageChoice.value == '日本'){
                Lcode = 'JA'
            }else if (languageChoice.value =='Deutsch'){
                Lcode = 'DE'
            }else if (languageChoice.value == 'English'){
                Lcode = 'EN-US'
            }
            else{
                alert('select a language')
            }

            database.ref('/userInfo').push({
                'username': username.value,
                'password': result,
                'lang' : Lcode
            })

            //==================for 1/1 messaging====================
            database.ref('/userList').push({
                'username': username.value,
            })
            //================personal file===========
            database.ref('/Users/' + username.value).push({
                'defaultName': 'Ulink',
                'sent': '',
                'sentBy': 'Ulink',
                'accepted': ''
            })


        })


        password.value = ''
        confirmPassword.value = ''
        alert('Account Created')

    }//end of if
    else {
        alert('Passwords Do Not Match');
    }//end of else


}//end of function








//=========to sign in=================
document.getElementById('toSignIn').addEventListener('click', () => {
    document.getElementById('signInDiv').style.display = 'block';
    document.getElementById('registerDiv').style.display = 'none';
})


