'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const CompletionAffirmationInputSchema = z.object({
  name: z.string().describe('The name of the user'),
  task: z.string().describe('The task the user just completed'),
});

const CompletionAffirmationOutputSchema = z.object({
  affirmation: z.string().describe('A short, encouraging affirmation'),
});

export const generateCompletionAffirmation = ai.defineFlow(
  {
    name: 'generateCompletionAffirmation',
    inputSchema: CompletionAffirmationInputSchema,
    outputSchema: CompletionAffirmationOutputSchema,
  },
  async ({ name, task }) => {
    const prompt = `Generate a short, encouraging affirmation for ${name} who just completed the task: "${task}".`;

    const { text } = await ai.generate({
      prompt,
      model: 'googleai/gemini-1.5-flash',
    });

    return { affirmation: text };
  }
);
