/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/**
 * 模块接口列表
 */
import axios from "./http"; // 导入http中创建的axios实例
import qs from "qs"; // 根据需求是否导入qs模块
import store from "../store/index";
/**
 * 接口域名的管理
 */
// 环境的切换
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

const api_version = "/api/v1";
const api_version2 = "/api/v2";
//登录接口
const logout = () => {
    store.commit("clearLoginMessage");
};
const changeRole = (params) => {
    return axios.put(`${api_version}/auths/change_role`, qs.stringify(params));
};
const activity = {
    activities(params) {
        return axios.get(`${api_version}/activities`, { params });
    },
    activityInfo(id) {
        return axios.get(`${api_version}/activities/${id}`);
    },
    saveActivity(params) {
        return axios.post(`${api_version}/activities`, params);
    },
    reviseActivity(id, params) {
        return axios.put(`${api_version}/activities/${id}`, qs.stringify(params));
    },
    schools(params) {
        return axios.get(`${api_version}/schools`, { params });
    },
    classrooms(id, params) {
        return axios.get(`${api_version}/activities/${id}/students_detail`, { params });
    },
    sendHomeworks(id, params) {
        return axios.post(`${api_version}/activities/${id}/send_homeworks`, params);
    },
};
const classroom = {
    classrooms(params) {
        return axios.get(`${api_version2}/classrooms`, { params });
    },
};
const homework = {
    homeworks(params) {
        return axios.get(`${api_version}/homeworks`, { params });
    },
    publicHomework(id, is_public) {
        return axios.put(`${api_version}/homeworks/${id}/set_public`, { is_public: is_public });
    },
    exams(params) {
        return axios.get(`${api_version}/homeworks/exam_homeworks`, { params });
    },
    getScoreTypes(params) {
        return axios.get(`${api_version2}/score_entity_types`, { params });
    },
    getGradeList(params) {
        return axios.get(`${api_version}/homeworks/${params.id}`, { params });
    },
    getAnswers(params) {
        return axios.get(`${api_version}/answers`, { params });
    },
    getShowscore(id, classroom_id) {
        return axios.get(`${api_version}/homeworks/${id}/show_scores`, { params: { classroom_id: classroom_id } });
    },
    getErrorWords(id, classroom_id) {
        return axios.get(`${api_version}/homeworks/${id}/error_words`, { params: { classroom_id: classroom_id } });
    },
    saveHomework(params) {
        return axios.post(`${api_version}/homeworks`, params);
    },
    leaderHomework(params) {
        return axios.post(`${api_version}/homeworks/create_via_classrooms`, params);
    },
    saveReplies(params) {
        return axios.post(`${api_version}/replies`, params);
    },
    saveAudioReply(params) {
        return axios.post(`${api_version}/homeworks/audio_reply`, qs.stringify(params));
    },
    students(params) {
        return axios.get(`${api_version}/students`, { params });
    },
    recallHomework(homework_id) {
        return axios.put(`${api_version}/homeworks/${homework_id}/recall`, qs.stringify({ homework_id }));
    },
    handoverHomework(params) {
        return axios.put(`${api_version}/homeworks/handover`, params);
    },
    recallAnswers(id, params) {
        return axios.put(`${api_version}/replies/${id}/recall`, qs.stringify(params));
    },
    forceFinishStudentHomework(params) {
        return axios.post(`${api_version}/replies/force_finish`, qs.stringify(params));
    },
    saveFile(params) {
        return axios.post(`${api_version}/file`, qs.stringify(params));
    },
    /**
     * @description: 提交图片编辑
     * @param {type}
     * @return:
     */
    postImageReply(payload) {
        return axios.post(`${api_version}/homeworks/image_reply`, payload);
    },
    /**
     * @description: 提交视频编辑
     * @param {type}
     * @return:
     */
    postVideoReply(payload) {
        return axios.post(`${api_version}/homeworks/video_reply`, payload);
    },
    /**
     * @description: 获取图片编辑的详情
     * @param {type}
     * @return: http://oral3-test.wfl-ischool.cn/api/v1/attachments/:id/image_replies?token=54cb1339d3efc27568963b7c2e2a6383
     */
    getImageReplyDetail(payload) {
        return axios.get(`${api_version}/attachments/${payload}/image_replies`);
    },
    /**
     * @description: 同校同事（批改转交）
     * @param {*} params
     */
    colleagues(params) {
        return axios.get(`${api_version}/teachers/colleagues`, { params });
    },
    /**
     * @description: 组长下属（评测转交）
     * @param {*} params
     */
    followers(params) {
        return axios.get(`${api_version}/teachers/followers`, { params });
    },
};
const notice = {
    notifications(params) {
        return axios.get(`${api_version}/notifications`, { params });
    },
    getNotificationInfo(id) {
        return axios.get(`${api_version}/notifications/${id}`);
    },
    saveNotifications(params) {
        return axios.post(`${api_version}/notifications`, params);
    },
    recallNotice(id) {
        return axios.put(`${api_version}/notifications/${id}/recall`);
    },
};
const lessons = {
    textbooks(params) {
        return axios.get(`${api_version}/lessons/classroom_textbooks`, { params });
    },
    unit(params) {
        return axios.get(`${api_version}/lessons/${params}/textbook_chapters`);
    },
    article(params) {
        return axios.get(`${api_version}/lessons/${params}/chapter_section`);
    },
    wordbooks(params) {
        return axios.get(`${api_version2}/wordbooks/classroom_wordbooks`, { params });
    },
    wordunit(params) {
        return axios.get(`${api_version2}/wordbooks/${params}`);
    },
};
const selfstudy = {
    classrooms(params) {
        return axios.get(`${api_version}/classrooms`, { params });
    },
    textbooks(params) {
        return axios.get(`${api_version2}/textbooks/${params.id}`, { params });
    },
    month_report(params) {
        return axios.get(`${api_version}/common_reports/month_report`, { params });
    },
    practice_index(params) {
        return axios.get(`${api_version}/reports/practice_index`, { params });
    },
    practice_details(params) {
        return axios.get(`${api_version}/reports/practice_details`, { params });
    },
    syllable_details(id, params) {
        return axios.get(`${api_version}/reports/${id}/phonogram_students`, {
            params,
        });
    },
    intonation_index(params) {
        return axios.get(`${api_version}/reports/classrooms`, { params });
    },
    intonation_details(params) {
        return axios.get(`${api_version}/reports/${params}/classroom`);
    },
    saveExerciseData(params) {
        return axios.post(`${api_version}/sentences/${params.id}/record_score`, qs.stringify(params));
    },
    leader_month_report(params) {
        return axios.get(`${api_version}/common_reports/leader_month_report`, { params });
    },
    /**
     * @description: 音标报表
     * @param {*} params
     */
    phonogram_report(params) {
        return axios.get(`${api_version2}/reports/phonogram`, { params });
    },
    /**
     * @description: 音标报表详情
     * @param {*} params
     */
    phonogram_detail(params) {
        return axios.get(`${api_version2}/reports/phonogram_detail`, { params });
    },
    /**
     * @description: 词汇报表详情
     * @param {*} params
     */
    recite_word_report(params) {
        return axios.get(`${api_version2}/reports/recite_word`, { params });
    },
    /**
     * @description: 词汇报表高频错词
     * @param {*} params
     */
    recite_word_report_error_words(params) {
        return axios.get(`${api_version2}/reports/recite_word_error_words`, { params });
    },
    /**
     * @description: 词汇报表学生错词
     * @param {*} params
     */
    student_error_words(params) {
        return axios.get(`${api_version2}/reports/recite_word_detail`, { params });
    },
};
const feedbacks = (params) => {
    return axios.post(`${api_version}/feedbacks`, qs.stringify(params));
};
export default {
    activity,
    classroom,
    homework,
    notice,
    selfstudy,
    logout,
    lessons,
    feedbacks,
    changeRole,
};
