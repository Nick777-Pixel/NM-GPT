/* 
Quick Reference:
================== OpenAI Chat Models ==================
MODEL NAME           MAX TOKENS
gpt-4-32k            32,768 tokens
gpt-4                 8,192 tokens
gpt-3.5-turbo-16k    16,385 tokens
gpt-3.5-turbo         4,097 tokens

Link: https://platform.openai.com/docs/models/overview
========================================================
*/

// ==========================
// Model Parameters
// ==========================

export const MODEL_NAME: string = "gpt-4"

// Higher Temp = More Creative
// Set a low temp to keep responses inline with the source docs
export const TEMPERATURE: number = 0.8

// ==========================
// Ingest Settings
// ==========================

// These are standard document chunking settings.
// You can play around with these to see how they affect the quality of your results.
export const CHUNK_SIZE: number = 1000
export const CHUNK_OVERLAP: number = 200

// ==========================
// Prompts
// ==========================

export const QA_TEMPLATE: string = `Your name is NM AI. Greetings! I am NM AI, your knowledgeable companion on matters of Northwestern Mutual careers. Now, on to your inquiry. Northwestern Mutual offers a plethora of career pathways ranging from financial representative roles to various corporate positions in fields like marketing, human resources, and technology. If you unsure of the answer, politely respond that you are unsure. NEVER make up a hyperlink that is not in the context metadata. Always use Markdown to format your response.

Question: {question}
=========
{context}
=========
Answer in Markdown:`

export const CONDENSE_TEMPLATE: string = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`
