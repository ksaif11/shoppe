import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const UserSignUp = async (data) => await API.post("/user/signup", data);
export const UserSignIn = async (data) => await API.post("/user/signin", data);

//Products
export const getAllProducts = async (filter) =>
  await API.get(`/products?${filter}`);

export const getProductDetails = async (id) => await API.get(`/products/${id}`);

//Cart

export const getCart = async (token) =>
  await API.get("/user/cart", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addToCart = async (token, data) =>
  await API.post(`/user/cart/`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteFromCart = async (token, data) =>
  await API.patch(`/user/cart/`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

//Favourites

export const getFavourite = async (token) => {
  try {
    const response = await API.get(`/user/favorite/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('API response:', response); // Log the full response
    return response; // Return the data fetched from the API
  } catch (error) {
    console.error("Error fetching favorites:", error);
    throw error; // Re-throw the error to be handled elsewhere
  }
};
  export const addToFavourite = async (token, data) => {
    try {
      const response = await API.post(`/user/favorite/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data; // Return the data returned by the API if needed
    } catch (error) {
      console.error("Error adding to favorites:", error);
      throw error; // Re-throw the error to be handled elsewhere
    }
  };

  export const deleteFromFavourite = async (token, data) => {
    try {
      const response = await API.patch(`/user/favorite/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data; // Return the data returned by the API if needed
    } catch (error) {
      console.error("Error deleting from favorites:", error);
      throw error; // Re-throw the error to be handled elsewhere
    }
  };

//Orders

export const placeOrder = async (token, data) =>
  await API.post(`/user/order/`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getOrders = async (token) =>
  await API.get(`/user/order/`, {
    headers: { Authorization: `Bearer ${token}` },
  });