import axios from "./http"; // 导入http中创建的axios实例
// 环境的切换
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
// 版本
const api_version = "/api/v1";
const api_version2 = "/api/v2";
const noticeCenter = {
    /**
     * @description: 获取消息数量
     * @param {type}
     * @return:
     */
    alertCount() {
        return axios.get(`${api_version2}/notices/get_alert_count`);
    },
    /**
     * @description: 获取消息列表
     * @param {type}
     * @return:
     */
    noticesList(params) {
        return axios.get(`${api_version2}/notices`, { params });
    },
    /**
     * @description: 获取审批列表
     * @param {type}
     * @return:
     */
    auditsList(params) {
        return axios.get(`${api_version2}/audits`, { params });
    },
    /**
     * @description: 获取最早一条待审批
     * @param {type}
     * @return:
     */
    auditsLatest() {
        return axios.get(`${api_version2}/audits/latest`);
    },
    /**
     * @description: 驳回审批
     * @param {type}
     * @return:
     */
    auditReject(id) {
        return axios.post(`${api_version2}/audits/${id}/reject`);
    },
    /**
     * @description: 通过审批
     * @param {type}
     * @return:
     */
    auditApprove(id) {
        return axios.post(`${api_version2}/audits/${id}/approve`);
    },
};
const tip = {
    /**
     * @description:获取学生纠音视频列表
     * @param {*}
     * @return {*}
     */

    studentTipList() {
        return axios.get(`${api_version2}/recommendations/student_list`);
    },
    /**
     * @description: 获取教师纠音视频列表
     * @param {*}
     * @return {*}
     */
    teacherTipList() {
        return axios.get(`${api_version2}/recommendations/teacher_list`);
    },
};
const classroom = {
    /**
     * @description: 获取班级列表
     * @param {type}
     * @return:
     */
    classrooms(params) {
        return axios.get(`${api_version2}/classrooms`, { params });
    },
    /**
     * @description: 获取班级列表(不分页)
     * @param {type}
     * @return:
     */
    single_list(params) {
        return axios.get(`${api_version2}/classrooms/single_list`, { params });
    },
    /**
     * @description: 获取班级详情
     * @param {type}
     * @return:
     */
    detail(id) {
        return axios.get(`${api_version2}/classrooms/${id}`);
    },
    /**
     * @description: 创建班级
     * @param {type}
     * @return:
     */
    create(params) {
        return axios.post(`${api_version2}/classrooms`, params);
    },
    /**
     * @description: 修改班级
     * @param {type}
     * @return:
     */
    revise(params) {
        return axios.put(`${api_version2}/classrooms/${params.id}`, params);
    },
    /**
     * @description: 搜索学校
     * @param {type}
     * @return:
     */
    schools(params) {
        return axios.get(`${api_version2}/schools`, { params });
    },
    /**
     * @description: 创建学校
     * @param {type}
     * @return:
     */
    createSchool(params) {
        return axios.post(`${api_version2}/schools`, params);
    },
    /**
     * @description: 获取学科列表
     * @param {type}
     * @return:
     */
    subjects(params) {
        return axios.get(`${api_version2}/subjects`, { params });
    },
    /**
     * @description: 获取年级列表
     * @param {type}
     * @return:
     */
    grades() {
        return axios.get(`${api_version2}/schools/grade_basics`);
    },
    /**
     * @description: 获取教材列表
     * @param {type}
     * @return:
     */
    textbooks(params) {
        return axios.get(`${api_version2}/chapters/school_textbooks`, { params });
    },
    /**
     * @description: 班级管理-删除学生
     * @param {type}
     * @return:
     */
    romoveMember(params) {
        return axios.post(`${api_version2}/classrooms/${params.id}/remove_member`, params);
    },
    /**
     * @description: 班级管理-退出班级
     * @param {type}
     * @return:
     */
    exit(params) {
        return axios.post(`${api_version2}/classrooms/${params.id}/exit`, params);
    },
    /**
     * @description: 是否申请过退出、加入班级
     * @param {*} params
     * @return {*}
     */

    isApply(params) {
        return axios.post(`${api_version2}/classrooms/${params.id}/is_apply`, params);
    },
    /**
     * @description: 根据code找班级
     * @param {type}
     * @return:
     */
    findByCodeCr(invite_code) {
        return axios.get(`${api_version2}/classrooms/find_by_code`, { params: { invite_code: invite_code } });
    },
    /**
     * @description: 班级管理-申请加入
     * @param {type}
     * @return:
     */
    applyJoinCr(params) {
        return axios.post(`${api_version2}/classrooms/${params.id}/apply`);
    },
    /**
     * @description: 班级管理-刷新邀请码
     * @param {type}
     * @return:
     */
    refreshCode(id) {
        return axios.put(`${api_version2}/classrooms/${id}/refresh_code`);
    },
    /**
     * @description: 班级排序
     * @param {*} params
     * @return {*}
     */
    resort(params) {
        return axios.post(`${api_version2}/classrooms/resort`, params);
    },
};
const teachGroup = {
    /**
     * @description: 获取教研组列表
     * @param {type}
     * @return:
     */
    teachGroups(params) {
        return axios.get(`${api_version2}/teach_groups`, { params });
    },
    /**
     * @description: 获取教研组详情
     * @param {type}
     * @return:
     */
    detail(id) {
        return axios.get(`${api_version2}/teach_groups/${id}`);
    },
    /**
     * @description: 创建教研组
     * @param {type}
     * @return:
     */
    create(params) {
        return axios.post(`${api_version2}/teach_groups`, params);
    },
    /**
     * @description: 修改教研组
     * @param {type}
     * @return:
     */
    revise(params) {
        return axios.put(`${api_version2}/teach_groups/${params.id}`, params);
    },
    /**
     * @description: 教研组管理-删除教师
     * @param {type}
     * @return:
     */
    romoveMember(params) {
        return axios.post(`${api_version2}/teach_groups/${params.id}/remove_member`, params);
    },
    /**
     * @description: 教研组管理-退出教研组
     * @param {type}
     * @return:
     */
    exit(params) {
        return axios.post(`${api_version2}/teach_groups/${params.id}/exit`, params);
    },
    /**
     * @description: 教研组管理-删除教研组
     * @param {type}
     * @return:
     */
    delete(params) {
        return axios.delete(`${api_version2}/teach_groups/${params.id}`, params);
    },
    /**
     * @description: 根据code找教研组
     * @param {type}
     * @return:
     */
    findByCodTg(invite_code) {
        return axios.get(`${api_version2}/teach_groups/find_by_code`, { params: { invite_code: invite_code } });
    },
    /**
     * @description: 教研组管理-申请加入
     * @param {type}
     * @return:
     */
    applyJoinTg(params) {
        return axios.post(`${api_version2}/teach_groups/${params.id}/apply`);
    },
    /**
     * @description: 教研组管理-刷新邀请码
     * @param {type}
     * @return:
     */
    refreshCode(id) {
        return axios.put(`${api_version2}/teach_groups/${id}/refresh_code`);
    },
};
const announce = {
    /**
     * @description: 更新前公告
     * @param {*}
     * @return {*}
     */
    beforeUpdateAnnounce() {
        return axios.get(`${api_version2}/announces/latest`);
    },
};
const auth = {
    /**
     * @description: 获取验证码
     * @param {type}
     * @return {type}
     */
    getPhoneCode(phone) {
        return axios.get(`${api_version2}/auths/get_phone_code`, { params: { phone: phone } });
    },
    /**
     * @description: 手机号密码登录
     * @param {type}
     * @return {type}
     */
    login(phone, password) {
        return axios.post(`${api_version2}/auths/login`, { phone, password });
    },
    /**
     * @description: 手机号验证码登录注册
     * @param {type}
     * @return {type}
     */
    loginByPhoneCode(phone, phone_code) {
        return axios.post(`${api_version2}/auths/login_by_phone_code`, { phone, phone_code });
    },
    /**
     * @description: 修改手机密码
     * @param {type}
     * @return {type}
     */
    updatePw(phone, phone_code, password, password_confirmation) {
        return axios.post(`${api_version2}/auths/update_pw`, { phone, phone_code, password, password_confirmation });
    },
    /**
     * @description: 完善用户信息
     * @param {type}
     * @return {type}
     */
    setRole(phone, password, phone_code, role, avatar, name, sex, birthday, title) {
        return axios.post(`${api_version2}/auths/set_role`, {
            phone,
            password,
            phone_code,
            role,
            avatar,
            name,
            sex,
            birthday,
            title,
        });
    },
    /**
     * @description: 修改手机密码
     * @param {type}
     * @return {type}
     */
    updatePhone(phone, phone_code) {
        return axios.post(`${api_version2}/auths/update_phone`, { phone, phone_code });
    },
    /**
     * @description: 完善用户信息
     * @param {type}
     * @return {type}
     */
    updateInfo(avatar, name, sex, birthday, title) {
        return axios.post(`${api_version2}/auths/update_info`, { avatar, name, sex, birthday, title });
    },
    /**
     * @description: 检查验证码
     * @param {type}
     * @return {type}
     */
    checkPhoneCode(phone, code) {
        return axios.post(`${api_version2}/auths/check_phone_code`, { phone: phone, phone_code: code });
    },
    /**
     * @description: 检查手机号是否注册
     * @param {type}
     * @return {type}
     */
    checkPhoneExist(phone) {
        return axios.post(`${api_version2}/auths/check_phone_exist`, { phone: phone });
    },
    /**
     * @description: 获取setting
     * @param {type}
     * @return {type}
     */
    setting() {
        return axios.get(`${api_version2}/settings`, {});
    },
    /**
     * @description: 提交user_set
     * @param {type}
     * @return {type}
     */
    user_set(key, value) {
        return axios.post(`${api_version2}/settings/user_set`, { key: key, value: value });
    },
    get_info() {
        return axios.get(`${api_version2}/auths/get_info`, {});
    },
    device_info(params) {
        return axios.post(`${api_version2}/settings/device_info`, params);
    },
    /**
     * @description:一键登录
     * @param {*} params
     * @return {*}
     */
    login_by_jverification(params) {
        return axios.post(`${api_version2}/auths/login_by_jverification`, params);
    },
    /**
     * @description: 获取学期报告列表
     * @param {*} params
     * @return {*}
     */
    semester(params) {
        return axios.get(`${api_version2}/reports/semester`, { params });
    },
    /**
     * @description: 获取学期报告详情
     * @param {*} params
     * @return {*}
     */
    semester_detail(params) {
        return axios.get(`${api_version2}/reports/semester_detail`, { params });
    },
    /**
     * @description: 获取愿望列表
     * @param {*}
     * @return {*}
     */
    getWish() {
        return axios.get(`${api_version2}/report_wishes`);
    },
    /**
     * @description: 提交愿望
     * @param {*} params
     * @return {*}
     */
    postWish(params) {
        return axios.post(`${api_version2}/report_wishes/submit_semester_wish`, params);
    },
    // report_wishes/submit_semester_wish
};
const RecitementService = {
    wordbooks() {
        return axios.get(`${api_version2}/wordbooks/private`);
    },
    publicWordbooks() {
        return axios.get(`${api_version2}/wordbooks/public`);
    },
    /**
     * @description: 获取词本
     * @param {type}
     * @return:
     */
    getWordbook(id) {
        return axios.get(`${api_version2}/wordbooks/${id}`);
    },

    /**
     * @description: 创建背单词批次
     * @param {type}
     * @return:
     */
    new(payload) {
        return axios.post(`${api_version2}/recite_batches`, payload);
    },

    /**
     * @description: 下一个单词
     * @param {type}
     * @return:
     */
    getNext(id) {
        return axios.get(`${api_version2}/recite_batches/${id}/next_word`);
    },

    /**
     * @description: 背完
     * @param {type}
     * @return:
     */
    end(id) {
        return axios.post(`${api_version2}/recite_batches/${id}/end`);
    },
    /**
     * @description:  背一个单词,
     * @param {type}
     * @return:
     */
    recite(id, wordId, isCorrect, tab, spell, spell_type, time) {
        return axios.post(`${api_version2}/recite_batches/${id}/recite_word`, {
            word_id: wordId,
            is_correct: isCorrect,
            last_tab: tab,
            spell: spell,
            spell_type: spell_type,
            answer_time: time,
        });
    },
    // /api/v2/wordbooks/{id}/error_words
    getError(params) {
        return axios.get(`${api_version2}/wordbooks/${params.id}/error_words`);
    },
    /**
     * 教师获取词汇列表
     * @param {*} id
     */
    getWords(params) {
        return axios.get(`${api_version2}/wordbooks/words`, { params });
    },
    //hs--作业
    /**
     * @description: 创建背单词批次
     * @param {type}
     * @return:
     */
    hs_new(payload) {
        return axios.post(`${api_version2}/hs_recite_batches`, payload);
    },
    /**
     * @description: 下一个单词
     * @param {type}
     * @return:
     */
    hs_getNext(id) {
        return axios.get(`${api_version2}/hs_recite_batches/${id}/next_word`);
    },
    /**
     * @description:  背一个单词,
     * @param {type}
     * @return:
     */
    hs_recite(id, wordId, isCorrect, tab, spell, spell_type, time) {
        return axios.post(`${api_version2}/hs_recite_batches/${id}/recite_word`, {
            word_id: wordId,
            is_correct: isCorrect,
            last_tab: tab,
            spell: spell,
            spell_type: spell_type,
            answer_time: time,
        });
    },
    /**
     * @description: 背完
     * @param {type}
     * @return:
     */
    hs_end(id) {
        return axios.post(`${api_version2}/hs_recite_batches/${id}/end`);
    },
    /**
     * @description: 单词反馈
     * @param {type}
     * @return:
     */
    wordFeedback(params) {
        return axios.post(`${api_version2}/word_feedbacks`, params);
    },
};
const phonogram = {
    phonograms() {
        return axios.get(`${api_version2}/phonograms`);
    },
    /**
     * @description: 正音完成后的接口
     * @param {type}
     * @return:
     */
    compeletePhone(params) {
        return axios.post(`${api_version2}/user_phonograms`, params);
    },
};
const tutorials = {
    tutorials(id) {
        return axios.get(`${api_version2}/homework_guides`, { subject_id: id });
    },
};
const exam = {
    /**
     * @description: 获取测评列表
     * @param {*} params
     */
    exams(params) {
        return axios.get(`${api_version2}/exams`, { params });
    },
    /**
     * @description: 创建测评
     * @param {*} params {lesson_id, classroom_details}
     */
    creatExam(params) {
        return axios.post(`${api_version2}/exams`, params);
    },
    /**
     * @description: 删除/撤回 测评
     * @param {*} params
     */
    recallExam(params) {
        return axios.put(`${api_version2}/exams/${params.id}/recall`, params);
    },
    /**
     * @description: 更新/提交测评正式发布
     * @param {*} params
     */
    updateExam(params) {
        return axios.put(`${api_version2}/exams/${params.id}`, params);
    },
    /**
     * @description: 创建测评的一道题
     * @param {*} params
     */
    createQuestion(params) {
        return axios.post(`${api_version2}/exam_questions`, params);
    },
    /**
     * @description: 转交测评的一道题
     * @param {*} params
     */
    handover(params) {
        return axios.put(`${api_version2}/exam_questions/handover`, params);
    },
    /**
     * @description: 删除测评的一道题
     * @param {*} params
     */
    recallQuestion(params) {
        return axios.put(`${api_version2}/exam_questions/${params.id}/recall`, params);
    },
    /**
     * @description: 获取测评详情
     * @param {*} params {id}
     */
    getExam(params) {
        return axios.get(`${api_version2}/exams/${params.id}`);
    },
    /**
     * @description: 获取题目详情
     * @param {*} params {id}
     */
    getQuestion(params) {
        return axios.get(`${api_version2}/exam_questions/${params.id}`);
    },
    /**
     * @description; 查看测评的班级详情
     * @param {*} params
     */
    classrooms(params) {
        return axios.get(`${api_version2}/exams/${params.id}/classrooms`);
    },
    /**
     * @description; 查看测评结果
     * @param {*} params
     */
    getExamResult(params) {
        return axios.get(`${api_version2}/exams/${params.exam_id}/show_scores`, { params });
    },
};
const selfStudy = {
    sentences(section_ids) {
        let params = { section_ids };
        return axios.get(`${api_version2}/sentences`, { params });
    },
    /**
     * @description: ids获取句子
     * @param {*} sentence_ids
     * @return {*}
     */
    getSentences(sentence_ids) {
        let params = { sentence_ids };
        return axios.get(`${api_version2}/sentences/sentences`, { params });
    },
    /**
     * @description: 自学作业升星
     * @param {*} challengId
     * @return {*}
     */
    selfStudyUpgrade(challengId) {
        return axios.put(`${api_version}/section_scores/${challengId}/upgrade`);
    },
    /**
     * @description: 作业升星
     * @param {*} challengId
     * @return {*}
     */
    homeworkUpgrade(challengId) {
        return axios.put(`${api_version}/homework_student_sections/${challengId}/upgrade`);
    },
};
const fasten = {
    /**
     * @description: 打卡任务列表
     * @param {*} params
     */
    fastens(params) {
        return axios.get(`${api_version2}/fastens`, { params });
    },
    /**
     * @description: 创建打卡任务
     * @param {*} params
     */
    createFasten(params) {
        return axios.post(`${api_version2}/fastens`, params);
    },
    /**
     * @description: 打卡任务详情
     * @param {*} params
     */
    fastenDetail(id) {
        return axios.get(`${api_version2}/fastens/${id}`);
    },
    /**
     * @description: 打卡任务缺卡list
     * @param {*}
     */
    fastenLoseList(params) {
        return axios.get(`${api_version2}/fastens/${params.id}/lose_list`, { params });
    },
    /**
     * @description: 打卡任务-学生打卡记录
     * @param {*}
     */
    fastenAnswers(params) {
        return axios.get(`${api_version2}/fastens/${params.id}/get_answers`, {
            params,
        });
    },
    /**
     * @description: 打卡记录
     * @param {*} params
     * @return {*}
     */

    fastenTimeline(params) {
        return axios.get(`${api_version2}/fasten_students/timeline`, {
            params,
        });
    },
    /**
     * @description:打卡统计
     * @param {*} id
     * @return {*}
     */

    fastenReport(params) {
        return axios.get(`${api_version2}/fastens/${params.id}/calculation`, {
            params,
        });
    },
    /**
     * @description: 打卡任务-删除/暂停
     * @param {*}
     */
    fastenPause(id, status) {
        return axios.put(`${api_version2}/fastens/${id}/pause`, {
            status: status,
        });
    },
    /**
     * @description: 学神打卡任务列表
     * @param {*} params
     */
    fastenStudents(params) {
        return axios.get(`${api_version2}/fasten_students`, { params });
    },
    /**
     * @description: 学生打卡任务详情
     * @param {*} params
     */
    fastenDeatailStudents(params) {
        return axios.get(`${api_version2}/fasten_students/${params.id}`, { params });
    },
    /**
     * @description: 学生打卡任务历史
     * @param {*} params
     */
    fastenHistoryStudents(params) {
        return axios.get(`${api_version2}/fasten_students/answers`, { params });
    },
    /**
     * @description: 打卡点赞
     * @param {*} params
     */
    likeFastenAnswer(id, is_like) {
        return axios.post(`${api_version2}/answers/${id}/set_like`, { is_like });
    },
    /**
     * @description: 获取阅读打卡
     * @param {*} params
     * @return {*}
     */
    readingFasten(params) {
        return axios.get(`${api_version2}/fasten_students/reading_fasten`, { params });
    },
    /**
     * @description: 随机获取阅读徽章
     * @param {*} params
     * @return {*}
     */
    createReadingBadges(params) {
        return axios.post(`${api_version2}/hs_badges`, params);
    },
};

const badges = {
    /**
     * @description: 教师是否开启争分夺秒徽章
     * @param {*} params
     */
    getSpeedBadge(params) {
        return axios.get(`${api_version2}/badges/speed_badge_status`, { params });
    },
    /**
     * 教师查看个人荣耀墙
     * @param {*} params
     */
    badgeReport(params) {
        return axios.get(`${api_version2}/reports/badge_detail`, { params });
    },
    /**
     * @description: 教师查看学生获得徽章情况
     * @param {*} params
     * @return {*}
     */
    homeworkBadges(params) {
        return axios.get(`${api_version2}/homeworks/${params.id}/show_badges`, { params });
    },
    /**
     * @description: 教师徽章列表
     * @param {*}
     * @return {*}
     */
    teacherList() {
        return axios.get(`${api_version2}/badges/teacher_list`);
    },
    /**
     * @description: 教师选择徽章列表
     * @param {*}
     * @return {*}
     */
    teacherSelectList() {
        return axios.get(`${api_version2}/badges/selector`);
    },
    /**
     * @description: 修改徽章状态
     * @param {*} id
     * @param {*} status
     * @return {*}
     */
    changeStatus(id, status) {
        return axios.put(`${api_version2}/badges/${id}/set_status`, { status: status });
    },
    /**
     * @description: 学神待领取徽章列表
     * @param {*}
     * @return {*}
     */
    studentUnGetBadge() {
        return axios.get(`${api_version2}/hs_badges/pickup_list`);
    },
    /**
     * @description: 学神领取
     * @param {*}
     * @return {*}
     */
    studentGetBadge(id) {
        return axios.put(`${api_version2}/hs_badges/${id}/pickup`);
    },
    /**
     * @description: 学生我的徽章
     * @param {*}
     * @return {*}
     */
    studentMyBadge() {
        return axios.get(`${api_version2}/badges/student_list`);
    },
    /**
     * @description: 创建徽章
     * @param {*} name 徽章文字
     * @param {*} code 徽章标记
     * @param {*} icon 徽章url
     * @param {*} status 徽章启用状态
     * @return {*}
     */
    createBadge(name, code, icon, status, original_url) {
        return axios.post(`${api_version2}/badges`, { name, code, icon, status, original_url });
    },
    /**
     * @description: 更新徽章
     * @param {*} id
     * @return {*}
     */
    updateBadge(id, name, code, icon, status, original_url) {
        return axios.put(`${api_version2}/badges/${id}`, { name, code, icon, status, original_url });
    },
    /**
     * @description: 删除徽章
     * @param {*} id
     * @return {*}
     */
    deleteBadge(id) {
        return axios.delete(`${api_version2}/badges/${id}`);
    },
};
const report = {
    /**
     * @description: 班级月报
     * @param {*} classroom_id
     * @param {*} month
     * @param {*} types
     * @param {*} teacher_id
     * @param {*} is_leader
     * @return {*}
     */
    class_month_report(classroom_id, month, types, teacher_id, is_leader) {
        const params = {
            classroom_id,
            month,
            types,
            teacher_id,
            is_leader,
        };
        return axios.get(`${api_version2}/reports/class_month_report`, { params: params });
    },
    /**
     * @description: 班级月报-学生AI朗读/跟读作业记录
     * @param {*} params
     * @return {*}
     */
    class_month_detail_oral(params) {
        return axios.get(`${api_version2}/reports/class_month_detail_oral`, { params });
    },
    /**
     * @description: 班级月报-听写详情
     * @param {*} params
     * @return {*}
     */
    class_month_detail_word(params) {
        return axios.get(`${api_version2}/reports/class_month_detail_word`, { params });
    },
};
const replies = {
    /**
     * @description: AI作业评价
     * @param {*} params
     * @return {*}
     */
    postComment(params) {
        return axios.post(`${api_version2}/replies/comment`, params);
    },
    /**
     * @description: AI作业评价撤回
     * @param {*} id
     * @return {*}
     */
    recallComment(id) {
        return axios.put(`${api_version2}/replies/${id}/recall_comment`);
    },
};
export default {
    noticeCenter,
    classroom,
    teachGroup,
    auth,
    RecitementService,
    phonogram,
    exam,
    selfStudy,
    tutorials,
    fasten,
    badges,
    tip,
    announce,
    report,
    replies,
};
