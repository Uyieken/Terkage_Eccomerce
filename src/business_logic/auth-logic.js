const apiUrl = "http://127.0.0.1:8000/api";

const login = async (email, password) => {
    try {
        const response = await fetch(`${apiUrl}/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            // Handle error scenarios
            console.error('A Server Error occurred', response);
            return null;
        }

        const data = await response.json();
        // Do something with the response data
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
};


export {
    login
}

const register = async (full_name, email, password) => {
    try {
        const response = await fetch(`${apiUrl}/register/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ full_name, email, password }),
        });

        if (!response.ok) {
            // Handle error scenarios
            console.error('A Server Error occurred', response);
            return null;
        }

        const data = await response.json();
        // Do something with the response data
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
};


export {
    register
}

