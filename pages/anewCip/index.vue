<template>
    <div class="anewCip">
        <section class="product-head">
            <div class="container">
                <div class="banner">
                    <div class="banner-tips">
                        <div class="platform-name">园区精细化监管及预警平台-AnewCIP</div>
                        <div class="platform-description">实现园区有毒有害及恶臭异味态势感知、预警监控、污染研判、企业评价、档案管理、移动互联等场景应用，助力园区以最小的管理成本实现环境管理与企业经济协同发展</div>
                        <div class="btns flex p-4">
                            <div class="btn">产品咨询<i class="iconfont icon-anniu-jiantou"></i></div>
                            <div class="btn">应用案例<i class="iconfont icon-anniu-jiantou"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="page_title">开发中....</div>
        <!-- <section class="adv-card container flex">
            <div class="adv-item" v-for="(item, index) in list" :key="index">
                <i></i>
                <span>{{item.label}}</span>
            </div>
        </section>
        <section class="page container">
            <div class="page_title">核心优势</div>
            <div class="page-content">
                <img src="~/assets/images/map/cip_youshi.png" />
            </div>
        </section>
        <section class="page srceen">
            <div class="page_title">两大场景</div>
            <div class="page-content container">
                <div class="screen-item">
                    <div class="screen-head flex">
                        <div class="order">01</div>
                        <div class="screen-des flex">
                            <div class="screen-title">日常场景</div>
                            <div class="audio"></div>
                            <div class="tips">园区企业无组织排放问题突出，恶臭异味溯源困难？</div>
                        </div>
                    </div>
                    <div class="srceen-content">
                        <img src="~/assets/images/map/cip_cj_01.png" />
                        <div class="screen-bottom-list flex">
                            <div class="screen-bottom-list-item flex">
                                <div class="col-left">智能预警</div>
                                <div class="col-right">五级报警/嗅阈值报警机制、本地化扩散条件预测模型</div>
                            </div>
                            <div class="screen-bottom-list-item flex">
                                <div class="col-left">事件交办</div>
                                <div class="col-right">任务交办闭环管理、任务工单微信群推送</div>
                            </div>
                            <div class="screen-bottom-list-item flex">
                                <div class="col-left">恶臭溯源</div>
                                <div class="col-right">Calpuff扩散模型、VOCs走航核查、企业源谱关联</div>
                            </div>
                            <div class="screen-bottom-list-item flex">
                                <div class="col-left">企业评价</div>
                                <div class="col-right">TVOC/恶臭因子插值、企业四色图评价</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="screen-item m-t-140">
                    <div class="screen-head flex">
                        <div class="order">02</div>
                        <div class="screen-des flex">
                            <div class="screen-title">应急防控</div>
                            <div class="audio"></div>
                            <div class="tips">园区企业应急处置能力薄弱，如何应急调度减少损失？</div>
                        </div>
                    </div>
                    <div class="srceen-content">
                        <img src="~/assets/images/map/cip_cj_02.png" />
                        <div class="screen-bottom-list flex">
                            <div class="screen-bottom-list-item flex">
                                <div class="col-left">智能预案</div>
                                <div class="col-right">应急预案、应急模拟、疏散路线</div>
                            </div>
                            <div class="screen-bottom-list-item flex">
                                <div class="col-left">应急联动</div>
                                <div class="col-right">应急隔离、指挥标绘、应急调度</div>
                            </div>
                            <div class="screen-bottom-list-item flex">
                                <div class="col-left">应急资源</div>
                                <div class="col-right">应急专家、应急车辆、应急物资</div>
                            </div>
                            <div class="screen-bottom-list-item flex">
                                <div class="col-left">扩散模拟</div>
                                <div class="col-right">Slab扩散模拟、影响范围评估</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="page">
            <div class="page_title">客户案例</div>
            <div class="page-content container">
                <div class="case-list flex gap-30">
                    <div class="case-list-item">
                        <img src="~/assets/images/map/cip_case_01.png" />
                        <div class="list-item__title">涉气信访投诉量：同比<span class="count">下降40%</span></div>
                        <div class="list-item__title">涉气问题数量：同比<span class="count">下降90%</span></div>
                    </div>
                    <div class="case-list-item">
                        <img src="~/assets/images/map/cip_case_02.png" />
                        <div class="list-item__title">园区服务<span class="count">313次</span> 企业整改：<span class="count">19家</span></div>
                        <div class="list-item__title">季度污染天数：同比<span class="count">下降88%</span></div>
                    </div>
                </div>
            </div>
        </section> -->
    </div>
</template>
<script setup>
const list = ref([
    {
        icon: '',
        label: '全局信息掌控'
    },
    {
        icon: '',
        label: '微信智能推送'
    },
    {
        icon: '',
        label: '智能精细预报'
    },
    {
        icon: '',
        label: '智能报警分析'
    },
    {
        icon: '',
        label: '污染专项管控'
    },
    {
        icon: '',
        label: '云端指挥调度'
    }
])
</script>
<style lang="less" scoped>
.m-t-140 {
    margin-top: 140px;
}
.gap-30 {
    gap: 30px;
}
.case-list {
    margin-bottom: 70px;
}
.list-item__title {
    line-height: 48px;
    border-radius: 0px 0px 8px 8px;
    text-align: center;
    font-size: 18px;
    color: #3D4F6A;
    .count {
        font-size: 20px;
        font-weight: 500;
        color: #3D4F6A;
        border-bottom: 8px solid #C0DF9D;
        margin: 0 10px;
    }
}
.product-head {
    width: 100%;
    height: 920px;
    background: url('~/assets/images/map/toppic.png') no-repeat center center;
    // background: linear-gradient(0deg, #FFFFFF 0%, #D6EEFE 40%, #B0D1F1 100%);
}
.banner {
    padding-top: 130px;
    align-items: center;
    color: #fff;
    .banner-tips {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        .platform-name {
            font-size: 40px;
            font-family: Source Han Sans CN;
            font-weight: 500;
            padding-bottom: 20px;
        }
        .platform-description {
            font-size: 18px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            line-height: 34px;
        }
    }
    .btns {
        // margin-top: 64px;
        gap: 20px;
    }
    .btn {
        width: 140px;
        line-height: 48px;
        background: #02C7B5;
        box-shadow: 0px 3px 11px 0px rgba(2,199,181,0.3);
        border-radius: 8px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        padding: 0;
        margin: 0;
    }
}
.adv-card {
    justify-content: space-around;
    height: 130px;
}
.page {
    &-title {
        line-height: 168px;
        font-size: 40px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #000414;
        text-align: center;
        // padding: 20px 0;
        position: relative;
        
    }
}
.screen-item {
    .screen-head {
        margin-bottom: 82px;
        margin-top: 23px;
        .screen-title {
            width: 149px;
            border: 2px solid rgba(220,238,219,0.4);
            border-radius: 25px;
            text-align: center;
            line-height: 50px;
            font-size: 20px;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #8CC54D;
            background: #ffffffa6;
        }
        .tips {
            line-height: 50px;
            background: #94CA59;
            border-radius: 8px;
            margin-left: 20px;
            padding: 0 20px;
            font-size: 20px;
            color: #fff;
        }
        .order {
            width: 60px;
            height: 46px;
            font-size: 64px;
            font-family: Alibaba PuHuiTi;
            font-weight: 500;
            color: #94CA59;
            position: absolute;
            margin-bottom: 107px;
            z-index: 0;
        }
        .screen-des {
            position: absolute;
            margin-left: 38px;
        }
    }
    .screen-bottom-list {
        flex-wrap: wrap;
        margin-top: 20px;
        &-item {
            width: 50%;
            line-height: 40px;
            .col-left {
                font-size: 20px;
                font-family: Source Han Sans CN;
                font-weight: 500;
                color: #8CC54D;
            }
            .col-right {
                margin-left: 50px;
                font-size: 18px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #3D4F6A;
                position: relative;
                &::before {
                    content: "";
                    background: #E2E7EC;
                    width: 1px;
                    height: 18px;
                    left: -23px;
                    top: 12px;
                    position: absolute;
                }
            }
        }
    }
}
.srceen {
    margin-top: 72px;
    // height: 720px;
    width: 100%;
    // background: url('~/assets/images/map/cip_screen_bg.png') no-repeat center center;
}
</style>