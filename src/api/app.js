import axios from "./http"; // 导入http中创建的axios实例
// 环境的切换
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
// 版本
const api_version = "/api/v1";

export default {
    /**
     * @description: 获取修改用户信息的页面
     * @param {type}
     * @return:
     */
    users(callback_url, token) {
        return axios.put(`${api_version}/users/${token}`, { callback_url: callback_url });
    },
    /**
     * @description: 刷新用户信息
     * @param {type}
     * @return:
     */
    refreshUser() {
        return axios.get(`${api_version}/users/refresh`);
    },
    /**
     * @description: 获取班级列表
     * @param {type} { is_leader: Boolean }
     * @return:
     */
    classrooms(params) {
        return axios.get(`${api_version}/classrooms`, { params: params });
    },
    /**
     * @description: 班级月报
     * @param {type}
     * @return:
     */
    class_month_report(classroom_id, month, types, teacher_id, is_leader) {
        const params = {
            classroom_id,
            month,
            types,
            teacher_id,
            is_leader,
        };
        return axios.get(`${api_version}/common_reports/class_month_report`, { params: params });
    },
    /**
     * @description: 练习统计
     * @param {type}
     * @return:
     */
    practice_index(classroom_id, textbook_id, start_at, end_at) {
        const params = {
            classroom_id,
            textbook_id,
            start_at,
            end_at,
        };
        return axios.get(`${api_version}/reports/practice_index`, { params: params });
    },
    /**
     * @description: 练习详情
     * @param {type}
     * @return:
     */
    practice_details(student_id, textbook_id, start_at, end_at) {
        const params = {
            student_id,
            textbook_id,
            start_at,
            end_at,
        };
        return axios.get(`${api_version}/reports/practice_details`, { params: params });
    },
    /**
     * @description: 获取书本
     * @param {type}
     * @return:
     */
    textbooks(classroom_id) {
        const params = { classroom_id };
        return axios.get(`${api_version}/chapters/textbooks`, { params });
    },
};
