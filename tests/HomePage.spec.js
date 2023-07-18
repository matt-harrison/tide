import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

import HomePage from '@/pages/HomePage.vue';

describe('HomePage', () => {
  it('renders.', () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
        stubs: {
          RouterLink: true,
        },
      },
    });

    expect(wrapper.html()).toBeTruthy();
  });
});
