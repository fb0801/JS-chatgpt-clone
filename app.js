const API_KEY = 
const submitButton = document.querySelector('#submit')
const outputElement = document.querySelector('#output')

async function getmessage(){
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json' 
        }, 
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: 'Hello There!'}],
            max_tokens: 100
        })

    }
    try{
        const respone = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await respone.json()
        console.log(data)
        outputElement.textContent = data.choices[0].message.content

    }catch(error) {
        console.log(error)
    }
}




submitButton.addEventListener('click', getmessage)