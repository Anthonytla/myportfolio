import axios from 'axios';

const API_URL = 'http://localhost:3000/auth/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'signin', {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                password: user.password,
                phone: user.phone,
                address: user.address,
                city: user.city,
                country: user.country,
                birth_date: user.birth_date,
                description: user.description
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'signup', {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
            phone: user.phone,
            address: user.address,
            city: user.city,
            country: user.country,
            birth_date: user.birth_date,
            description: user.description
        });
    }
}

export default new AuthService();