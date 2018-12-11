<template>
  <div class="nav-bar">
    <el-header style="height:10%">
      <div class="wrapper-logo">
        <div class="logo">
          <img src="../assets/img/online_class.png">
        </div>
      </div>
      <div class="wrapper-user">
        <el-dropdown style="color: #fff" trigger="hover">
          <span>
            {{ name }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><a :href="logoutUrl" style="color: #606266;text-decoration: none">注销</a></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container style="height:90%">
      <!-- 左侧边栏 -->
      <el-aside width="200px" style="height: 100%">
        <el-menu
          :default-active="deafultActive"
          :collapse="false"
          :router="true"
          active-text-color="#E45D34"
          >
          <el-submenu
            v-for="tabs in navTabs"
            :key="tabs.name"
            :index="tabs.index">
            <template slot="title">
              <i :class="tabs.icon" class="icon"></i>
              <span class="tab-name">{{tabs.name}}</span>
            </template>
            <el-menu-item-group v-for="tab in tabs.children" :key="tab.name">
              <el-menu-item :index="tab.subIndex">
                {{ tab.subName }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 中心区域 -->
      <el-container style="height: 100%; overflow: scroll">
        <router-view/>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import config from '../config.json'
// import SSO from '../api/ssoService.js'

export default {
  data() {
    return {
      // 侧边栏图标、内容
      navTabs: [
        {
          name: '教室管理',
          index: '1',
          icon: 'el-icon-menu',
          children: [
            { subIndex: '/skinList', subName: '皮肤管理' },
            { subIndex: '/grey', subName: '灰度管理' }
          ]
        }
        // {
        //   name: '导航二',
        //   index: '2',
        //   icon: 'el-icon-menu',
        //   children: [
        //     { subIndex: '/edit', subName: '选项一' },
        //   ],
        // },
        // {
        //   name: '导航三',
        //   index: '3',
        //   icon: 'el-icon-setting',
        //   children: [
        //     { subIndex: '/edit', subName: '选项一' },
        //   ],
        // },
      ]
    }
  },
  computed: {
    // 导航栏默认选中
    deafultActive() {
      return this.$route.path
    },
    name() {
      return this.$store.state.user.name
    },
    logoutUrl() {
      // return `${config.portal.ssoDomain}/user/logout?redirect_url=${location.href}`
    }
  }
  // methods: {
  //   logout() {
  //     console.log('logout :')
  //     let redirectUrl = location.href
  //     let ssoDomain = config.portal.ssoDomain
  //     let ssoUrl = ssoDomain + '/user/login?redirect_url=' + redirectUrl
  //     let portal = 'oms'
  //     let ssoService = new SSO({ ssoDomain, ssoUrl, portal, redirectUrl })
  //     ssoService.logout(() => {
  //       location.href = ssoUrl
  //     }, () => {
  //       this.$message.error('注销失败')
  //     })
  //   }
  // }
}
</script>

<style lang="scss" scoped>

.nav-bar{
  height: 100%;
  .el-header{
  background-color: #ff7300;
  .wrapper-logo{
    cursor: pointer;
    width: 200px;
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: -20px;
    .logo{
      width:73%;
      img{
        width: 100%;
        padding: 5px 0;
      }
    }
  };
  .wrapper-user{
    cursor: pointer;
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    float: right;
    color: #fff;
    font-weight: bold;
    font-size: large;
  }
}
}

.tab-name{
  margin-left: 10px;
}
.el-aside{
  height: 100%;
  ul{
    height: 100%;
  }
}
</style>
