<template>

<footer class="footer">
    <div class="container">
        <div class="left-col">
            <div class="product">
                <div class="title">产品中心</div>
                <ul class="list">
                    <li v-for="(nav,index) in productList" :key="index">
                        <div class="nav-item">
                            <div class="nav-item-title">
                                <nuxt-link :to="nav.link">
                                    {{nav.name}}<span class="mark-lable">{{ nav.markLable }}</span></nuxt-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="case">
                <div class="title">解决方案与实践案例</div>
                <ul class="list">
                    <li v-for="(nav,index) in caseList" :key="index">
                        <div class="nav-item">
                            <div class="nav-item-title">
                                <nuxt-link :to="nav.link">
                                    {{nav.name}}</nuxt-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="about">
                <div class="title">关于新禾</div>
                <ul class="list">
                    <li v-for="(nav,index) in aboutList" :key="index">
                        <div class="nav-item">
                            <div class="nav-item-title">
                                <nuxt-link :to="nav.link">
                                    {{nav.name}}</nuxt-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="tel">
                <div class="work-time">工作日9:00-18:00</div>
                <div class="tel">{{ tel }}</div>
            </div>
        </div>
        <div class="right-col">
            <div class="qr">
                <img src="~/assets/images/kefuma2.png" />
                <div>
                    扫描二维码<br>关注新禾公众号
                </div>
            </div>
            <div class="qr">
                <img src="~/assets/images/kefuma.png" />
                <div>
                    扫描二维码<br>联系在线客服
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<script setup>
const productList = ref([
    {name:'AnewEl',link:'/'},
    {name:'AnewMap',link:'/', markLable: 'TM'},
    {name:'AnewAir',link:'/product', markLable: 'TM'},
    {name:'AnewCip',link:'#', markLable: 'TM'}
])
const caseList = ref([
    {name:'新禾解决方案中心',link:'/example'},
    {name:'新禾案例中心', link:'/news'},
])
const aboutList = ref([
    {name:'了解新禾',link:'/about'},
    {name:'联系我们',link:'/about'},
])
const tel = ref('18912483668')
</script>

<style lang="less">
.footer {
    padding: 60px;
    // display: flex;
    background: #fff;
    // justify-content: center;
    .left-col {
        display: flex;
        margin-left: 23px;
        text-align: left;
        .list {
            margin-top: 16px;
            .nav-item {
                line-height: 60px;
            }
        }
    }
}
.title {
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #000414;
}
</style>
