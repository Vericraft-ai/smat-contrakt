const prompt = args[0]

if (!secrets.openaiKey) {
  throw Error("Need to set OPENAI_KEY environment variable")
}

// example request:
// curl https://api.openai.com/v1/completions -H "Content-Type: application/json" -H "Authorization: Bearer YOUR_API_KEY" -d '{"model": "text-davinci-003", "prompt": "Say this is a test", "temperature": 0, "max_tokens": 7}

// example response:
// {"id":"cmpl-6jFdLbY08kJobPRfCZL4SVzQ6eidJ","object":"text_completion","created":1676242875,"model":"text-davinci-003","choices":[{"text":"\n\nThis is indeed a test","index":0,"logprobs":null,"finish_reason":"length"}],"usage":{"prompt_tokens":5,"completion_tokens":7,"total_tokens":12}}
const openAIRequest = Functions.makeHttpRequest({
  //   url: "https://api.openai.com/v1/completions",
  url: "https://api.openai.com/v1/images/generations",
  //   url: "https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image",
  method: "POST",
  headers: {
    Authorization: `Bearer ${secrets.openaiKey}`,
    // Authorization: `Bearer sk-SW0qWNqpmxhS1NsTcEqe8qcLPfNY9qaMwrLIrzTsDGK6HRPX`,
    "Content-Type": "application/json",
    // "Content-Encoding": "br",
    Accept: "application/json",
    Connection: "keep-alive",
    // "Accept-Encoding": "gzip, deflate, br",
  },
  data: {
    // text_prompts: [
    //   {
    //     text: "A lighthouse on a cliff",
    //     weight: 0.3,
    //   },
    // ],
    model: "dall-e-2",
    prompt: "a white siamese cat",
    n: 1,
    size: "256x256",
  },
  //   data: { model: "text-davinci-003", prompt: prompt, temperature: 0, max_tokens: 7 },
})

const openAiResponse = await openAIRequest
console.log("raw response", openAiResponse)

const result = openAiResponse.data.data[0].url
return Functions.encodeString(result)
