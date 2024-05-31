# Chat with URL API Plugin Documentation

Documentation last updated: May 31, 2024

Plugin last updated: May 31, 2024

[Bubble plugins](https://bubble.io/plugins)

[Link to your plugin](https://bubble.io/plugin/chat-with-url-api)

# Table of Contents

- [Overview](#overview)
- [How to use](#how-to-use)
- [Components](#components)
  - [Actions](#actions)
    - [Action #1](#action-1)
  - [Elements](#elements)
    - [Element #1](#element-1)
  - [APIs](#apis)
    - [GET /chat](#get-chat)
    - [POST /chat](#post-chat)
- [Plugin Demo](#plugin-demo)
- [Changelog](#changelog)
- [Contact / Support](#contact--support)

---

# Overview

The Chat with URL API plugin allows users to fetch content from a URL, process it, and generate responses using OpenAI's language models. It supports both GET and POST requests, making it versatile for various use cases. The API leverages OpenAI's capabilities to understand and generate text based on the content from the provided URL.

---

# How to use

To use the Chat with URL API plugin, include your OpenAI API key in the request headers and provide the necessary parameters in the request body or URL. The plugin supports both GET and POST methods for interacting with the API.

---

# Components

## Actions

### Action #1: Fetch and Process URL Content

This action fetches content from a provided URL, processes it using OpenAI's language models, and generates a response based on the query provided.

#### Parameters:

- **apikey**: string (required)
- **query**: string (required)
- **url**: string (required)
- **model**: string (optional, default: "gpt-4o")
- **temperature**: number (optional, default: 0.7)
- **maxTokens**: number (optional, default: 1000)
- **chunkSize**: number (optional, default: 1000)
- **chunkOverlap**: number (optional, default: 200)

### Action #2

This section is reserved for any additional actions your plugin may provide.

## Elements

### Element #1

Describe any elements provided by your plugin here.

## APIs

### GET /chat

**Endpoint:** `https://rag-with-url.vercel.app/chat`

**Response:**

```json
{
  "response": "Welcome to the **Chat with URL API**! This API uses various tools and libraries to fetch content from a URL, process it, and generate responses using OpenAI's language models. It supports both GET and POST requests.",
  "parameters": {
    "apikey": "string (required)",
    "query": "string",
    "url": "string",
    "model": "string (optional)",
    "temperature": "number (optional)",
    "maxTokens": "number (optional)",
    "chunkSize": "number (optional)",
    "chunkOverlap": "number (optional)"
  }
}
```

### POST /chat

**Endpoint:** `https://rag-with-url.vercel.app/chat`

Headers:

openai-api-key: Your OpenAI API key (required)
Body:

```json
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

**Response:**

```json
{
  "response": "response here"
}
```

## Changelog

May 31, 2024: Initial release of the Chat with URL API plugin.
May 31, 2024: Updated plugin documentation.

## Contact / Support

Please submit any bug reports , or reach out to `raheesahmed256@gmail.com` for any inquiries.
