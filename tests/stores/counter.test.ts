// tests/store/counter.test.ts
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/stores/counter'

describe('counter store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('starts at 0', () => {
    const store = useCounterStore()
    expect(store.count).toBe(0)
  })

  it('increments properly', () => {
    const store = useCounterStore()
    store.increment()
    expect(store.count).toBe(1)
  })
})
