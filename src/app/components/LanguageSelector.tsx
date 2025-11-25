'use client';

import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function LanguageSelector({
  onLanguageSelect,
}: {
  onLanguageSelect: (lang: string) => void;
}) {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    onLanguageSelect(lng);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Choose Your Language</h1>
        <p className="text-muted-foreground">Select your preferred language to continue</p>
        <div className="flex justify-center gap-4 mt-6">
           <Button onClick={() => changeLanguage('en')} variant="outline">
            English
          </Button>
          <Button onClick={() => changeLanguage('he')} variant="outline">
            עברית (Hebrew)
          </Button>
        </div>
      </div>
    </div>
  );
}
