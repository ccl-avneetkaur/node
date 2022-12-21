console.log("Client side javascript is loaded!")

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = "this is from javascript"

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = "Loading"
    messageTwo.textContent =""

    const location = search.value
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                messageOne.textContent = data.error;
            }
            else{
                messageTwo.textContent = data.forecast;
                messageOne.textContent = data.location;
                console.log(data.forecast);
                console.log(data.location);
            }
        
        })
    })
})