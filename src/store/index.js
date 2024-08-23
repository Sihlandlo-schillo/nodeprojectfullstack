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

    async fetchProducts(context) {
      
      try {
        const results = await (await axios.get(`${apiURL}/products`)).data
        
        const msg = 'Successfully fetched products'

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
    },

  async updateProduct(context, payload) {
    try {
      const response = await axios.patch(`${apiURL}product/${payload.product_ID}`, payload);
      const { msg } = response.data;
  
      if (msg) {
        // Dispatch to fetch the updated products
        await context.dispatch('fetchProducts');
        
        // Show success toast
        toast.success(msg, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    } catch (e) {
      // Show error toast
      toast.error(e.message, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      });
      
      // Log the error for debugging purposes
      console.error('Error updating product:', e);
    }
  },
    async fetchProduct(context, id) {
      
      try {
        console.log(id);
        
        const result = await (await axios.get(`${apiURL}/products/${id}`)).data
        const msg = 'ena ooop'

        console.log(msg);
        
        
        if (result) {
          context.commit('setProduct', result)
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
    },
    
    // Add a Product

    async addProduct(context, payload) {
      try {
        const { msg } = await (await axios.post(`${apiURL}/products/addProduct`, payload)).data
        if (msg) {
          context.dispatch('fetchProducts')
          toast.success(`${msg}`, {
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
    },

    // USERS

    async fetchUsers(context) {
      try {
        const results = await (await axios.get(`${apiURL}/users`)).data

        const msg = 'Users not recieved'


    // User(s)

    async fetchUsers(context) {
      try {
        const { results, msg } = await (await axios.get(`${apiURL}user`)).data

        if (results) {
          context.commit('setUsers', results)
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
    },
    async fetchUser(context, id) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}user/${id}`)).data
        if (result) {
          context.commit('setUser', result)
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
    },

    async delete(context, id) {
      console.log('hey');
      
      try {
        const data = await axios.delete(`${apiURL}/products/delete/${id}`)
        console.log(data, 'gfsfgfg');
        
        if (data) {
          const msg = 'Product successfully deleted'
          context.dispatch('fetchUsers')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        } else {
          toast.error(`Nope`, {
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
    },
    async addUser(context, userPayload) {
      try {
        const data = await axios.post(`${apiURL}/users/register`, userPayload)
        if (data) {
          context.dispatch('fetchUsers')
          toast.success(`${data}`, {
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
    },
  },
  modules: {
  }
})