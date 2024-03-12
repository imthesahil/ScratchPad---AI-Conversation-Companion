const { GoogleGenerativeAI } = require("@google/generative-ai");
const text = require("body-parser/lib/types/text");
require('dotenv').config()
const genAi = new GoogleGenerativeAI(process.env.API_KEY)

async function run(){
    const model = genAi.getGenerativeModel({model: "gemini-pro"})
    const prompt="Write java program for palindrome."
    const result=await model.generateContent(prompt)
    const response = await result.response
    const text=response.text()
    console.log(text)
}

run()