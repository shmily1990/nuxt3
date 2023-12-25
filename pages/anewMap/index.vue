<template>
    <div class="anewMap">
        <section class="product-head">
            <div class="container">
                <div class="banner flex">
                    <div class="left">
                        <div class="name">AnewMapTM</div>
                        <div class="platform-name">空气质量改善服务智能云平台</div>
                        <div class="platform-description">帮助管理者快速、全面了解大气污染发生发展的全时空变化信息，建立环境敏感区域与污染源之间的全证据链关联分析，分场景给出精准管控方案并动态评估管控效果。</div>
                        <div class="btns flex p-4">
                            <div class="btn">产品咨询<i class="iconfont icon-gengduo-xiangyou"></i></div>
                            <div class="btn">应用案例<i class="iconfont icon-gengduo-xiangyou"></i></div>
                        </div>
                    </div>
                    <img src="~/assets/images/map-banner-img.png" class="wow fadeInRight" />
                </div>
                <div class="feature-card flex">
                    <div class="feature-item" v-for="(item, index) in list" :key="index">
                        <img src="`~/assets/images/map/feature-card-01.png`" />
                        <span>{{item.label}}</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="page container">
            <div class="page-title">核心优势</div>
            <div class="page-content">
                <img src="~/assets/images/map/map_ys.png" />
            </div>
        </section>
        <section class="page">
            <div class="page-title">六大场景</div>
            <div class="page-content">
                <div class="item relative">
                    <div class="container">
                        <img src="~/assets/images/map/mapcj_01.png" />
                        <div class="introduction">
                            <div class="title"><span class="order">01</span><span>智慧大屏</span></div>
                            <div class="sub-title">信息汇聚、掌控全局、成果尽显</div>
                            <div class="desrciption">这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案。</div>
                        </div>
                    </div>
                    <div class="p-bg item-bg-01"></div>
                </div>
                <div class="item relative">
                    <div class="container">
                        
                        <div class="introduction">
                            <div class="title"><span class="order">02</span><span>数据推送</span></div>
                            <div class="sub-title">模板中心、数据修订、人工审核</div>
                            <div class="desrciption">这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案。</div>
                        </div>
                        <img src="~/assets/images/map/mapcj_02.png" />
                    </div>
                    <div class="p-bg item-bg-02"></div>
                </div>
                <div class="item relative">
                    <div class="container">
                        <img src="~/assets/images/map/mapcj_03.png" />
                        <div class="introduction">
                            <div class="title"><span class="order">03</span><span>预警预报</span></div>
                            <div class="sub-title">多源慧聚、短临预报、实时订正</div>
                            <div class="desrciption">这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案。</div>
                        </div>
                    </div>
                    <div class="p-bg item-bg-01"></div>
                </div>
                <div class="item relative">
                    <div class="container">
                        
                        <div class="introduction">
                            <div class="title"><span class="order">04</span><span>数据推送</span></div>
                            <div class="sub-title">模板中心、数据修订、人工审核</div>
                            <div class="desrciption">这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案。</div>
                        </div>
                        <img src="~/assets/images/map/mapcj_04.png" />
                    </div>
                    <div class="p-bg item-bg-02"></div>
                </div>
                <div class="item relative">
                    <div class="container">
                        <img src="~/assets/images/map/mapcj_05.png" />
                        <div class="introduction">
                            <div class="title"><span class="order">05</span><span>污染源管控</span></div>
                            <div class="sub-title">在线台账、污染专项、在线表单</div>
                            <div class="desrciption">这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案。</div>
                        </div>
                    </div>
                    <div class="p-bg item-bg-01"></div>
                </div>
                <div class="item relative">
                    <div class="container">
                        
                        <div class="introduction">
                            <div class="title"><span class="order">06</span><span>事件调度</span></div>
                            <div class="sub-title">智慧调度、整改跟踪、事件统计</div>
                            <div class="desrciption">这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案。</div>
                        </div>
                        <img src="~/assets/images/map/mapcj_06.png" />
                    </div>
                    <div class="p-bg item-bg-02"></div>
                </div>
            </div>
        </section>
        <section class="page">
            <div class="page-title">客户案例</div>
            <div class="page-content container">
                <div class="case-list flex gap-30">
                    <div class="case-list-item">
                        <img src="~/assets/images/map/map_case01.png" />
                        <div class="list-item__title">清远项目</div>
                    </div>
                    <div class="case-list-item">
                        <img src="~/assets/images/map/map_case02.png" />
                        <div class="list-item__title">清远项目</div>
                    </div>
                    <div class="case-list-item">
                        <img src="~/assets/images/map/map_case03.png" />
                        <div class="list-item__title">清远项目</div>
                    </div>
                </div>
            </div>
        </section>
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
.gap-30 {
    gap: 30px;
}
.case-list {
    margin-bottom: 70px;
}
.list-item__title {
    line-height: 48px;
    background: linear-gradient(90deg, #7FC683, #02B7C3, #0294D2);
    border-radius: 0px 0px 8px 8px;
    text-align: center;
    font-size: 18px;
    color: #FFFFFF;
}
.product-head {
    width: 100%;
    height: 920px;
    background: linear-gradient(0deg, #FFFFFF 0%, #D6EEFE 40%, #B0D1F1 100%);
}
.banner {
    padding-top: 30px;
    align-items: center;
    
    .left {
        position: absolute;
        width: 30%;
        // top: 20%;
        .name {
            font-size: 36px;
            font-weight: 500;
            color: #000414;
            font-family: HarmonyOS Sans SC;
            padding: 25px 0;
        }
        .platform-name {
            font-size: 40px;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #000414;
            padding-bottom: 40px;
        }
        .platform-description {
            font-size: 18px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #363E45;
            line-height: 34px;
            padding-bottom: 64px;
        }
    }
    .btns {
        margin-top: 64px;
        gap: 20px;
        padding: 0;
        margin: 0;
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
    }
}
.feature-card {
    justify-content: space-around;
    .feature-item {
        text-align: center;
        img {
            margin: 0 auto;
        }
    }
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
.p-bg {
    width: 45%;
    height: 408px;
    /* background: red; */
    position: absolute;
    top: 0;
    background: linear-gradient(-90deg, #D6F1FF 0%, #D6F1FF 100%);
    z-index: -1;
}
.item-bg-01 {
    border-radius: 204px 0px 0px 204px;
    right: 0;
}
.item-bg-02 {
     border-radius: 0px 204px 204px 0;
     left: 0;
}
.item {
    font-family: Source Han Sans CN;
    margin-bottom: 110px;
    .container {
        display: flex;
    }
    .introduction {
        padding-top: 3%;
        .title {
            font-size: 40px;
            font-weight: 500;
            color: #1F2429;
            padding: 20px 0;
            position: relative;
            border-bottom: 2px solid #2fa8e933;
            &::after {
                content: "";
                position: absolute;
                bottom: -1px;
                left: 0;
                border-top: 2px solid #32dbc0;
                width: 10%;
                transition: all 0.3s;
                background: #32dbc0;
                border-radius: 1px;
            }
            .order {
                color: #31AAE9;
                font-size: 40px;
                font-weight: 500;
                padding-right: 25px;
            }
        }
        .sub-title {
            font-size: 20px;
            font-weight: 400;
            color: #363E45;
            line-height: 26px;
            padding: 24px 0;
        }
        .description {
            font-size: 16px;
            font-weight: 400;
            color: #637381;
            line-height: 26px;
        }
        &:hover {
            cursor: pointer;
            .title {
                &::after {
                    width: 100%;
                }
            }
        }
    }
    &:last-child {
        margin-bottom: 0;
    }
}
</style>