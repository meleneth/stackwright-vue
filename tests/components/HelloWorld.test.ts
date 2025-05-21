// tests/components/HelloWorld.test.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HelloWorld from '@/components/HelloWorld.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('HelloWorld.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders msg prop', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Test Message',
      },
    })

    expect(wrapper.text()).toContain('Test Message')
  })

  it('increments when clicked', async () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Stackwright',
      },
    })

    const button = wrapper.get('button')
    await button.trigger('click')

    expect(wrapper.text()).toContain('Count: 1')
  })
})
