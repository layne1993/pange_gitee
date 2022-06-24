<template>
  <div class="home-container">
    <div :class="`${showLogoBarClass ? 'logo-fixed' : ''} logo-content`">
      <div class="logo-bar">
        <div class="logo">
          <img
            :src="
              showLogoBarClass
                ? require('../../../../../static/icons/logo_s_black.svg')
                : require('../../../../../static/icons/logo_s.svg')
            "
            alt="logo"
            width="100%"
          />
          <span>磐阁</span>
        </div>
      </div>
    </div>
    <div class="top">
      <span class="top-1">政府机关·办公·商业·学校·医院·厂房</span>
      <span class="top-2">数字赋能·物业管理</span>
      <img
        :src="require('../../../../../static/icons/logo_b.svg')"
        alt="logo"
        width="100%"
        class="top-img"
      />
      <span class="top-3">磐阁系统</span>
    </div>
    <div class="header">
      <div class="header-imgs">
        <div class="header-1" />
        <div class="header-2" />
      </div>
      <div class="desc-content">
        <div class="desc">
          <div class="desc-item">
            <img
              :src="require('../../../../../static/icons/header_1.svg')"
              alt="jianzhu"
              width="100%"
            />
            <span>建筑空间、设备、资料数字化</span>
          </div>
          <div class="desc-item">
            <img
              :src="require('../../../../../static/icons/header_3.svg')"
              alt="wuzhihua"
              width="100%"
            />
            <span>全面无纸化，记录可追溯</span>
          </div>
          <div class="desc-item">
            <img
              :src="require('../../../../../static/icons/header_2.svg')"
              alt="ai"
              width="100%"
            />
            <span>AI智能优化运营效率</span>
          </div>
          <div class="desc-item">
            <img
              :src="require('../../../../../static/icons/header_4.svg')"
              alt="saas"
              width="100%"
            />
            <span>SaaS模式，低成本可持续运营</span>
          </div>
        </div>
      </div>
    </div>
    <div class="body-content">
      <div class="body-item body-content1">
        <img
          :src="require('../../../../../static/icons/body1.svg')"
          alt="body1"
          width="100%"
          class="body-content-img1"
        />
        <span class="body-title body-title1">数字孪生·数字赋能</span>
        <span class="body-tip body-tip1">BIM技术赋能建筑运营管理</span>
      </div>
      <div class="body-item body-content2">
        <img
          :src="require('../../../../../static/icons/body2.svg')"
          alt="body2"
          width="100%"
          class="body-content-img2"
        />
        <span class="body-title body-title2">物联网</span>
        <span class="body-tip body-tip2">建筑区域精细化管控</span>
      </div>
      <div class="body-item body-content3">
        <img
          :src="require('../../../../../static/icons/body3.svg')"
          alt="body3"
          width="100%"
          class="body-content-img3"
        />
        <span class="body-title body-title3">移动互联网</span>
        <span class="body-tip body-tip3">运营数据，尽在“掌”握</span>
      </div>
      <div class="body-item body-content4">
        <img
          :src="require('../../../../../static/icons/body4.svg')"
          alt="body4"
          width="100%"
          class="body-content-img4"
        />
        <span class="body-title body-title4">人工智能</span>
        <span class="body-tip body-tip4">AI运营报表，为物业运营保驾护航</span>
      </div>
      <div class="body-item body-content5">
        <img
          :src="require('../../../../../static/icons/body5.svg')"
          alt="body5"
          width="100%"
          class="body-content-img5"
        />
        <span class="body-title body-title5">SaaS服务模式</span>
        <span class="body-tip body-tip5"
          >零建设成本，SaaS服务费低至0.01元/平</span
        >
      </div>
    </div>
    <div class="video-content">
      <div class="video-top">
        <span class="video-title">数字孪生·数字赋能</span>
        <div class="video-right">
          <span class="video-right1">建筑空间、设备、管理工单数字化</span>
          <span class="video-right2">物业管理全生命周期可视化的核心基础</span>
        </div>
      </div>
      <div class="video-wrap" id="video">
        <video
          id="myVideo"
          class="video-js vjs-default-skin"
          width="100%"
          height="100%"
        >
          <source
            :src="require('../../../../../static/video1.mp4')"
            type="video/mp4"
          />
        </video>
        <span
          :class="`${isPlay ? 'pauseIcon' : 'playIcon'} control-icon`"
          @click="handleClickIcon"
        ></span>
      </div>
    </div>
    <div class="fund-content">
      <span class="fund-title">智能报表·人工智能</span>
      <div class="fund-tip">
        <span class="fund-tip1">基于运营大数据，动态智能算法出报表</span>
        <span class="fund-tip2">根据需求自定义报表权限及类型</span>
      </div>
      <div class="fund-imgs">
        <div class="fund-img1" />
        <div class="fund-img2" />
        <div class="fund-img3" />
        <div class="fund-img4" />
      </div>
    </div>
    <div class="fund-warning">
      <div class="warning-title">
        <span class="title">移动互联网· 实时“掌”握</span>
        <div class="warning-tip">
          <span class="warning-tip1">移动端&桌面&大屏同步展示</span>
          <span class="warning-tip2">实时推送各类进度&报警</span>
        </div>
      </div>
      <div class="warning-devices">
        <div class="warning-phone" />
        <div class="warning-pc" />
      </div>
    </div>
    <div class="hand-content">
      <div class="hand-left">
        <span class="left-title">物联⽹加持·精准管控</span>
        <div class="left-tip">
          <span class="left-tip1">确保100%到达现场操作</span>
          <span class="left-tip2">巡检/安保路线可视化</span>
        </div>
      </div>
      <div class="hand-imgs">
        <div class="hand-middle" />
        <div class="hand-wifi" />
        <div class="hand-right" />
      </div>
    </div>
    <div class="tip-container">
      <div class="tip-top-left">
        <span class="title tip-title">易上⼿·易培训</span>
        <div class="second">
          <span style="color: #00b777">⽆须安装APP</span>
          <span>，轻松适⽤⼤型物业团队</span>
        </div>
        <div class="tip-sign">
          <div class="tip-sign-wrap">
            <div class="sign-item tip-sign-img1">
              <img
                :src="require('../../../../../static/icons/tip1.svg')"
                alt="tip1"
                width="100%"
              />
              <span>小程序</span>
            </div>
            <div class="sign-item tip-sign-img2">
              <img
                :src="require('../../../../../static/icons/tip2.svg')"
                alt="tip2"
                width="100%"
              />
              <span>企业微信</span>
            </div>
          </div>
          <div class="tip-sign-wrap" style="margin-top: 0.52rem">
            <div class="sign-item tip-sign-img3">
              <img
                :src="require('../../../../../static/icons/tip3.svg')"
                alt="tip3"
                width="100%"
              />
              <span>B/S架构+HTML</span>
            </div>
          </div>
        </div>
      </div>
      <div class="tip-top-right">
        <div class="top-left">
          <span class="right-title">蓝牙信标</span>
          <p class="right-second">
            <span style="color: #00b777">低功耗</span>
            <span>，电池耐⽤<span style="color: #00b777">5</span>年</span>
          </p>
          <p class="right-third">
            <span style="color: #00b777">易安装</span>
            <span>，螺丝/背胶固定安装</span>
          </p>
          <p class="right-fouth">户外适⽤，IP67防尘防⽔</p>
        </div>
        <div class="top-right tip-sign-img4" />
      </div>
      <div class="tip-middle">
        <span class="middle-title">
          SaaS服务·
          <span style="color: #00b777; font-size: 0.48rem;">零</span>
          建设成本
        </span>
        <span class="middle-tip">
          <span style="color: #00b777; font-size: 0.48rem;">0</span>
          硬件投⼊·
          <span style="color: #00b777; font-size: 0.48rem;">0</span>
          部署费⽤·
          <span style="color: #00b777; font-size: 0.48rem;">0</span>
          维护费⽤
        </span>
        <span class="middle-service">
          SaaS服务费低⾄
          <span style="color: #00b777">0.01</span>元/平
        </span>
        <div class="middle-bottom">
          <span>计算您的SaaS服务费></span>
          <span>什么是SaaS平台？></span>
        </div>
      </div>
      <div class="tip-word">我们的合作伙伴&合作项目</div>
      <div class="tip-bottom">
        <div class="tip-item">
          <img
            :src="require('../../../../../static/images/friend_1.png')"
            alt="friend_1"
            width="100%"
            class="bottom-item-img1"
          />
          <div class="bottom-tip bottom-item-tip1">
            <span>
              明华物业是中国物业⾏业的标志性企业，“公众物业”的先驱者，是世界500强的优秀服务供应商。明华旗下众多的标志性项⽬的运营经验，是整个⾏业宝贵的资源。
            </span>
            <span>
              磐阁系统通过与明华多年来的战略合作，将众多宝贵的物业运营经验，转化为智能化技术成果，为明华物业进⼀步提⾼了管理效率、降低了运营成本。
            </span>
          </div>
        </div>
        <div class="tip-item">
          <img
            :src="require('../../../../../static/images/friend_2.png')"
            alt="friend_2"
            width="100%"
            class="bottom-item-img2"
          />
          <div class="bottom-tip bottom-item-tip2">
            <span>
              上海建科集团，作为全国最早的BIM技术研究与应用单位之一，将BIM技术与绿色建筑、既有建筑改造与城市更新、项目管理、运维管理、智慧城市咨询等主营业务紧密融合，形成项目全生命期的系统化解决方案，为城市精细化管理和安全运行提供一流的智力服务。
            </span>
            <span>
              建科的BIM技术与磐阁系统的深度合作，提升了建筑后期运营的智能化技术水平，使建筑运营可视化到达一个全新的高度。
            </span>
          </div>
        </div>
        <div class="tip-item">
          <img
            :src="require('../../../../../static/images/friend_3.png')"
            alt="friend_3"
            width="100%"
            class="bottom-item-img3"
          />
          <div class="bottom-tip bottom-item-tip3">
            <span>
              华建集团（前身为上海现代建筑设计集团）是建筑业界综合实力最强的建筑工程设计咨询公司，标志性的建筑案例遍布全国各地，最具代表性的上海陆家嘴三栋超高层建筑-上海中心、金茂大厦、环球金融中心均是其参与设计与建造的作品。
            </span>
            <span>
              磐阁的创新技术携手华建集团深厚的设计咨询经验以及建筑各专业领域专家，能够为业主创造更大的价值与更优质的服务。
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="cus-container">
      <span class="cus-title">客户案例</span>
      <span class="cus-tip">政府机关·学校·医院·商业办公·酒店·市政</span>
      <div class="cus-content">
        <div class="cus-wrap">
          <div class="cus-item">
            <img
              :src="require('../../../../../static/images/cus_1.png')"
              alt="cus_1"
              width="100%"
              class="cus-item-img1"
            />
            <span class="item-title cus-item-titl1">黄浦区区政府</span>
            <span class="item-tip cus-item-tip1">机关/办公楼</span>
          </div>
          <div class="cus-item">
            <img
              :src="require('../../../../../static/images/cus_2.png')"
              alt="cus_2"
              width="100%"
              class="cus-item-img1"
            />
            <span class="item-title cus-item-titl1">上海天文馆</span>
            <span class="item-tip cus-item-tip1">展览</span>
          </div>
        </div>
        <div class="cus-wrap">
          <div class="cus-item">
            <img
              :src="require('../../../../../static/images/cus_3.png')"
              alt="cus_3"
              width="100%"
              class="cus-item-img2"
            />
            <span class="item-title cus-item-titl2">上海F1赛车场</span>
            <span class="item-tip cus-item-tip2">体育场馆</span>
          </div>
          <div class="cus-item">
            <img
              :src="require('../../../../../static/images/cus_4.png')"
              alt="cus_4"
              width="100%"
              class="cus-item-img2"
            />
            <span class="item-title cus-item-titl2">上海交响乐团音乐厅</span>
            <span class="item-tip cus-item-tip2">文化场馆</span>
          </div>
        </div>
        <div class="cus-wrap">
          <div class="cus-item">
            <img
              :src="require('../../../../../static/images/cus_5.png')"
              alt="cus_5"
              width="100%"
              class="cus-item-img3"
            />
            <span class="item-title cus-item-titl3">上海交大</span>
            <span class="item-tip cus-item-tip3">学校</span>
          </div>
          <div class="cus-item">
            <img
              :src="require('../../../../../static/images/cus_6.png')"
              alt="cus_6"
              width="100%"
              class="cus-item-img3"
            />
            <span class="item-title cus-item-titl3">临港蓝湾天地</span>
            <span class="item-tip cus-item-tip3">商业/综合体</span>
          </div>
        </div>
        <div class="cus-wrap">
          <div class="cus-item">
            <img
              :src="require('../../../../../static/images/cus_7.png')"
              alt="cus_7"
              width="100%"
              class="cus-item-img4"
            />
            <span class="item-title cus-item-titl4">临港生命科技园</span>
            <span class="item-tip cus-item-tip4">厂房/办公楼</span>
          </div>
          <div class="cus-item">
            <img
              :src="require('../../../../../static/images/cus_8.png')"
              alt="cus_8"
              width="100%"
              class="cus-item-img4"
            />
            <span class="item-title cus-item-titl4">华住集团</span>
            <span class="item-tip cus-item-tip4">酒店</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-tip">
        <span>进一步了解 & 产品试用</span>
        <span>请联系我们专员：</span>
      </div>
      <img
        :src="require('../../../../../static/images/code.png')"
        alt="code"
        width="100%"
      />
    </div>
  </div>
</template>

<script>
import videojs from "video.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "MobileView",
  data() {
    return {
      player: null,
      showLogoBarClass: false,
      isPlay: true
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
    this.initVideo();
    this.gaspAnimation();
  },
  methods: {
    handleScroll(e) {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop <= 90) {
        this.showLogoBarClass = false;
      } else {
        this.showLogoBarClass = true;
      }
    },
    initVideo() {
      const videoDom = document.getElementById("video");
      const domWidth = videoDom.clientWidth;
      const domHeight = videoDom.clientHeight;
      this.player = videojs(
        "myVideo",
        {
          muted: true,
          loop: true,
          autoPlay: true,
          width: domWidth,
          height: domHeight,
          controls: false,
          preload: "auto",
          textTrackDisplay: false,
          posterImage: false,
          errorDisplay: false
        },
        () => {
          this.player.play();
        }
      );
    },
    handleClickIcon() {
      if (!this.player) {
        console.info("播放器出错");
        return;
      }
      if (this.isPlay) {
        this.player.pause();
      } else {
        this.player.play();
      }
      this.isPlay = !this.isPlay;
    },
    gaspAnimation() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".top"
          },
          opacity: 0
        })
        .from(".top-1", { y: innerHeight * 1 })
        .from(".top-2", { y: innerHeight * 1 })
        .from(".top-img", { y: innerHeight * 1 })
        .from(".top-3", { y: innerHeight * 1 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".header"
          },
          scrub: true,
          pin: true,
          duration: 0.4,
          opacity: 0
        })
        .from(".header-1", { opacity: 0 })
        .from(".header-2", { opacity: 0 })
        .from(".desc-content", { opacity: 0, y: innerHeight * 1 }, "+=0.5");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".body-content1"
          },
          scrub: true,
          pin: true,
          duration: 0.6,
          opacity: 0
        })
        .from(".body-content-img1", { opacity: 0, y: innerHeight * 1 })
        .from(".body-title1", { opacity: 0, y: innerHeight * 1 })
        .from(".body-tip1", { opacity: 0, y: innerHeight * 1 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".body-content2"
          },
          scrub: true,
          pin: true,
          duration: 0.8,
          opacity: 0
        })
        .from(".body-content-img2", { opacity: 0, y: innerHeight * 1 })
        .from(".body-title2", { opacity: 0, y: innerHeight * 1 })
        .from(".body-tip2", { opacity: 0, y: innerHeight * 1 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".body-content3"
          },
          scrub: true,
          pin: true,
          duration: 1,
          opacity: 0
        })
        .from(".body-content-img3", { opacity: 0, y: innerHeight * 1 })
        .from(".body-title3", { opacity: 0, y: innerHeight * 1 })
        .from(".body-tip3", { opacity: 0, y: innerHeight * 1 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".body-content4"
          },
          scrub: true,
          pin: true,
          duration: 1.2,
          opacity: 0
        })
        .from(".body-content-img4", { opacity: 0, y: innerHeight * 1 })
        .from(".body-title4", { opacity: 0, y: innerHeight * 1 })
        .from(".body-tip4", { opacity: 0, y: innerHeight * 1 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".body-content5"
          },
          scrub: true,
          pin: true,
          duration: 1.4,
          opacity: 0
        })
        .from(".body-content-img5", { opacity: 0, y: innerHeight * 1 })
        .from(".body-title5", { opacity: 0, y: innerHeight * 1 })
        .from(".body-tip5", { opacity: 0, y: innerHeight * 1 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".video-content"
          },
          scrub: true,
          pin: true,
          duration: 1.6,
          opacity: 0
        })
        .from(".video-title", { opacity: 0, y: innerHeight * 1 })
        .from(".video-right1", { opacity: 0, y: innerHeight * 1 })
        .from(".video-right2", { opacity: 0, y: innerHeight * 1 })
        .from(".video-wrap", { opacity: 0, y: innerHeight * 1 }, "+=0.5");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".fund-content"
          },
          scrub: true,
          pin: true,
          duration: 1.8,
          opacity: 0
        })
        .from(".fund-title", { opacity: 0, y: innerHeight * 1 })
        .from(".fund-tip1", { opacity: 0, y: innerHeight * 1 })
        .from(".fund-tip2", { opacity: 0, y: innerHeight * 1 })
        .from(".fund-img1", { opacity: 0, y: innerHeight * 1 })
        .from(".fund-img2", { opacity: 0, y: innerHeight * 1 })
        .from(".fund-img3", { opacity: 0, y: innerHeight * 1 })
        .from(".fund-img4", { opacity: 0, y: innerHeight * 1 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".fund-warning"
          },
          scrub: true,
          pin: true,
          duration: 2,
          opacity: 0
        })
        .from(".warning-title", { opacity: 0, y: innerHeight * 1 })
        .from(".warning-tip1", { opacity: 0, y: innerHeight * 1 })
        .from(".warning-tip2", { opacity: 0, y: innerHeight * 1 })
        .from(".warning-phone", { opacity: 0, y: innerHeight * 1 })
        .from(".warning-pc", { opacity: 0, y: innerHeight * 1 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".hand-content"
          },
          scrub: true,
          pin: true,
          duration: 2.2,
          opacity: 0
        })
        .from(".left-title", { opacity: 0, y: innerHeight * 1 })
        .from(".left-tip1", { opacity: 0, y: innerHeight * 1 })
        .from(".left-tip2", { opacity: 0, y: innerHeight * 1 })
        .from(".hand-middle", { opacity: 0, y: innerHeight * 1 })
        .from(".hand-wifi", { opacity: 0, y: innerHeight * 1 })
        .from(".hand-right", { opacity: 0, y: innerHeight * 1 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".tip-container"
          },
          scrub: true,
          pin: true,
          duration: 2.2,
          opacity: 0
        })
        .from(".tip-top-left", { opacity: 0, y: innerHeight * 1 })
        .from(".tip-sign-img1", { opacity: 0, y: innerHeight * 1 })
        .from(".tip-sign-img2", { opacity: 0, y: innerHeight * 1 })
        .from(".tip-sign-img3", { opacity: 0, y: innerHeight * 1 })
        .from(".tip-top-right", { opacity: 0, y: innerHeight * 1 })
        .from(".tip-sign-img4", { opacity: 0, y: innerHeight * 1 })
        .from(".tip-middle", { opacity: 0, y: innerHeight * 1 })
        .from(".middle-title", { opacity: 0, y: innerHeight * 1 })
        .from(".middle-tip", { opacity: 0, y: innerHeight * 1 })
        .from(".middle-service", { opacity: 0, y: innerHeight * 1 })
        .from(".middle-bottom", { opacity: 0, y: innerHeight * 1 })
        .from(".tip-word", { opacity: 0, y: innerHeight * 1 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".tip-bottom"
          },
          scrub: true,
          pin: true,
          duration: 1,
          opacity: 0
        })
        .from(".bottom-item-img1", { opacity: 0, y: innerHeight * 1 })
        .from(".bottom-item-tip1", { opacity: 0, y: innerHeight * 1 })
        .from(".bottom-item-img2", { opacity: 0, y: innerHeight * 1 })
        .from(".bottom-item-tip2", { opacity: 0, y: innerHeight * 1 })
        .from(".bottom-item-img3", { opacity: 0, y: innerHeight * 1 })
        .from(".bottom-item-tip3", { opacity: 0, y: innerHeight * 1 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".cus-container"
          },
          scrub: true,
          pin: true,
          duration: 1.5,
          opacity: 0
        })
        .from(".cus-title", { opacity: 0, y: innerHeight * 1 })
        .from(".cus-tip", { opacity: 0, y: innerHeight * 1 })
        .from(".cus-item-img1", { opacity: 0, y: innerHeight * 1 })
        .from(".cus-item-titl1", { opacity: 0, y: innerHeight * 1 })
        .from(".cus-item-tip1", { opacity: 0, y: innerHeight * 1 })
        .from(".cus-item-img2", { opacity: 0, y: innerHeight * 1 })
        .from(".cus-item-titl2", { opacity: 0, y: innerHeight * 1 })
        .from(".cus-item-tip2", { opacity: 0, y: innerHeight * 1 })
        .from(".cus-item-img3", { opacity: 0, y: innerHeight * 1 })
        .from(".cus-item-titl3", { opacity: 0, y: innerHeight * 1 })
        .from(".cus-item-tip3", { opacity: 0, y: innerHeight * 1 })
        .from(".cus-item-img4", { opacity: 0, y: innerHeight * 1 })
        .from(".cus-item-titl4", { opacity: 0, y: innerHeight * 1 })
        .from(".cus-item-tip4", { opacity: 0, y: innerHeight * 1 });
    }
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
    window.removeEventListener("scroll", this.handleScroll, true);
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
