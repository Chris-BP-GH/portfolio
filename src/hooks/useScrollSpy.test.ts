import { renderHook, act } from '@testing-library/react';
import { useScrollSpy } from './useScrollSpy';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('useScrollSpy', () => {
  let mockObserve: ReturnType<typeof vi.fn>;
  let mockDisconnect: ReturnType<typeof vi.fn>;
  
  beforeEach(() => {
    mockObserve = vi.fn();
    mockDisconnect = vi.fn();
    
    window.IntersectionObserver = vi.fn().mockImplementation((callback: any) => {
      // Expose callback so we can simulate intersection manually
      (window as any).__intersectionObserverCallback = callback;
      return {
        observe: mockObserve,
        disconnect: mockDisconnect,
        unobserve: vi.fn(),
      };
    }) as any;
  });

  it('tracks active section IDs on scroll', () => {
    const sectionIds = ['home', 'about', 'projects'];
    
    // For intersection observer to work, documents needs these elements
    sectionIds.forEach(id => {
      const el = document.createElement('div');
      el.id = id;
      document.body.appendChild(el);
    });

    const { result } = renderHook(() => useScrollSpy(sectionIds));
    
    // Initial active section shouldn't eagerly set if no intersection yet or mock isn't triggered
    expect(result.current).toBe('');

    const triggerIntersection = (id: string, isIntersecting: boolean) => {
      act(() => {
        (window as any).__intersectionObserverCallback([{
          target: { id },
          isIntersecting
        }]);
      });
    };

    // Simulate intersecting 'about'
    triggerIntersection('about', true);
    expect(result.current).toBe('about');

    // Clean up
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });
  });
});
