let btn = document.getElementsByClassName('btn');
let screen = document.querySelector('.screen');
var screenValue = ''; //empty string used to store the content of button pressed

//adding event listners to all the buttons
for (let i = 0; i < btn.length; i++) {

    btn[i].addEventListener('click', () => {

        //adding and removing the class active
        btn[i].classList.add('active');
        setTimeout(() => {
            btn[i].classList.remove('active')
        }, 200)

        //using the inner html of the btn clicked
        let btnContent = btn[i].innerHTML;

        if (btnContent == 'X') {
            screenValue += '*';
            screen.value = screenValue;
        } else if (btnContent == '=') {
            let evaluatedValue = eval(screenValue); //eval function takes the input as string and gives the output as evaluated string
            screen.value = `${screenValue}= ${evaluatedValue}`; //display the evaluated value in the screen
        } else if (btnContent == 'C') {
            screenValue = ''; //empty string
            screen.value = screenValue;
        } else if (btnContent == 'BackSpace') {
            screenValue = screenValue.slice(0, screenValue.length - 1); //remove last letter from string
            screen.value = screenValue; //send the string to the screen
        } else {
            screenValue += btnContent;
            screen.value = screenValue;
        }



    })


}