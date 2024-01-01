<template>
  <header :class="['header', 'flex', navStyle, headFixed ? 'bg_white headFixed' : 'no_bg ']">
    <div class="h_logo">
      <nuxt-link class="logo white_logo" to="/">
        <img src="~/assets/images/logo.png" class="logo-img logo1" alt="" />
      </nuxt-link>
      <nuxt-link class="logo dark_logo" to="/">
        <img src="~/assets/images/logo-dark.png" class="logo-img logo1" alt="" />
      </nuxt-link>
    </div>
    <nav class="h_toubu">
      <div class="nav nav01">
        <ul class="navbar_nav flex" data-in="fadeInDown" data-out="fadeOutUp">
          <li v-for="(nav, index) in navList" :key="index">
            <nuxt-link :class="{ active: fullPath == nav.link }" :to="nav.link"> {{ nav.name }}</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <!--移动端的导航图标-->
    <a href="javascript:void(0)" id="navToggle" @click="m_navClick">
      <span></span>
    </a>
  </header>
  <!--移动端的导航-->
  <div :class="['m_nav', { open: m_nav }]">
    <div class="top_closed flex" @click="m_navOffClick">
      <i>X</i>
    </div>
    <div class="logo">
      <img src="~/assets/images/logo-dark.png" class="logo-img logo1" alt="" />
    </div>
    <ul class="ul" data-in="fadeInDown" data-out="fadeOutUp">
      <li class=""><a href="/">首 页</a></li>
      <li v-for="(nav, index) in navList" :key="index">
        <nuxt-link :class="{ active: routePath == nav.link }" :to="nav.link">
          {{ nav.name }}<span class="mark-lable">{{ nav.markLable }}</span></nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
const router = useRouter();
console.log(router);
const headFixed = ref(0);
const navIndex = ref(0);
const navList = ref([
  { name: 'AnewMap™', link: '/anewMap' },
  { name: 'AnewAir™', link: '/anewAir' },
  { name: 'AnewCIP™', link: '/anewCip' },
  { name: '解决方案', link: '/example' },
  { name: '客户案例', link: '/case' },
  { name: '了解新禾', link: '/about' },
  { name: '联系我们', link: '/contactUs' },
]);
const fullPath = computed(() => {
  return useRoute()?.fullPath;
});
const navStyle = computed(() => {
  const fullPath = useRoute()?.fullPath;
  if (fullPath === '/' || fullPath === '/anewCip') {
    return 'bg_transparent';
  } else if (fullPath === '/anewMap' || fullPath === '/anewAir') {
    return 'bg_blur';
  }
  return 'bg_white';
});
const m_nav = ref(0);
const m_navClick = () => {
  m_nav.value = 1;
};
//关闭手机侧导航
const m_navOffClick = () => {
  m_nav.value = 0;
};

const content = ref();
const doScroll = (event) => {
  // const scrollHeight = event.target.scrollHeight
  const scrollTop = document.documentElement.scrollTop;
  // const clientHeight = event.target.clientHeight
  if (scrollTop >= 100) {
    console.log('haha', window.innerWidth);
    headFixed.value = 1;
  } else {
    headFixed.value = 0;
  }
};

onMounted(() => {
  window.addEventListener('scroll', doScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', doScroll);
});
</script>

<style lang="less">
.mark-lable {
  display: inline-block;
  transform: translateY(-3px);
}

.header {
  width: 100%;
  z-index: 999;
  height: 62px;
  // border-bottom: 1px solid rgba(255, 255, 255, 0.13);
  position: fixed;
  left: 0;
  top: 0;
  -webkit-transition: background 0.2s ease-in-out;
  transition: background 0.2s ease-in-out;
  .h_logo {
    padding: 0 20px;
    .logo {
      transition: all 0.3s;
    }
    .dark_logo {
      display: none;
    }
  }
  .nav {
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
    height: 100%;
    line-height: 62px;
    display: block;
    a {
      display: inline-block;
      transition: all 0.5s ease 0s;
      color: #fff;
    }
    li {
      margin: 0 21px;
      position: relative;

      &:hover,
      .active {
        a {
          transform: scale(1.1);
          color: #02c7b5;
          &::after {
            height: 5px;
          }
        }
      }
      a {
        &::after {
          content: '';
          width: 100%;
          height: 0px;
          background: #02c7b5;
          position: absolute;
          bottom: 0;
          left: 0;
          transition: all 0.3s ease 0s;
          border-radius: 2px;
        }
        &.active {
          color: #02c7b5;
          &::after {
            height: 5px;
          }
        }
      }
    }
  }
}
// 半透明
.bg_blur {
  background: rgba(255, 255, 255, 0.24);
}
.headFixed {
  background: #fff !important;
}
.headFixed,
.bg_white,
.bg_blur {
  box-shadow: 0px 1px 6px 0px rgba(54, 62, 69, 0.06);
  .h_logo {
    .white_logo {
      display: none;
    }
    .dark_logo {
      display: block;
    }
  }
  .nav {
    a {
      color: #0e1924;
    }
  }
  #navToggle {
    span {
      background: #0e1924 !important;
      &::before {
        background: #0e1924 !important;
      }
      &::after {
        background: #0e1924 !important;
      }
    }
  }
}

.m_nav {
  position: fixed;
  top: 0px;
  box-shadow: 0 15px 27px 0 rgba(167, 165, 165, 0.38);
  width: 100%;
  height: 100%;
  background: #fff;
  transition: all ease 0.5s;
  -webkit-transition: all ease 0.5s;
  z-index: 1000;
  opacity: 1;
  visibility: visible;
  margin-top: 0;
  overflow-y: auto;
  transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1) 0ms;
  top: 0;
  transform: translateX(100%);
  &.open {
    transform: translateX(0);
    .ul {
      li {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
  }
  .top_closed {
    height: 60px;
    padding: 20px;
    box-sizing: border-box;
    justify-content: right;
  }
  .logo {
    width: 100%;
    margin: 0 auto;
    img {
      display: block;
      margin: 30px auto;
    }
  }
  .ul {
    li {
      padding: 0 20px;
      display: block;
      border-bottom: 1px solid #f5f5f5;
      transform: translateY(0);
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      -webkit-transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1) 0ms;
      transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1) 0ms;
      opacity: 0;
      a {
        display: block;
        text-decoration: none;
        color: #333;
        font-size: 16px;
        height: 50px;
        line-height: 50px;
        width: 100%;
      }
      &:nth-child(1) {
        -webkit-transition: all 0.2s cubic-bezier(0.77, 0, 0.175, 1) 0ms;
        transition: all 0.2s cubic-bezier(0.77, 0, 0.175, 1) 0ms;
      }
      &:nth-child(2) {
        -webkit-transition: all 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0ms;
        transition: all 0.4s cubic-bezier(0.77, 0, 0.175, 1) 0ms;
      }
      &:nth-child(3) {
        -webkit-transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1) 0ms;
        transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1) 0ms;
      }
      &:nth-child(4) {
        -webkit-transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1) 0ms;
        transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1) 0ms;
      }
      &:nth-child(5) {
        -webkit-transition: all 1s cubic-bezier(0.77, 0, 0.175, 1) 0ms;
        transition: all 1s cubic-bezier(0.77, 0, 0.175, 1) 0ms;
      }
      &:nth-child(6) {
        -webkit-transition: all 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0ms;
        transition: all 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0ms;
      }
      &:nth-child(7) {
        -webkit-transition: all 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0ms;
        transition: all 1.4s cubic-bezier(0.77, 0, 0.175, 1) 0ms;
      }
      &:nth-child(8) {
        -webkit-transition: all 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0ms;
        transition: all 1.6s cubic-bezier(0.77, 0, 0.175, 1) 0ms;
      }
    }
  }
}

@media screen and (max-width: 1060px) {
  .m_nav .ul li a {
    font-size: 1em;
  }
  .header {
    justify-content: space-between;
  }
  .header #navToggle {
    display: inline-block;
    margin-right: 1%;
  }
  .header #navToggle span {
    position: relative;
    width: 24px;
    height: 2px;
    margin-top: 15px;
  }
  .header #navToggle span:before,
  .header #navToggle span:after {
    content: '';
    position: relative;
    width: 100%;
    height: 2px;
    left: 0;
  }
  .header #navToggle span,
  .header #navToggle span:before,
  .header #navToggle span:after {
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    display: block;
    background: #fff;
  }
  .header.on #navToggle span,
  .header.on #navToggle span:before,
  .header.on #navToggle span:after {
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    display: block;
    background: #111;
  }

  .header #navToggle span:before {
    top: 8px;
  }
  .header #navToggle span:after {
    bottom: 10px;
  }
  .header #navToggle.open span:before {
    top: 10px;
    -webkit-transform: translateY(-11px) rotate(-45deg);
    -moz-transform: translateY(-11px) rotate(-45deg);
    -ms-transform: translateY(-11px) rotate(-45deg);
    -o-transform: translateY(-11px) rotate(-45deg);
    transform: translateY(-11px) rotate(-45deg);
  }
  .header #navToggle.open span:after {
    bottom: 12px;
    -webkit-transform: translateY(10px) rotate(45deg);
    -moz-transform: translateY(10px) rotate(45deg);
    -ms-transform: translateY(10px) rotate(45deg);
    -o-transform: translateY(10px) rotate(45deg);
    transform: translateY(10px) rotate(45deg);
  }
  .header #navToggle.open span {
    background: none;
  }
  .header #navToggle.open span:before,
  .header #navToggle.open span:after {
    background: #4f4f4f;
  }

  .header .nav {
    display: none;
  }
}
@media (max-width: 576px) {
  .nav-bar {
    .nav {
      display: none !important;
    }

    .nav-m {
      display: block !important;
    }

    button {
      display: block !important;
    }
  }
}
</style>
