'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const DailyAppreciationPromptInputSchema = z.object({
  name: z.string().describe('The name of the user'),
});

const DailyAppreciationPromptOutputSchema = z.object({
  prompt: z.string().describe('A thought-provoking question about appreciation'),
});

export const generateDailyAppreciationPrompt = ai.defineFlow(
  {
    name: 'generateDailyAppreciationPrompt',
    inputSchema: DailyAppreciationPromptInputSchema,
    outputSchema: DailyAppreciationPromptOutputSchema,
  },
  async ({ name }) => {
    const prompt = `Generate a unique and thought-provoking question to prompt ${name} to reflect on something they appreciate today. The question should be open-ended and encourage a detailed response.`;

    const { text } = await ai.generate({
      prompt,
      model: 'googleai/gemini-1.5-flash',
    });

    return { prompt: text };
  }
);
