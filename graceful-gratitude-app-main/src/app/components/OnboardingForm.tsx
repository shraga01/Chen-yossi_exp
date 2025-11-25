'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface OnboardingFormProps {
  onOnboardingComplete: (profile: {
    name: string;
    gender: string;
    dob: string;
  }) => void;
}

export function OnboardingForm({ onOnboardingComplete }: OnboardingFormProps) {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && gender && dob) {
      onOnboardingComplete({ name, gender, dob });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 space-y-6 bg-card rounded-lg shadow-lg"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-card-foreground">
            {t('onboarding.title')}
          </h1>
          <p className="text-muted-foreground">{t('onboarding.subtitle')}</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t('onboarding.name.label')}</Label>
            <Input
              id="name"
              placeholder={t('onboarding.name.placeholder')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dob">{t('onboarding.dob.label')}</Label>
            <Input
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">{t('onboarding.gender.label')}</Label>
            <Select onValueChange={setGender} value={gender} required>
              <SelectTrigger id="gender">
                <SelectValue placeholder={t('onboarding.gender.placeholder')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">{t('onboarding.gender.male')}</SelectItem>
                <SelectItem value="female">{t('onboarding.gender.female')}</SelectItem>
                <SelectItem value="other">{t('onboarding.gender.other')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button type="submit" className="w-full">
          {t('onboarding.submit')}
        </Button>
      </form>
    </div>
  );
}
