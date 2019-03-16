import { mount } from '@vue/test-utils'
import Default from '@/layouts/default'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Default)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
