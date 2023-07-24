import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

import SearchResultsPage from '@/pages/SearchResultsPage.vue';

describe('SearchResultsPage', () => {
  it('renders.', () => {
    const wrapper = mount(SearchResultsPage, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
        stubs: {
          a: true,
        },
      },
    });

    expect(wrapper.html()).toBeTruthy();
  });
});
