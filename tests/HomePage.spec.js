import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';

import HomePage from '@/pages/HomePage.vue';

describe('HomePage', () => {
  it('renders.', () => {
    const wrapper = mount(HomePage);

    expect(wrapper.html()).toContain('Home');
  });
});
