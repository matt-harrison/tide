import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';

import VehicleDetailPage from '@/pages/VehicleDetailPage.vue';

describe('VehicleDetailPage', () => {
  it('renders.', () => {
    const wrapper = mount(VehicleDetailPage);

    expect(wrapper.html()).toContain('Vehicle Detail Page');
  });
});
