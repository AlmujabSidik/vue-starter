import { ref } from "vue";
import axios from "axios";

const API_URL = "http://localhost:2000/products";

export function useProduct() {
  const product = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchProduct = async (id) => {
    try {
      isLoading.value = true;
      const response = await axios.get(`${API_URL}/${id}`);
      product.value = response.data;
    } catch (error) {
      console.error("Error fetching product:", error);
      error.value = "Failed to fetch product details";
    } finally {
      isLoading.value = false;
    }
  };

  async function createProduct(product) {
    try {
      await axios.post(API_URL, product);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  }

  const updateProduct = async (id, data) => {
    try {
      isLoading.value = true;
      await axios.put(`${API_URL}/${id}`, data);
      return true;
    } catch (error) {
      console.error("Error updating product:", error);
      error.value = "Failed to update product";
      return false;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    product,
    isLoading,
    error,
    fetchProduct,
    createProduct,
    updateProduct,
  };
}
