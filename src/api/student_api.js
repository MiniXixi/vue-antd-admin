/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/**
 * 模块接口列表
 */
import axios from "./http";
import axiosLib from "axios"; // 导入http中创建的axios实例
import qs from "qs"; // 根据需求是否导入qs模块
import store from "../store/index";
// import sha256 from "js-sha256";
// import md5 from "js-md5";
/**
 * 接口域名的管理
 */
// 环境的切换
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

const api_version = "/api/v1";
//登录接口
const logout = () => {
    store.commit("clearLoginMessage");
};
const webLogin = (params) => {
    return axios.get(`${api_version}/users/login`, { params });
};
const login = (params) => {
    return axios.post(`${api_version}/auths/login`, qs.stringify(params));
};
const setting = () => {
    return axios.get(`${api_version}/settings`, {});
};
const avatar = (params) => {
    return axios.post(`${api_version}/users`, qs.stringify(params));
};
const version = () => {
    return axios.get(`${api_version}/versions`, {});
};
const homework = {
    homeworks(params) {
        return axios.get(`${api_version}/homeworks`, { params });
    },
    getAnswers(params) {
        return axios.get(`${api_version}/answers`, { params });
    },
    setAnswers(params) {
        return axios.post(`${api_version}/answers`, params);
    },
    recallAnswers(id, params) {
        return axios.put(`${api_version}/answers/${id}/recall`, qs.stringify(params));
    },
    saveFile(params) {
        return axios.post(`${api_version}/file`, qs.stringify(params));
    },
    /**
     * @description:获取不分页作业
     * @param {*}
     * @return {*}
     */
    homeworksSingle(params) {
        return axios.get(`${api_version}/homeworks/single_list`, { params });
    },
};
const notice = {
    notifications(params) {
        return axios.get(`${api_version}/notifications`, { params });
    },
    getNotificationInfo(params) {
        return axios.get(`${api_version}/notifications/notianswers`, {
            params,
        });
    },
};
const jsonp = (params) => {
    return new Promise((resolve, reject) => {
        window.jsonCallBack = (result) => {
            resolve(result);
        };
        var JSONP = document.createElement("script");
        JSONP.onerror = function(err) {
            reject(err); //报错处理
        };
        JSONP.type = "text/javascript";
        var url = params.url + "?";
        Object.keys(params.data).forEach((el) => {
            url += "&" + el + "=" + params.data[el];
        });
        JSONP.src = `${url}&callback=jsonCallBack`;
        document.getElementsByTagName("head")[0].appendChild(JSONP);
        setTimeout(() => {
            document.getElementsByTagName("head")[0].removeChild(JSONP);
        }, 500);
    });
};
const selfstudy = {
    textbooks() {
        return axios.get(`${api_version}/chapters/textbooks`);
    },
    courses(textbook_id) {
        let params = { textbook_id: textbook_id };
        return axios.get(`${api_version}/chapters`, { params });
    },
    sentences(section_id) {
        let params = { section_id: section_id };
        return axios.get(`${api_version}/sentences`, { params });
    },
    syllableVideos(content) {
        return axios.get(`${api_version}/phonograms/${content}`);
    },
    syllableTexts(content) {
        return axios.get(`${api_version}/phonograms/${content}/contents`);
    },
    phoneticList() {
        return axios.get(`/api/v2/phonograms`);
    },
    phoneticDetail(id) {
        return axios.get(`/api/v2/phonograms/${id}`);
    },
    challengeVoices(id) {
        return axios.get(`${api_version}/section_scores/${id}`);
    },
    youdao(params) {
        var _appKey = "62b27b7a176c8a3a";
        var _appSecret = "LO1wXq4PpC61c07nQ5aLPlE1iqSfi1dj";
        var _salt = new Date().getTime();
        var curTime = Math.round(new Date().getTime() / 1000);
        var _signature = _appKey + params + _salt + curTime + _appSecret;
        var sign = sha256(_signature);
        return jsonp({
            url: "http://openapi.youdao.com/api",
            data: {
                q: params,
                from: "en",
                to: "en",
                appKey: _appKey,
                salt: _salt,
                sign: sign,
                signType: "v3",
                curtime: curTime,
            },
        });
    },

    xunfei(base64) {
        var xfAppId = "5c773334";
        var xfAppKey = "04c239816eaad5995dd9d98a69f01ea0";
        var curTime = Math.round(new Date().getTime() / 1000);
        var xfParams = btoa(JSON.stringify({ language: "en", location: "true" }));
        var xfCheckSum = md5(xfAppKey + curTime + xfParams);
        let formdata = new FormData();
        console.log(base64.substring(0, 22), "base64.substring(22");

        // formdata.append("image", encodeURI(base64.substring(22, base64.length)));
        formdata.append("image", encodeURI(base64));
        return axiosLib.post(
            `https://webapi.xfyun.cn/v1/service/v1/ocr/handwriting?language=en&location=true`,
            formdata,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
                    "X-Appid": xfAppId,
                    "X-CurTime": curTime,
                    "X-Param": xfParams,
                    "X-CheckSum": xfCheckSum,
                },
            }
        );
    },

    //作业AI打分模块
    createAiChallenge(homework_student_id) {
        return axios.post(`${api_version}/homework_student_sections`, {
            homework_student_id: homework_student_id,
            // section_id: section_id,
        });
    },
    createChallenge(section_id) {
        return axios.post(`${api_version}/section_scores`, qs.stringify({ section_id: section_id }));
    },
    sendAiChallenge(homework_student_id, sentence_id, user_voice, user_time, user_metrics, challenge_id, types) {
        //挑战 句子记录创建
        let params = {
            sentence_id: sentence_id,
            homework_student_id: homework_student_id,
            sentence: {
                audio_url: user_voice,
                audio_time: user_time,
                score: user_metrics.total_score,
                origin_metrics: user_metrics,
                types: types ? 1 : 0,
            },
        };
        if (challenge_id != null) params.homework_student_section_id = challenge_id;
        return axios.post(`${api_version}/homework_student_sentences`, params);
    },

    getAIChallengeDetail(homework_section_id) {
        return axios.get(`${api_version}/homework_student_sections/${homework_section_id}`);
    },

    endAiChallenge(challenge_id, star, score, metrics) {
        let params = {
            id: challenge_id,
            stars: star,
            score: score,
            analysis: metrics,
        };
        return axios.put(`${api_version}/homework_student_sections/${params.id}/complete`, params);
    },
    saveExerciseData(sentence_id, user_voice, user_time, user_metrics, challenge_id, types) {
        let params = {
            id: sentence_id,
            sentence: {
                audio_url: user_voice,
                audio_time: user_time,
                score: user_metrics.total_score,
                origin_metrics: JSON.stringify(user_metrics),
                types: types ? 1 : 0,
            },
        };
        if (challenge_id != null) params.section_score_id = challenge_id;
        return axios.post(`${api_version}/sentences/${params.id}/record_score`, params);
    },
    endChallenge(challenge_id, score, analysis, stars) {
        let params = {
            id: challenge_id,
            score: score,
            stars: stars,
            analysis: analysis,
        };
        return axios.put(`${api_version}/section_scores/${params.id}`, params);
    },
};
export default {
    login,
    webLogin,
    homework,
    notice,
    selfstudy,
    logout,
    setting,
    version,
    avatar,
};
