const API_KEY = 
const submitButton = document.querySelector('#submit')

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
        await fetch('https://api.openai.com/v1/chat/completions', options)

    }catch{

    }
}




submitButton.addEventListener('click', getmessage)