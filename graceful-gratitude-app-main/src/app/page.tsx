'use client';

import { useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { LanguageSelector } from './components/LanguageSelector';
import { OnboardingForm } from './components/OnboardingForm';

type AppStep = 'language' | 'onboarding' | 'dashboard';

export default function Home() {
  const [step, setStep] = useState<AppStep>('language');
  const [userProfile, setUserProfile] = useState(null);

  const handleLanguageSelect = (lang: string) => {
    i18n.changeLanguage(lang);
    setStep('onboarding');
  };

  const handleOnboardingComplete = (profile: any) => {
    setUserProfile(profile);
    setStep('dashboard');
    // Here you would typically save the profile to your backend/DB
    console.log('Onboarding complete, profile:', profile);
  };

  const renderStep = () => {
    switch (step) {
      case 'language':
        return <LanguageSelector onLanguageSelect={handleLanguageSelect} />;
      case 'onboarding':
        return <OnboardingForm onOnboardingComplete={handleOnboardingComplete} />;
      case 'dashboard':
        return (
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Welcome, {userProfile?.name}!</h1>
            <p>Your dashboard is coming soon.</p>
          </div>
        );
      default:
        return <LanguageSelector onLanguageSelect={handleLanguageSelect} />;
    }
  };

  return (
    <main>
      <I18nextProvider i18n={i18n}>
        {renderStep()}
      </I18nextProvider>
    </main>
  );
}
