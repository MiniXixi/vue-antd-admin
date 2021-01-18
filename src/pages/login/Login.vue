<template>
    <common-layout>
        <div class="top">
            <div class="header">
                <img alt="logo" class="logo" src="@/assets/img/logo.png" />
                <span class="title">{{ systemName }}</span>
            </div>
            <div class="desc">Ant Design 是西湖区最具影响力的 Web 设计规范</div>
        </div>
        <div class="login">
            <a-form-model ref="ruleForm" :model="form" :rules="rules" @submit="onSubmit">
                <a-tabs
                    v-model="activeKey"
                    size="large"
                    :tabBarStyle="{ textAlign: 'center' }"
                    style="padding: 0 2px;"
                    @change="onClickChangeMethod"
                >
                    <a-tab-pane tab="账户密码登录" key="password">
                        <a-alert
                            type="error"
                            :closable="true"
                            v-show="error"
                            :message="error"
                            showIcon
                            style="margin-bottom: 24px;"
                        />
                        <a-form-item>
                            <a-input
                                v-model="form.username"
                                autocomplete="autocomplete"
                                size="large"
                                placeholder="admin"
                            >
                                <a-icon slot="prefix" type="user" />
                            </a-input>
                        </a-form-item>
                        <a-form-item>
                            <a-input
                                v-model="form.password"
                                size="large"
                                placeholder="888888"
                                autocomplete="autocomplete"
                                type="password"
                            >
                                <a-icon slot="prefix" type="lock" />
                            </a-input>
                        </a-form-item>
                    </a-tab-pane>
                    <a-tab-pane tab="手机号登录" key="code">
                        <a-form-item>
                            <a-input v-model="form.phone" size="large" placeholder="mobile number">
                                <a-icon slot="prefix" type="mobile" />
                            </a-input>
                        </a-form-item>
                        <a-form-item>
                            <a-row :gutter="8" style="margin: 0 -4px">
                                <a-col :span="16">
                                    <a-input v-model="form.code" size="large" placeholder="captcha">
                                        <a-icon slot="prefix" type="mail" />
                                    </a-input>
                                </a-col>
                                <a-col :span="8" style="padding-left: 4px">
                                    <a-button
                                        style="width: 100%"
                                        class="captcha-button"
                                        size="large"
                                        @click="onClickGetPhoneCode"
                                    >
                                        {{
                                            hadGetCode
                                                ? `重新发送` + (codeTimer > 0 ? `(${codeTimer})` : "")
                                                : "获取验证码"
                                        }}</a-button
                                    >
                                </a-col>
                            </a-row>
                        </a-form-item>
                    </a-tab-pane>
                </a-tabs>
                <div>
                    <a-checkbox :checked="true">自动登录</a-checkbox>
                    <a style="float: right">忘记密码</a>
                </div>
                <a-form-item>
                    <a-button
                        :loading="logging"
                        style="width: 100%;margin-top: 24px"
                        size="large"
                        htmlType="submit"
                        type="primary"
                        >登录</a-button
                    >
                </a-form-item>
                <div>
                    其他登录方式
                    <a-icon class="icon" type="alipay-circle" />
                    <a-icon class="icon" type="taobao-circle" />
                    <a-icon class="icon" type="weibo-circle" />
                    <router-link style="float: right" to="/dashboard/workplace">注册账户</router-link>
                </div>
            </a-form-model>
        </div>
    </common-layout>
</template>

<script>
import CommonLayout from "@/layouts/CommonLayout";
import { login, getRoutesConfig } from "@/services/user";
import { setAuthorization } from "@/utils/request";
import { loadRoutes } from "@/utils/routerUtil";
import { mapMutations } from "vuex";

export default {
    name: "Login",
    components: { CommonLayout },
    data() {
        return {
            logging: false,
            activeKey: "password",
            error: "",
            phoneRegex: /^1\d{10}$/,
            codeTimer: 60,
            hadGetCode: false,
            form: {
                username: "",
                password: "",
                phone: "",
                code: "",
            },
            rules: {
                username: [{ required: true, message: "请输入账户名", whitespace: true }],
                password: [{ required: true, message: "请输入密码", whitespace: true }],
            },
        };
    },
    computed: {
        systemName() {
            return this.$store.state.setting.systemName;
        },
        /**
         * @description: 是否能够获取验证码，条件是填写手机号码
         * @param {type}
         * @return {type}
         */
        canGetPhoneCode() {
            if (this.activeKey == "code") {
                return this.phoneRegex.test(this.form.phone);
            } else {
                return false;
            }
        },
    },
    methods: {
        ...mapMutations("account", ["setUser", "setPermissions", "setRoles"]),
        onSubmit(e) {
            e.preventDefault();
            this.$refs.ruleForm.validate((valid) => {
                console.log("valid", valid, this.form);
                if (valid) {
                    if (this.activeKey == "password") {
                        if (!this.form.username || !this.form.password) return;
                        // 手机号密码登录
                        this.$newApi.auth
                            .login(this.form.username, this.form.password)
                            .then((res) => {
                                this.afterLogin(res);
                            })
                            .catch((error) => {
                                console.log("手机号或密码错误，请正确输入");
                            });
                    } else {
                        if (!this.form.phone || !this.form.code) return;
                        // 手机号验证码登录
                        this.$newApi.auth
                            .loginByPhoneCode(this.form.phone, this.form.code)
                            .then((res) => {
                                this.afterLogin(res);
                            })
                            .catch(() => {
                                toast.clear();
                                this.$toast({ messgae: "手机号或验证码错误，请正确输入" });
                            });
                    }
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        afterLogin(res) {
            console.log("afterLogin", res);
            const loginRes = res.data;

            if (loginRes.code === 0) {
                // 在判断用户是否是一个游客角色

                this.setUser(loginRes);
                setAuthorization({ token: loginRes.token, expireAt: new Date() });
                // 获取路由配置
                getRoutesConfig().then((result) => {
                    const routesConfig = result.data.data;
                    console.log("routesConfig", routesConfig);
                    loadRoutes(routesConfig);
                    this.$router.push("/dashboard/workplace");
                    this.$message.success("登录成功");
                });
            } else {
                if (res.data.errorcode == 10) {
                    this.$message.error("账号不存在，请注册");
                } else if (res.data.errorcode == 11) {
                    this.$message.error("密码错误");
                } else {
                    this.$message.error("手机号或验证码错误，请正确输入");
                }
            }
        },
        /**
         * @description: 获取手机验证码
         * @param {type}
         * @return {type}
         */
        async onClickGetPhoneCode() {
            // 条件1，能获取验证码
            if (!this.canGetPhoneCode) {
                this.$message.error("请输入正确手机号");
                return false;
            }
            // 条件二，计时不在0-60中间
            if (this.codeTimer > 0 && this.codeTimer < 60) {
                this.$message.error("请勿频繁发送验证码");
                return false;
            }

            const result = await this.$newApi.auth.checkPhoneExist(this.form.phone).catch(() => {});

            if (result.data.code === 0 && !result.data.exist) {
                this.$message.error("手机号未注册，请注册");
                return false;
            }

            const hide = this.$message.loading("获取验证码...", 0);
            this.$newApi.auth
                .getPhoneCode(this.form.phone)
                .then((res) => {
                    console.log(res);
                    hide();
                    if (res.data.code === 0) {
                        this.hadGetCode = true;
                        this.codeTimer = 60;
                        this.canReSend = false;
                        const _this = this;
                        // 计时，并且到0恢复60，并且取消定时器
                        this.codeInterval = setInterval(function() {
                            --_this.codeTimer;
                            if (_this.codeTimer === 0) {
                                clearInterval(_this.codeInterval);
                                _this.canReSend = true;
                            }
                        }, 1000);
                    } else if (res.data.errorcode === 8) {
                        this.$message.error("请勿频繁发送验证码");
                    } else {
                        this.$message.error("获取验证码失败请重试");
                    }
                })
                .catch((error) => {
                    console.log("onClickGetPhoneCode -> error", error);
                    hide();
                    this.$message.error("获取验证码失败请重试");
                });
        },
        /**
         * @description: 切换登录方式
         * @param {type}
         * @return {type}
         */
        onClickChangeMethod() {
            this.hadGetCode = false;
            this.codeTimer = 60;
            clearInterval(this.codeInterval);
            this.codeInterval = null;
            this.canReSend = false;
        },
    },
};
</script>

<style lang="less" scoped>
.common-layout {
    .top {
        text-align: center;
        .header {
            height: 44px;
            line-height: 44px;
            a {
                text-decoration: none;
            }
            .logo {
                height: 44px;
                vertical-align: top;
                margin-right: 16px;
            }
            .title {
                font-size: 33px;
                color: @title-color;
                font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica, sans-serif;
                font-weight: 600;
                position: relative;
                top: 2px;
            }
        }
        .desc {
            font-size: 14px;
            color: @text-color-second;
            margin-top: 12px;
            margin-bottom: 40px;
        }
    }
    .login {
        width: 368px;
        margin: 0 auto;
        @media screen and (max-width: 576px) {
            width: 95%;
        }
        @media screen and (max-width: 320px) {
            .captcha-button {
                font-size: 14px;
            }
        }
        .icon {
            font-size: 24px;
            color: @text-color-second;
            margin-left: 16px;
            vertical-align: middle;
            cursor: pointer;
            transition: color 0.3s;

            &:hover {
                color: @primary-color;
            }
        }
    }
}
</style>
