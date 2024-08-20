<template>
    <div class="admin-page">
      <h1>Product Management</h1>
      <div class="product-management">
        <h2>Manage Products</h2>
        <button @click="showAddProductForm = !showAddProductForm">
          {{ showAddProductForm ? 'Cancel' : 'Add New Product' }}
        </button>
  
        <form v-if="showAddProductForm" @submit.prevent="addProduct">
          <input v-model="newProduct.name" placeholder="Product Name" required />
          <input v-model="newProduct.price" type="number" placeholder="Price" required />
          <textarea v-model="newProduct.description" placeholder="Description"></textarea>
          <input v-model="newProduct.imageUrl" placeholder="Image URL" />
          <button type="submit">Add Product</button>
        </form>
  
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>
                <input v-model="product.name" @blur="updateProduct(product)" />
              </td>
              <td>
                <input v-model="product.price" type="number" @blur="updateProduct(product)" />
              </td>
              <td>
                <textarea v-model="product.description" @blur="updateProduct(product)"></textarea>
              </td>
              <td>
                <input v-model="product.imageUrl" @blur="updateProduct(product)" />
              </td>
              <td>
                <button @click="deleteProduct(product.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [],
        newProduct: {
          name: '',
          price: '',
          description: '',
          imageUrl: ''
        },
        showAddProductForm: false
      }
    },
    methods: {
      fetchProducts() {
        fetch('/api/products')
          .then(response => response.json())
          .then(data => {
            this.products = data;
          })
          .catch(error => console.error('Error fetching products:', error));
      },
      addProduct() {
        fetch('/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.newProduct)
        })
        .then(response => response.json())
        .then(data => {
          this.products.push(data);
          this.newProduct.name = '';
          this.newProduct.price = '';
          this.newProduct.description = '';
          this.newProduct.imageUrl = '';
          this.showAddProductForm = false;
        })
        .catch(error => console.error('Error adding product:', error));
      },
      updateProduct(product) {
        fetch(`/api/products/${product.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(product)
        })
        .then(response => response.json())
        .then(data => {
          console.log('Product updated:', data);
        })
        .catch(error => console.error('Error updating product:', error));
      },
      deleteProduct(id) {
        fetch(`/api/products/${id}`, {
          method: 'DELETE'
        })
        .then(() => {
          this.products = this.products.filter(product => product.id !== id);
        })
        .catch(error => console.error('Error deleting product:', error));
      }
    },
    mounted() {
      this.fetchProducts();
    }
  }
  </script>
  
  <style scoped>
  .admin-page {
    padding: 20px;
  }
  
  .product-management {
    margin-top: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  
  table th, table td {
    padding: 10px;
    border: 1px solid #ddd;
  }
  
  input, textarea {
    padding: 5px;
    margin: 5px 0;
    width: 100%;
  }
  
  button {
    padding: 5px 10px;
    margin-top: 10px;
  }
  </style>
  