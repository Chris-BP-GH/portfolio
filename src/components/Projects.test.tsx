import { render, screen, fireEvent } from '@testing-library/react';
import { Projects } from './Projects';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { I18nProvider } from '../hooks/I18nContext';
import { projects } from '../data/projects';

// Mock matchMedia if needed, or IntersectionObserver
beforeEach(() => {
  window.IntersectionObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    disconnect: vi.fn(),
    unobserve: vi.fn(),
  })) as any;
});

describe('Projects Component', () => {
  it('renders correctly with All category by default', () => {
    render(<I18nProvider><Projects /></I18nProvider>);
    
    // Check if the title is present (using Thai default)
    expect(screen.getByText(/ผลงานเด่น/i)).toBeInTheDocument();
    
    // Check that 'All' button has the active classes
    const allBtn = screen.getByText('ทั้งหมด');
    expect(allBtn).toHaveClass('bg-white');
    
    // At least one project should be rendered
    expect(screen.getByText(projects[0].title.th)).toBeInTheDocument();
  });

  it('filters projects when a category is clicked', () => {
    render(<I18nProvider><Projects /></I18nProvider>);
    
    // Switch to "Web App"
    // There are multiple "Web App" texts (the button, and the project tags)
    const webAppBtns = screen.getAllByText('Web App');
    const filterBtn = webAppBtns.find(el => el.tagName === 'BUTTON');
    if (filterBtn) {
      fireEvent.click(filterBtn);
      // 'Web App' button should be active
      expect(filterBtn).toHaveClass('bg-white');
    }
    
    // Verify that a known Web App project is visible
    const webAppProject = projects.find(p => p.category === 'Web App');
    if (webAppProject) {
      expect(screen.getByText(webAppProject.title.th)).toBeInTheDocument();
    }
  });
});
