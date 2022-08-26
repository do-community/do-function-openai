# Sample Function: OpenAI Text Completion

## Introduction

This repository contains a DigitalOcean Function that integrates [OpenAI](https://openai.com/) and implements the Completion API that when given a prompt, returns a completion. The function requires a POST request and in the body at a minimum requires a `prompt` property sent as `json`. Additionally, in the body of the POST request you can pass a `max_tokens`, `temperature`, and `top_p` properties. Learn more about the OpenAI Completion API [here](https://beta.openai.com/docs/api-reference/completions).

## Examples

Sample Input: 

```
{
    "prompt": "My favorite thing to do on the weekend is",
    "max_tokens": 100
}
```

Sample Response:

```
go on long walks with my dog. We usually go to the park or around the neighborhood. I love spending time with her and
getting some fresh air.
```

---

Sample Input:

```
{
    "prompt": "What is the sentiment of the following passage: I never knew serverless was so awesome"
}
```

Sample Response:

```
The sentiment of the passage is positive.
```

---

Sample Input:

```
{
    "prompt": "Tell me a programming joke",
    "max_tokens": 100
}
```

Sample Response:

```
Why do programmers always have to write code? Because without code, there would be nothing to debug!
```


## Requirements

- A DigitalOcean account. [Sign up for free and get a $100 credit](https://cloud.digitalocean.com/registrations/new).
- An OpenAI account

## Deployment

You can deploy this function either via DigitalOcean's doctl CLI or directly on the DigitalOcean App Platform.

### 1-Click Quick Deploy to DigitalOcean App Platform

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/do-community/do-function-openai/tree/main)

### Deploy via doctl

- *Optional* Fork the repo, so you can make changes and take ownership of the code
- Clone the repo to your machine
- Navigate to the repo on your machine, and rename `.env.example` to `.env`
- Open the `.env` file and set your OpenAI API Key
- Open up a terminal and execute the doctl command: `doctl serverless deploy do-function-openai`

### Deploy via App Platform

- Fork the repo, so you can make changes and take ownership of the code
- Navigate to the App Platform section in your DigitalOcean Dashboard, and either create a new app or new resource in an existing app
- Select the do-function-openai repo that you forked
- In the Environment Variables section, add your OpenAI API Key to the pre-populated apiKey environment variable