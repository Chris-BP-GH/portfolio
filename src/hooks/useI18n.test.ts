import { renderHook, act } from '@testing-library/react';
import { useI18n } from './useI18n';
import { I18nProvider } from './I18nContext';
import { describe, it, expect, beforeEach } from 'vitest';

describe('useI18n', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('initializes with "th" if localStorage is empty', () => {
    const { result } = renderHook(() => useI18n(), { wrapper: I18nProvider });
    expect(result.current.lang).toBe('th');
  });

  it('loads language from localStorage if valid', () => {
    localStorage.setItem('lang', 'en');
    const { result } = renderHook(() => useI18n(), { wrapper: I18nProvider });
    expect(result.current.lang).toBe('en');
  });

  it('persists language selection to localStorage', () => {
    const { result } = renderHook(() => useI18n(), { wrapper: I18nProvider });
    act(() => {
      result.current.setLang('en');
    });
    expect(localStorage.getItem('lang')).toBe('en');
  });

  it('translates simple string keys correctly', () => {
    const { result } = renderHook(() => useI18n(), { wrapper: I18nProvider });
    
    // Default TH
    expect(result.current.t('nav.home')).toBe('หน้าแรก');
    
    // Switch EN
    act(() => { result.current.setLang('en'); });
    expect(result.current.t('nav.home')).toBe('Home');
  });

  it('returns fallback key if translation does not exist', () => {
    const { result } = renderHook(() => useI18n(), { wrapper: I18nProvider });
    expect(result.current.t('invalid.key' as any)).toBe('invalid.key');
  });
});
