import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com",
});

// Hàm gọi API có xác thực
const callApi = async (endpoint: string, method: string, data?: []) => {
  try {
    const token = "YOUR_AUTH_TOKEN"; // Lấy token từ Redux hoặc Context
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const response = await api({
      method,
      url: endpoint,
      data,
      headers,
    });

    return response.data;
  } catch (error) {
    console.error("Error calling API:", error);
    throw error;
  }
};

export default callApi;
