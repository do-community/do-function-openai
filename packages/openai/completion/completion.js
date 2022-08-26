const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env['apiKey'],
});

const openai = new OpenAIApi(configuration);


async function main(args) {
    if (args.__ow_method !== 'post'){
        return { "body": "Please send a POST Request"};
    }
    if (args.prompt){
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: args.prompt,
            max_tokens: args.max_tokens || 16,
            temperature: args.temperature || 0.9,
            top_p: args.top_p || 1
          });
        
        return {"body": completion.data.choices[0].text}
    } else {
        return {"body": "Please send a prompt"}
    }
  }

exports.main = main