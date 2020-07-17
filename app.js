
document.addEventListener('DOMContentLoaded', function(){
    let form = document.querySelector('#tempForm');
    let convertedDiv = document.querySelector('#convertedTemp');
    let convertedTemp;

    form.addEventListener('submit', event =>{
        event.preventDefault();
        console.log(event);
        let inputTemp = event.target[0].value;
        let radioFar = event.target[1].checked;
        let radioCel = event.target[2].checked;
        if (radioFar === true) {

             convertedTemp = Math.floor((inputTemp-32)*5/9);
             convertedDiv.innerText = 'Celcius: ' + convertedTemp + '°';

        } else {

             convertedTemp = Math.floor((inputTemp*1.8+32));
             convertedDiv.innerText = 'Fahrenheit: ' + convertedTemp + '°';
        }

        form.addEventListener ('reset', () => {
            convertedDiv.innerText = '';
        })

    });



});

// document.addEventListener("DOMContentLoaded", function(){
//     // First variable selects my form
//     // Second variable is my clear button
//     // Third variable is my celcius text div
//     const tempForm = document.querySelector("form")
//     const clearButton = document.querySelector("#clear")
//     const celciusDiv = document.querySelector('#celciusTemp')

//     tempForm.addEventListener("submit", event => {
//         // Prevents the form from refreshing the webpage on submit
//         event.preventDefault()

//         // Event data includes input field value in target object
//         const farTemp = event.target[0].value

//         // Variable with math to convert from farenhiet to celcius
//         const celciusTemp = Math.floor(((farTemp - 32) * 5) / 9)

//         // Change my celciusDiv text to include the converted temp
//         celciusDiv.innerText = "Celcius Temp: " + celciusTemp

//         //Change styling of the div based on the temperature
//         if (celciusTemp < 0) {
//             //Overrides any existing class with freezing
//             celciusDiv.setAttribute('class', 'freezing')
//         } else if (celciusTemp > 35) {
//             //Overrides any existing class with scorching
//             celciusDiv.setAttribute('class', 'scorching')
//         }

//     })

//     clearButton.addEventListener("click", () => {
//         //Removes temperature styling and resets text
//         celciusDiv.innerText = "Celcius Temp: "
//         celciusDiv.setAttribute('class', '')
//     })

// })