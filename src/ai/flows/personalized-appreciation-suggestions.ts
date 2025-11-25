'use server';

import { ai } from '@/ai/genkit';
import type { UserProfile } from '@/lib/types';
import { z } from 'zod';

const AppreciationSuggestionsInputSchema = z.object({
  userProfile: z
    .object({
      name: z.string(),
      interests: z.array(z.string()).optional(),
      mood: z.string().optional(),
    })
    .describe('The user profile'),
  journalEntries: z
    .array(z.string())
    .describe('A list of recent journal entries'),
});

const AppreciationSuggestionsOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('A list of personalized appreciation suggestions'),
});

export const generateAppreciationSuggestions = ai.defineFlow(
  {
    name: 'generateAppreciationSuggestions',
    inputSchema: AppreciationSuggestionsInputSchema,
    outputSchema: AppreciationSuggestionsOutputSchema,
  },
  async ({ userProfile, journalEntries }) => {
    const prompt = `Based on the following user profile and their recent journal entries, generate 3 personalized suggestions for things they could do to practice appreciation.

User Profile:
Name: ${userProfile.name}
Interests: ${userProfile.interests?.join(', ') || 'Not specified'}
Current Mood: ${userProfile.mood || 'Not specified'}

Recent Journal Entries:
${journalEntries.map((entry) => `- ${entry}`).join('\n')}

Suggestions should be actionable and tailored to the user's life.`;

    const { text } = await ai.generate({
      prompt,
      model: 'googleai/gemini-1.5-flash',
    });

    // Simple parsing of a numbered or bulleted list
    const suggestions = text
      .split('\n')
      .map((s) => s.replace(/^[0-9-]+\.?\s*/, '').trim())
      .filter(Boolean);

    return { suggestions };
  }
);
