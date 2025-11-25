'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "languageSelector": {
        "title": "Choose Your Language",
        "description": "Select your preferred language to continue"
      },
      "onboarding": {
        "title": "Welcome to Graceful Gratitude",
        "subtitle": "Let's get to know you a little better.",
        "name": {
          "label": "What's your name?",
          "placeholder": "Enter your name"
        },
        "dob": {
          "label": "When is your birthday?"
        },
        "gender": {
          "label": "How do you identify?",
          "placeholder": "Select your gender",
          "male": "Male",
          "female": "Female",
          "other": "Other"
        },
        "submit": "Get Started"
      }
    }
  },
  he: {
    translation: {
      "languageSelector": {
        "title": "בחר את השפה שלך",
        "description": "בחר את השפה המועדפת עליך כדי להמשיך"
      },
      "onboarding": {
        "title": "ברוכים הבאים ל-Graceful Gratitude",
        "subtitle": "בואו נכיר אתכם קצת יותר טוב.",
        "name": {
          "label": "מה שמך?",
          "placeholder": "הכנס את שמך"
        },
        "dob": {
          "label": "מתי יום ההולדת שלך?"
        },
        "gender": {
          "label": "איך את/ה מזדהה?",
          "placeholder": "בחר את מינך",
          "male": "זכר",
          "female": "נקבה",
          "other": "אחר"
        },
        "submit": "להתחיל"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
