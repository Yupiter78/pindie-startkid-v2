export const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (response.status !== 200) throw new Error("bad request");
        const data = await response.json();
        console.log("data: ", data);
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export const isResponseOk = (response) => {
    return !(response instanceof Error);
};

const normalizeDataObject = (obj) => {
    return {
        ...obj,
        category: obj.categories,
        users: obj.users_permissions_users
    };
};

export const normalizeData = (data) => {
    return data.map((item) => {
        return normalizeDataObject(item);
    });
};

export const getNormalizedGamesDataByCategory = async (url, category) => {
    const data = await getData(`${url}?categories.name=${category}`);
    return normalizeData(data);
};

export const getNormalizedGameDataById = async (url, id) => {
    const data = await getData(`${url}/${id}`);
    return normalizeDataObject(data);
};

export const authorize = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (response.status !== 200) throw new Error("Authorisation Error");
        const result = await response.json();
        console.log("result: ", result);
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export const setJWT = (jwt) => {
    localStorage.setItem("jwt", jwt);
};

export const getJWT = () => {
    return localStorage.getItem("jwt");
};

export const removeJWT = () => {
    localStorage.removeItem("jwt");
};

export const getMe = async (url, jwt) => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: { Authorization: `Bearer ${jwt}` }
        });
        if (response.status !== 200) throw new Error("Error get data");
        const result = await response.json();
        console.log("result: ", result);
        return result;
    } catch (error) {
        console.error("error: ", error);
        return error;
    }
};

export const checkIfUserVoted = (game, userId) => {
    return game.users.find((user) => user.id === userId);
};

export const vote = async (url, jwt, usersArray) => {
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`
            },
            body: JSON.stringify({ users_permissions_users: usersArray })
        });
        if (response.status !== 200) {
            throw new Error("Ошибка голосования");
        }
        const result = await response.json();
        console.log("result: ", result);
        return result;
    } catch (error) {
        return error;
    }
};
