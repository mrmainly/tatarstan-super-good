import axios from "axios";

const publicURL = "";

const api = (url) => {
    const instance = axios.create({
        baseURL: publicURL + url,
        headers: {
            "Content-Type": "application/json",
        },
    });
    return instance;
};

class API {
    postLeave(data) {
        return api("api/partner/").post(null, {
            code: data.code,
            password: data.password,
        });
    }

    async getNews() {
        let result = await api(`api/news/?limit=2`).get();
        return result;
    }
}

export default new API();
