import OpenAI from 'openai'
import 'dotenv/config'
import fs from 'fs'

import { ReceiptSchema } from './model.js'
import { Output } from '@mui/icons-material'

// Create the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Uploade the receipt file
const receipt = await openai.files.create({
  file: fs.createReadStream('./receipts/receipt-13.jpg'),
  purpose: 'vision',
})

// Measure response time
const start = Date.now()

// Call OpenAI
const response = await openai.responses.create({
  model: 'gpt-4.1-mini',
  input: [
    {
      role: 'developer',
      content: [
        {
          type: 'input_text',
          text: `You are an expert for cosnumer receipts.
            You know all formats: all industries, all countries, everything.
            You can extract all relevant information from the image of an receipt.
            You provide ACCURATE and PRECISE information.
            If you don't know a piece of information, you respond with unknown (instead of making it up).`,
        },
        {
          type: 'input_text',
          text: `You respond ALWAYS in JSON format.
            You send plain JSON (no backticks or similar).
            You validate that the JSON is well-formed before returning it.
            You STRICTLY comply with the following JSON schema. `,
        },
        { type: 'input_text', text: JSON.stringify(ReceiptSchema) },
        {
          type: 'input_text',
          text: `When asked for tags, make some best guesses from the raw_entry you have.
            Leverage information you can find e.g. from the manufacturer.
            Example: Bio E.Fettar 1,25 x 2 --> food organic feta cheese
            Example: Harry Unser Mildes --> food bread
            Example: Iglo Ofengemü --> food frozen oven vegetables
            Infer the language of tags from the receipt's primary language`,
        },

        {
          type: 'input_text',
          text: `If the provided input is not an image of a receipt, abort processing and return an error.`,
        },
      ],
    },
    {
      role: 'user',
      content: [
        {
          type: 'input_text',
          text: 'Provide all information from the following receipt image as structured JSON format.',
        },
        { type: 'input_image', file_id: receipt.id },
      ],
    },
  ],
})

const end = Date.now()

// Show results
console.log(`Msecs: ${end - start}`)
console.log(`Total tokens: ${response.usage.total_tokens} (${response.model})`)

try {
  const data = JSON.parse(response.output_text)
  console.dir(data, { depth: null, colors: true })
  console.log(response.output_text)
} catch (error) {
  console.error(error)
  console.error(response.output_text)
}
