const API_BASE_URL = '/api';

export const api = {
    // Services
    getServices: async () => {
        const response = await fetch(`${API_BASE_URL}/Service`);
        if (!response.ok) throw new Error('Failed to fetch services');
        return response.json();
    },

    getServiceById: async (id) => {
        const response = await fetch(`${API_BASE_URL}/Service/${id}`);
        if (!response.ok) throw new Error('Failed to fetch service');
        return response.json();
    },

    createService: async (serviceData, token) => {
        const response = await fetch(`${API_BASE_URL}/Service`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(serviceData)
        });
        if (!response.ok) throw new Error('Failed to create service');
        return response.json();
    },

    updateService: async (id, serviceData, token) => {
        const response = await fetch(`${API_BASE_URL}/Service/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(serviceData)
        });
        if (!response.ok) throw new Error('Failed to update service');
        // PUT requests might not return JSON, check status
        return response.status === 204 ? null : response.json();
    },

    deleteService: async (id, token) => {
        const response = await fetch(`${API_BASE_URL}/Service/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error('Failed to delete service');
        return response.status === 204 ? null : response.json();
    },

    // Auth
    login: async (credentials) => {
        const response = await fetch(`${API_BASE_URL}/Auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        if (!response.ok) throw new Error('Login failed');

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            return response.json();
        } else {
            return response.text();
        }
    }
};
