//password must follow rules (in slack)
//password inputted a second time must match the password inputted first
//have regex if-else statements
//enter verification password fade in after password is entered
//tester only has five times to input password
//after five, close site
//-----------------------------------------------------------------------------

document.getElementById("proceed").style.visibility = "hidden"; //hides the proceed button until its called on in the code

function access() {

    //variable list
    let name = document.getElementById('user').value //get user to input a username
    let pass = document.getElementById('pass').value; //get user to set a password

    let passRegexUpper = /[A-Z]/g //check for capital letters
    let passRegexLower = /[a-z]/g //check for lowercase letters
    let passRegexNumber = /[0-9]/g //check for numbers
    let passRegexSpecial = /\W+/g //check for special characters
    let passRegexSpace = /\s+/g //check for whitespace

    //---------------------------------------------------------------------------------
    //Code: Checks to see if the password is acceptable

    if (name.length == 0) { //check to see if username is blank

        valid.innerText = "Username cannot be blank"

    }else if(pass.length == 0) { //check to see if password is blank

        valid.innerText = "Password cannot be blank"

    }else if (pass == name) { //check to see if username and password match

        valid.innerText = "Username and Password cannot match"

    }else if (pass.length >= 8) { //check to see if an actual attempt has been made

        if((passRegexSpace.test(pass)) == false) { //check to see if there are spaces

            if(passRegexUpper.test(pass) == true && passRegexLower.test(pass) == true){ 
            //check if there is an uppercase/lowercase letter

                if(passRegexNumber.test(pass) == true && passRegexSpecial.test(pass) == true){ //check for a Number and Special character

                    valid.innerText = "Password Accepted. Proceed." 
                      
                    document.getElementById("proceed").style.visibility = "visible";
                    //shows button that triggers an event

                }else{ //condition is not met
                    valid.innerText = "Password is invalid. No numbers or Special characters included "

                    document.getElementById("proceed").style.visibility = "hidden"; 
                    document.getElementById("verifyPass").classList.remove("fadeIn");//re-hides button  and button function in case the user clears the code the first time and tries to break it the next time
                }

            }else{ //condition is not met
                valid.innerText = "Password is invalid. Missing lowercase/Uppercase letter"
                document.getElementById("proceed").style.visibility = "hidden";
                document.getElementById("verifyPass").classList.remove("fadeIn");
            }

        }else { //condition is not met
            valid.innerText = "Password is invalid. Spacing included"
            document.getElementById("proceed").style.visibility = "hidden";
            document.getElementById("verifyPass").classList.remove("fadeIn");
        }

    }else if(pass.length < 8 && pass.length != 0) {
        valid.innerText = "Password is too short"
        document.getElementById("verifyPass").classList.remove("fadeIn");
    }

}

function verification() { //adds a class to the verifying part of the HTML (the button above)
    
    document.getElementById("verifyPass").classList.add("fadeIn"); //fades the verifying part in using css
}

var counter = 5

function verify () {

    //variable list
    let match = document.getElementById('match') //get user to verify set password (5 tries only)
    let entry = document.getElementById('entry')
    let verification = document.getElementById('verify') //for termination

    //---------------------------------------------------------------------------------
    //Code: checks for match

    if(pass.value == match.value) { //is it necessary to use strict operator? possibly

        entry.innerText = "Access Granted."

    }else { //if the pass does not match
         
        counter-- //decrement the counter by one
        entry.innerText = ("Incorrect. Tries left: " + counter ) //shows in HTML how many tries are left
        
        if (counter == 0) { //once this happens, shut down site
            
            let sec = 5 //stating point that shows a coundown in HTML

            setInterval(function() { //Pauses long enough for user to read line and setInterval shows a functioning timer

                sec--
                verification.innerHTML = "Failed too many times. BEGIN FORCE TERMINATION: " + sec; //shows when input is incorrect too many times

                verification.style.color = 'red'; //changes the style's original color to chosen color
                
                if (sec <= 0) {
                    //closes whenever the seconds are at or below 0
                    window.close(); //close site in 5 seconds (1000ms = 1s) 
                }
            
            }, 1000); // time inbetween each second

        }

    }
}

//use .test() to use an if else statement with a boolean (for regex)
//use style.display to use css 
//else statements arent always needed
//you can use break to interrupt the if else statement to go to the next one rather than going though each if else statement
//objects are preferred over arrays because instead of calling the index, you can call the key value that stores the info you would like to use, and key values have unique names
//For loops: runs a specific number of times, but can quit whenever it wants to
//While loop: waits for a specific behavior or condition
// For Each loop: Needs to process each piece of data and cant break 