import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings, ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";

export const chatWithURL = async ({
  query,
  url,
  model = "gpt-4o",
  temperature = 0.7,
  maxTokens = 1000,
  chunkSize = 1000,
  chunkOverlap = 200,
  apiKey,
}) => {
  try {
    const loader = new CheerioWebBaseLoader(url);
    const docs = await loader.load();

    // Initialize the LLM with ChatOpenAI instead of just OpenAI, adjusted to use the specified parameters.
    const llm = new ChatOpenAI({
      modelName: model,
      temperature: temperature,
      maxTokens: maxTokens,
      openAIApiKey: apiKey,
    });

    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize,
      chunkOverlap,
    });
    const splits = await textSplitter.splitDocuments(docs);
    const vectorStore = await MemoryVectorStore.fromDocuments(
      splits,
      new OpenAIEmbeddings({
        openAIApiKey: apiKey,
        maxTokens: maxTokens,
        temperature: temperature,
      })
    );
    const retriever = vectorStore.asRetriever();

    const template = `Use the following pieces of context to answer the question at the end.
    If you don't know the answer, just say that you don't know, don't try to make up an answer.

    {context}

    Question: {question}

    Helpful Answer:`;

    const customRagPrompt = PromptTemplate.fromTemplate(template);
    const ragChain = await createStuffDocumentsChain({
      llm,
      prompt: customRagPrompt,
      outputParser: new StringOutputParser(),
    });

    // Ensure context is formatted correctly before passing to the invoke method.
    const context = await retriever.getRelevantDocuments(query);

    const res = await ragChain.invoke({
      question: query,
      context,
    });

    return res;
  } catch (error) {
    console.error("Error in chatWithURL function:", error);
    return "Error occurred during execution";
  }
};
