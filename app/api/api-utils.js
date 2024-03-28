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
