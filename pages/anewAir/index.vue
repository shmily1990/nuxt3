<template>
    <div class="anewMap">
        <section class="product-head">
            <div class="container">
                <div class="banner">
                    <div class="left">
                        <div class="name flex"><img src="~/assets/images/map/air_logo1.png" /> AnewAirTM</div>
                        <div class="platform-name">大气污染智能管控终端</div>
                        <div class="platform-description">帮助管理者快速、全面了解大气污染发生发展的全时空变化信息，建立环境敏感区域与污染源之间的全证据链关联分析，分场景给出精准管控方</div>
                        <div class="btns flex">
                            <div class=" btn_parmay btn_parmay_main">产品咨询<i class="iconfont icon-anniu-jiantou"></i></div>
                            <div class=" btn_parmay">应用案例<i class="iconfont icon-anniu-jiantou"></i></div>
                        </div>
                    </div>
                    <img src="~/assets/images/map/air_pad.png" class="wow fadeInRight" />
                </div>
                        <div class="feature-card flex between">
          <div class="feature-item" v-for="(item, index) in list" :key="index">
            <img src="~/assets/images/map/feature-card-01.png" />
            <span>{{ item.label }}</span>
          </div>
        </div>
            </div>
        </section>
            
        <section class="page container">
            <div class="page_title"><h2><i></i>核心优势<i></i></h2></div>
            <div class="page-content">
                <div class="info flex">
                    <div class="info-col-left">
                        <h3>数据孤岛，业务壁垒</h3>
                        <div>业务系统林立，信息无法打通</div>
                    </div>
                    <div class="info-col-line">
                        <img src="~/assets/images/map/map_ys_left.png" />
                    </div>
                    <div class="info-col-mid"><span>业务</span></div>
                    <div class="info-col-line">
                        <img src="~/assets/images/map/map_ys_right.png" />
                    </div>
                    <div class="info-col-right">
                        <h3>场景闭环，真正管用</h3>
                        <div>聚焦高频、高价值业务场景，更落地</div>
                    </div>
                </div>
                <img src="~/assets/images/map/air_vs.png" />
                <div class="info flex">
                    <div class="info-col-left">
                        <h3>数据孤岛，业务壁垒</h3>
                        <div>业务系统林立，信息无法打通</div>
                    </div>
                    <div class="info-col-line">
                        <img src="~/assets/images/map/map_ys_left.png" />
                    </div>
                    <div class="info-col-mid"><span>业务</span></div>
                    <div class="info-col-line">
                        <img src="~/assets/images/map/map_ys_right.png" />
                    </div>
                    <div class="info-col-right">
                        <h3>场景闭环，真正管用</h3>
                        <div>聚焦高频、高价值业务场景，更落地</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="page">
             <div class="page_title"><h2><i></i>三大场景<i></i></h2></div>
            <div class="page-content container">
                <div class="screen-item">
                    <div class="screen-head flex">
                        <div class="order">01</div>
                        <div class="screen-des flex">
                            <div class="screen-title">日常场景</div>
                            <div class="audio"></div>
                            <div class="tips">今年考核指标怎么样？排名如何？污染成因？</div>
                        </div>
                    </div>
                    <div class="srceen-content flex justify-content-end">
                        <div class="introduction left-0">
                            <div class="introduction-list-item flex">
                                <div class="col-left">数据感知</div>
                                <div class="col-right">多源数据融合，分钟级刷新</div>
                            </div>
                            <div class="introduction-list-item flex">
                                <div class="col-left">达标形势</div>
                                <div class="col-right">AQI达标率、优良天数、年度PM2.5、年度达标规划</div>
                            </div>
                            <div class="introduction-list-item flex">
                                <div class="col-left">区域排名</div>
                                <div class="col-right">订阅关心城市，排名信息尽在掌握</div>
                            </div>
                            <div class="introduction-list-item flex">
                                <div class="col-left">咨询报告</div>
                                <div class="col-right">轻咨询在线编制，领导关注随处分享</div>
                            </div>
                        </div>
                        <img src="~/assets/images/map/air_ys_01.png" />
                    </div>
                </div>
                <div class="screen-item">
                    <div class="screen-head flex">
                        <div class="order">01</div>
                        <div class="screen-des flex">
                            <div class="screen-title">日常场景</div>
                            <div class="audio"></div>
                            <div class="tips">今年考核指标怎么样？排名如何？污染成因？</div>
                        </div>
                    </div>
                    <div class="srceen-content flex">
                        <img src="~/assets/images/map/air_ys_02.png" />
                        <div class="introduction right-0">
                            <div class="introduction-list-item flex">
                                <div class="col-left">智能预报</div>
                                <div class="col-right">AI机器学习模型，小时级精准预报，臭氧余量表在线评估</div>
                            </div>
                            <div class="introduction-list-item flex">
                                <div class="col-left">实时调度</div>
                                <div class="col-right">分钟数据&因子余量实时播报，指导管控调度</div>
                            </div>
                            <div class="introduction-list-item flex">
                                <div class="col-left">区域传输</div>
                                <div class="col-right">小尺度溯源模型，百米级精细溯源，动态追溯污染气团来源</div>
                            </div>
                            <div class="introduction-list-item flex">
                                <div class="col-left">夜间巡查</div>
                                <div class="col-right">污染源信息动态更新，环境污染无所遁形</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="screen-item">
                    <div class="screen-head flex">
                        <div class="order">03</div>
                        <div class="screen-des flex">
                            <div class="screen-title">日常场景</div>
                            <div class="audio"></div>
                            <div class="tips">今年考核指标怎么样？排名如何？污染成因？</div>
                        </div>
                    </div>
                    <div class="srceen-content flex justify-content-end">
                        <div class="introduction left-0">
                            <div class="introduction-list-item flex">
                                <div class="col-left">环保资讯信息</div>
                                <div class="col-right">多源数据融合，分钟级刷新</div>
                            </div>
                        </div>
                        <img src="~/assets/images/map/air_ys_03.png" />
                    </div>
                </div>
            </div>
        </section>
        <section class="page bgcolor">
             <div class="page_title"><h2><i></i>客户价值<i></i></h2></div>
            <div class="page-content container">
                <img src="~/assets/images/map/air_khjz.png" />
            </div>
        </section>
    </div>
</template>
<script setup>
const list = ref([
    {
        icon: '',
        label: '掌控全局'
    },
    {
        icon: '',
        label: '助力达标'
    },
    {
        icon: '',
        label: '开箱即用'
    },
    {
        icon: '',
        label: '在线更新'
    },
    {
        icon: '',
        label: '服务专业'
    },
    {
        icon: '',
        label: '多屏互动'
    }
])
</script>
<style lang="less" scoped>
.info {
    justify-content: center;
    .info-col-mid {
        font-size: 24px;
        font-weight: 500;
        color: #1F2429;
        position: relative;
        &::after {
            width: 78px;
            height: 8px;
            background: #94CA59;
            opacity: 0.59;
            bottom: 5px;
            left: -14px;
            content: "";
            position: absolute;
        }
    }
    .info-col-line {
        padding: 0 32px;
    }
    .info-col-left,.info-col-right {
        padding-left: 26px;
        h3 {
            font-size: 20px;
            font-weight: 500;
        }
        div {
            font-size: 16px;
            color: #637381;
            padding-top: 10px;
        }
    }
}
.page{
    overflow: hidden;
}
.bgcolor {
    background: #FFF9F0;
    overflow: hidden;
}
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
    background: url('~/assets/images/map/air_banner-bg.png') no-repeat center center;
    // background: linear-gradient(0deg, #FFFFFF 0%, #D6EEFE 40%, #B0D1F1 100%);
    overflow: hidden;
}
.banner {
    padding-top: 168px;
    align-items: center;
    overflow: hidden;
    img {
        float: right;
    }
    .left {
        position: absolute;
        width: 30%;
        top: 20%;
        .name {
            font-size: 36px;
            font-weight: 500;
            color: #000414;
            font-family: HarmonyOS Sans SC;
            font-weight: 500;
            img{
                margin-right: 20px;
            }
            
        }
        .platform-name {
            font-size: 40px;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #000414;
        }
        .platform-description {
            font-size: 18px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #363E45;
            line-height: 34px;
        }
    }
    .btns {
        margin-top: 64px;
        gap: 20px;
        padding-top: 68px;
        margin: 0;
    }
}
.bottom-card {
    justify-content: space-around;
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
.screen-item {
    justify-content: end;
    position: relative;
    margin-bottom: 80px;
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
.introduction {
    position: absolute;
}
.justify-content-end {
        justify-content: end;
}
.introduction-list {
    
    &-item {
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
.left-0 {
	left: 0;
}
.right-0 {
	right: 0;
}
.feature-card {
   margin:100px 0 40px;
  .feature-item {
    text-align: center;
    img {
      margin: 5px auto;
    }
    color: #1f2429;
    font-size: 18px;
  }
}
</style>