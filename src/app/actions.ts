'use server';

import { generateDailyAppreciationPrompt } from '@/ai/flows/daily-appreciation-prompt';
import { generateAppreciationSuggestions } from '@/ai/flows/personalized-appreciation-suggestions';
import { generateCompletionAffirmation } from '@/ai/flows/completion-affirmation-message';
import type { UserProfile } from '@/lib/types';

export async function getDailyPrompt(name: string) {
  const { prompt } = await generateDailyAppreciationPrompt({ name });
  return prompt;
}

export async function getAppreciationSuggestions(
  userProfile: UserProfile,
  journalEntries: string[]
) {
  const { suggestions } = await generateAppreciationSuggestions({
    userProfile,
    journalEntries,
  });
  return suggestions;
}

export async function getCompletionAffirmation(name: string, task: string) {
  const { affirmation } = await generateCompletionAffirmation({ name, task });
  return affirmation;
}
