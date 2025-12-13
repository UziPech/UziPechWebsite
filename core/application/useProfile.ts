import { useState, useEffect } from 'react';
import { Profile, initialProfile } from '../domain/entities';

// In a real app, this would fetch from an API Gateway / Repository
export const useProfile = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => {
      setProfile(initialProfile);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return { profile, loading };
};