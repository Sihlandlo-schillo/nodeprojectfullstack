import { createStore } from "vuex";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
// import { applyToken } from '@/service/AuthenticatedUser.js'
// import { useCookies } from 'vue3-cookies'

// const {cookies} = useCookies()
const apiURL = "https://nodeprojectfullstack.onrender.com";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    recentProducts: null,
  },
  getters: {},
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setRecentProducts(state, value) {
      state.recentProducts = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
    DELETE_PRODUCT(state, productId) {
      state.products = state.products.filter(product => product.product_id !== productId);
    },
    DELETE_USER(state, userId) {
      state.users = state.users.filter(user => user.user_id !== userId);
    },
  },
  actions: {

    // Working
    async fetchProducts(context) {
      try {
        const results = await (await axios.get(`${apiURL}/products`)).data;

        const msg = "Successfully fetched products";

        console.log(msg);

        if (results) {
          context.commit("setProducts", results);
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    // Editing - not working?
    async updateProduct(context, payload) {
      try {
        const response = await axios.patch(`${apiURL}/product/${payload.product_id}`,payload);
        const { msg } = response.data;

        if (msg) {
          // Dispatch to fetch the updated products
          await context.dispatch("fetchProducts");

          // Show success toast
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        // Show error toast
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });

        // Log the error for debugging purposes
        console.error("Error updating product:", e);
      }
    },
    // Working
    async fetchProduct(context, id) {
      try {
        console.log(id);

        const result = await (await axios.get(`${apiURL}/products/${id}`)).data;
        const msg = "ena ooop";

        console.log(msg);

        if (result) {
          context.commit("setProduct", result);
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    // Adding - not working
    async addProduct(context, payload) {
      try {
        const { msg } = await (
          await axios.post(`${apiURL}/products/addProduct`, payload)
        ).data;
        if (msg) {
          context.dispatch("fetchProducts");
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    // Working
    async fetchUser(context, id) {
      try {
        const { result, msg } = await (
          await axios.get(`${apiURL}user/${id}`)
        ).data;
        if (result) {
          context.commit("setUser", result);
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    // deleting - Working
    deleteProduct({ commit }, productId) {
      // Normally, you'd also send a request to an API to delete the product
      commit('DELETE_PRODUCT', productId);
    },

    // USERS



    // Working
    async fetchUsers(context) {
      try {
        const results = await (await axios.get(`${apiURL}/users`)).data;

        const msg = "Users not recieved";

        if (results) {
          context.commit("setUsers", results);
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    // delete - Working
    deleteUser({ commit }, userId) {
      commit('DELETE_USER', userId);
    },
    // Adding - not working
    async addUser(context, userPayload) {
      try {
        const data = await axios.post(`${apiURL}/users/register`, userPayload);
        if (data) {
          context.dispatch("fetchUsers");
          toast.success(`${data}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
    // Updating - not working
    async editUser(context, payload) {
      try {
        const response = await axios.patch(`${apiURL}users/update/${payload.user_id}`,payload);
        const { msg } = response.data;

        if (msg) {
          // Dispatch to fetch the updated users
          await context.dispatch("fetchUsers");

          // Show success toast
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        // Show error toast
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
        });

        // Log the error for debugging purposes
        console.error("Error updating user", e);
      }
    },
  },
  modules: {},
});
