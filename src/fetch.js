export const fetchApi = async (url, name, password) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                password: password
            })
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};