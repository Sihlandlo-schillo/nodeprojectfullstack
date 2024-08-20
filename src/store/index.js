import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
// import { applyToken } from '@/service/AuthenticatedUser.js'
// import { useCookies } from 'vue3-cookies'

// const {cookies} = useCookies()
const apiURL = 'https://nodeprojectfullstack.onrender.com'

export default createStore({
  
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    recentProducts : null
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setRecentProducts(state, value) {
      state.recentProducts = value
    },
    setProduct(state, value) {
      state.product = value
    },

  },
  actions: {
    // async recentProducts(context) {
    //   try {
    //     const { results, msg } = await (await axios.get(`${apiURL}product/recent`)).data
    //     if (results) {
    //       context.commit('setRecentProducts', results)
    //     } else {
    //       toast.error(`${msg}`, {
    //         autoClose: 2000,
    //         position: toast.POSITION.BOTTOM_CENTER
    //       })
    //     }
    //   } catch (e) {
    //     toast.error(`${e.message}`, {
    //       autoClose: 2000,
    //       position: toast.POSITION.BOTTOM_CENTER
    //     })
    //   }
    // }

    async fetchProducts(context) {
      
      try {
        const results = await (await axios.get(`${apiURL}/products`)).data
        const msg = 'ena ooop'

        console.log(msg);
        
        
        if (results) {
          context.commit('setProducts', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    }
    
  },
  modules: {
  }
})