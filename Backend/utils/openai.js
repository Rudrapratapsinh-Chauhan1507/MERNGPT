import "dotenv/config";

const getOpenAIResponse = async(message) => {
        const options = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${process.env.GEMINI_API_KEY}`
        },
        body: JSON.stringify({
            model: process.env.GEMINI_MODEL,
            messages: [{
                role:"user",
                content: message
            }]
        })
    };

    try {
        const response = await fetch("https://generativelanguage.googleapis.com/v1beta/openai/chat/completions", options);
        const data = await response.json();
        // console.log(data.choices[0].message.content); //reply
        console.log("Gemini response:", data);

        if (!response.ok) {
            throw new Error(
                data?.error?.message || "Gemini API request failed"
            );
        }
        return data.choices[0].message.content;
    } catch(err) {
        console.log(err);
        throw err;
        // res.status(500).send({ error: err.message });
    }
}

export default getOpenAIResponse;