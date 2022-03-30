var signInBtn = document.getElementById('signIn');

signInBtn.addEventListener('click', () => {
    document.getElementById("logo").style.animation='rotation 2s'

    database.ref('/userInfo').once("value", function (snapshot) {
        obj = (snapshot.val());
        keysArr = (Object.keys(obj));
        length = keysArr.length;

        userInput = document.getElementById('logInUsername');

        for (i = 0; i < length; i++) {//start of loop
            var ObjUserData = (obj[keysArr[i]]);
            var ObjUser = ObjUserData.username;
            //==============================User and Pw Check======================  
            if (ObjUser == userInput.value) {
                var userPassword = document.getElementById('logInPassword')
                var ObjPassword = ObjUserData.password;
                hash(userPassword.value).then(function (result) {
                    //console.log(result)
                    if (result == ObjPassword) {
                        logIn(userInput.value)
                    }//end of login if
                })//end of hash
            }//end of if
        }//end of loop
    })//end of ref
})//end of event



//==================dont have an account=====================
document.getElementById('toRegister').addEventListener('click', () => {
    document.getElementById('registerDiv').style.display = 'block'
    document.getElementById('signInDiv').style.display = 'none'
})