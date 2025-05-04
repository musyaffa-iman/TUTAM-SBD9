const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://tt-project-backend.vercel.app/api/v1'
  : 'http://localhost:3000/api/v1';

export const todoApi = {
  async getAllTodos(userId) {
    const response = await fetch(`${API_URL}/todos?userId=${userId}`);
    const result = await response.json();
    return result.data;
  },

  async createTodo(todo) {
    const response = await fetch(`${API_URL}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    const result = await response.json();
    return result.data;
  },

  async updateTodo(id, updates) {
    const response = await fetch(`${API_URL}/todos?id=${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    const result = await response.json();
    return result.data;
  },

  async deleteTodo(id) {
    const response = await fetch(`${API_URL}/todos?id=${id}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    return result.data;
  },
};