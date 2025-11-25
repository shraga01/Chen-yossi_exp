export interface UserProfile {
    id: string;
    name: string;
    email: string;
    dob?: string;
    gender?: 'male' | 'female' | 'other' | 'prefer_not_to_say';
    interests?: string[];
    mood?: string;
}

export interface JournalEntry {
    id: string;
    userId: string;
    date: Date;
    prompt: string;
    content: string;
    gratitudeLevel: 1 | 2 | 3 | 4 | 5;
}
