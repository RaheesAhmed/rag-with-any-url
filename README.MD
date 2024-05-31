# Chat with URL API

This API uses various tools and libraries to fetch content from a URL, process it, and generate responses using OpenAI's language models. It supports both GET and POST requests.

## Setup

To get starting first clone the Repo and than install packages.

### Clone the Repo:

```
git clone https://github.com/RaheesAhmed/rag-with-any-url.git
```

### Install Packages:

```
npm install
```

or

```
npm i
```

### Usage

Start the server by running:

```
npm start
```

The server will run on `http://localhost:3000`. You can use the `/chat` endpoint to interact with the API.

### GET /chat

Returns a welcome message and the expected parameters.

### POST /chat

Accepts a JSON body with the following fields:

```
query (string, required): The query to ask.
url (string, required): The URL to fetch content from.
model (string, optional): The model to use (default: "gpt-4o").
temperature (number, optional): The temperature setting for the model (default: 0.7).
maxTokens (number, optional): The maximum number of tokens (default: 1000).
chunkSize (number, optional): The size of the chunks to split the text into (default: 1000).
chunkOverlap (number, optional): The overlap between chunks (default: 200).
Include the openai-api-key in the request headers.
```

### Example POST Request

```
{
  "query": "What is the main topic of the article?",
  "url": "https://example.com/article",
  "model": "gpt-4o",
  "temperature": 0.7,
  "maxTokens": 1000,
  "chunkSize": 1000,
  "chunkOverlap": 200
}
```

Include the `openai-api-key` in the` headers` of the request.

This API is a powerful tool for fetching and processing content from URLs and generating responses using OpenAI's language models. Feel free to extend and customize it to suit your needs.
