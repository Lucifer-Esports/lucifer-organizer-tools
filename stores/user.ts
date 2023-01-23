import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

// user is the name of this store. It is unique across your application
// and will appear in devtools
export const useUserStore = defineStore('user', {
  // a function that returns a fresh state
  state: () => ({
    faceitToken: useStorage('faceitToken', ''),
    jwt: useStorage('jwt', null),
  }),
  // getters
  getters: {
    faceitCode(): string {
      return this.faceitToken;
    },
  },
  // actions
  actions: {
    logout() {
      this.faceitToken = '';
      this.jwt = null;
    },
    setFaceitToken(code: string) {
        this.faceitToken = code;
    }
  },
})
