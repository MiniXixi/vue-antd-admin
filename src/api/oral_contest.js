import axios from "./http"; // 导入http中创建的axios实例
// 环境的切换
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
// 版本
const api_version = "/api/v1";

export default {
    /**
     * @description: 获取视频列表
     * @param {type}
     * @return:
     */
    videoList(payload = { level: "classroom" }) {
        return axios.get(`${api_version}/homework_student_recommends`, { params: payload });
    },
    /**
     * @description: 获取setting，这个跟前面的setting没区别，但是现在独立出来，用于口语大赛的内容
     * @param {type}
     * @return:
     */
    setting() {
        return axios.get(`${api_version}/settings`, {});
    },
    /**
     * @description: 作业详情
     * @param {type}
     * @return:
     */
    homeworkDetail(payload) {
        let params = {};
        // 处理单个
        if (payload && payload.student_id) params.student_id = payload.student_id;
        // 获取多个
        if (payload && payload.student_ids) params.student_ids = payload.student_ids;
        // 获取多个
        if (payload && payload.category) params.category = payload.category;
        return axios.get(`${api_version}/homework_students`, { params: params });
    },
    /**
     * @description: 学生撤回答案
     * @param {type}
     * @return:
     */
    recallAnswer(payload = { answer_id: 0 }) {
        return axios.put(`${api_version}/answers/${payload.answer_id}/recall`);
    },
    /**
     * @description: 学生撤回答案
     * @param {type}
     * @return:
     */
    recallReplies(payload = { id: 0 }) {
        return axios.put(`${api_version}/replies/${payload.id}/recall`);
    },
    /**
     * @description: 学生提交答案
     * @param {type}
     * @return:
     */
    answer(payload = { id: 0, attachments: [], content: "" }) {
        return axios.post(`${api_version}/answers`, payload);
    },
    /**
     * @description: 获取学生的同班同学
     * @param {type}
     * @return:
     */
    classmates() {
        return axios.get(`${api_version}/students/classmates`);
    },
    /**
     * @description: 获取列表
     * @param {type}
     * @return:
     */
    auditList(is_simple_list = false, is_leader = false) {
        return axios.get(`${api_version}/homeworks/video_homeworks`, {
            params: { is_simple_list: is_simple_list, is_leader: is_leader },
        });
    },
    /**
     * @description: star 推荐
     * @param {type}
     * @return:
     */
    star(id, is_recommend) {
        return axios.put(`${api_version}/homework_student_recommends/${id}`, { is_recommend: is_recommend });
    },
    /**
     * @description: like 点赞
     * @param {type}
     * @return:
     */
    like(id, is_like) {
        return axios.put(`${api_version}/homework_student_recommends/${id}/like`, { is_like: is_like });
    },
    /**
     * @description: 获取作业列表
     * @param {type}
     * @return:
     */
    homeworks() {
        return axios.get(`${api_version}/homeworks?types=Video`);
    },
    /**
     * @description: 批改
     * @param {type}
     * @return:
     */
    replies(id = 0, isFinish = true) {
        return axios.post(`${api_version}/replies`, { id: id, isFinish: isFinish });
    },
    /**
     * @description: 获取作业列表
     * @param {type}
     * @return:
     */
    teacher_homeworks(id) {
        return axios.get(`${api_version}/activities/${id}/teacher_homeworks`);
    },
    /**
     * @description: 获取作业列表
     * @param {type}
     * @return:
     */
    colleagues(teacher_id) {
        return axios.get(`${api_version}/teachers/colleagues`, { params: { teacher_id } });
    },
    /**
     * @description: 交接
     * @param {type}
     * @return:
     */
    handover(homework_ids, to_teacher_id) {
        return axios.put(`${api_version}/homeworks/handover`, { homework_ids, to_teacher_id });
    },
    /**
     * @description: 获取作业列表
     * @param {type}
     * @return:
     */
    students_detail(id) {
        return axios.get(`${api_version}/activities/${id}/students_detail`);
    },
    /**
     * @description: 补发作业
     * @param {type} 
     * @return: 
     */
    send_homeworks(id, student_ids) {
        return axios.post(`${api_version}/activities/${id}/send_homeworks`, { student_ids });
    }
};
