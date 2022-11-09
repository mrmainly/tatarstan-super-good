import axios from "axios";

const publicURL = "https://tdregionsnab.ru/";
const testURL = "http://127.0.0.1:8000/";

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
        return api("api/partner/").post(null, data);
    }

    async getNews(page) {
        let result = await api(`api/news/?page=${page}`).get();
        return result;
    }
}

export default new API();
