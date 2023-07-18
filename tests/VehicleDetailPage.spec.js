import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

import VehicleDetailPage from '@/pages/VehicleDetailPage.vue';

const mockIntersectionObserver = vi.fn().mockReturnValue({
  disconnect: () => null,
  observe: () => null,
  unobserve: () => null,
});

window.IntersectionObserver = mockIntersectionObserver;

describe('VehicleDetailPage', () => {
  it('renders.', () => {
    const wrapper = mount(VehicleDetailPage, {
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
