const app = getApp()
Page({
  data: {
    sections: [
      {
        title: "改变文字颜色",
        tips: "文字颜色",
        memo: 'color 属性设置文字颜色',
        showClose: false,
        showIcon: false,
        color: '#ff6600',
        backgroundColor: '#FAFAD2',
        src: '../../img/laba.png',
        isScroll: false,
        isJoin: false,
        speed: 3,
        code: '<wxzx-notice color="#ff6600"></wxzx-notice>'
      },
      {
        title: "改变背景颜色",
        tips: "背景颜色",
        memo: 'background-color 属性设置背景颜色',
        showClose: false,
        showIcon: false,
        color: '#d4237a',
        backgroundColor: '#FAFA99',
        src: '../../img/laba.png',
        isScroll: false,
        isJoin: false,
        speed: 3,
        code: '<wxzx-notice background-color="#FAFA99"></wxzx-notice>'
      },
      {
        title: "跑马灯效果",
        tips: "跑马灯效果",
        memo: 'is-scroll',
        showClose: true,
        showIcon: true,
        color: '#ff6600',
        backgroundColor: '#FAFAD2',
        src: '../../img/laba.png',
        isScroll: true,
        isJoin: false,
        speed: 3,
        code: '<wxzx-notice is-scroll="true" color="#ff6600"></wxzx-notice>'
      },
      {
        title: "跑马灯效果，收尾衔接",
        tips: "跑马灯效果，收尾衔接",
        memo: 'is-scroll is-join',
        showClose: true,
        showIcon: true,
        color: '#d4237a',
        backgroundColor: '#FAFAD2',
        src: '../../img/laba.png',
        isScroll: true,
        isJoin: true,
        speed: 3,
        code: '<wxzx-notice is-scroll="true" is-join="true" background-color="#FAFA99"></wxzx-notice>'
      },
      {
        title: "显示关闭按钮",
        tips: "关闭按钮",
        memo: 'show-close 属性设置是否关闭按钮',
        showClose: true,
        showIcon: false,
        color: '#d4237a',
        backgroundColor: '#FAFAD2',
        src: '../../img/laba.png',
        isScroll: false,
        isJoin: false,
        speed: 3,
        code: '<wxzx-notice showClose="true"></wxzx-notice>'
      },
      {
        title: "显示默认icon",
        tips: "默认icon",
        memo: 'showIcon 属性设置是否显示默认icon',
        showClose: false,
        showIcon: true,
        color: '#d4237a',
        backgroundColor: '#FAFAD2',
        src: '../../img/laba.png',
        isScroll: false,
        isJoin: false,
        speed: 3,
        code: '<wxzx-notice showIcon="true"></wxzx-notice>'
      },
      {
        title: "显示自定义icon",
        tips: "自定义icon",
        memo: 'showIcon src 属性设置是否显示自定义icon',
        showClose: true,
        showIcon: true,
        color: '#d4237a',
        backgroundColor: '#FAFAD2',
        src: '../../img/github.png',
        isScroll: false,
        isJoin: false,
        speed: 3,
        code: '<wxzx-notice showClose="true" showIcon="true" src="../../img/github.png"></wxzx-notice>'
      }
    ]
  },

  onLoad: function (options) {
    var navHeight = app.globalData.systemInfo.statusBarHeight + 44
    var bodyHeight = app.globalData.systemInfo.screenHeight - navHeight
    this.setData({
      bodyHeight: bodyHeight,
      navHeight: navHeight
    })
  },

  noticeClick: function () {
    wx.showToast({
      title: '点击notice'
    })
  },

  close: function () {
    wx.showToast({
      title: '关闭notice'
    })
  },

  copyCode: function (e) {
    var index = e.currentTarget.dataset.index
    var section = this.data.sections[index]
    wx.setClipboardData({
      data: section.code,
      success: function () {
        wx.showToast({
          title: '代码复制成功',
          icon: 'none'
        })
      }
    })
  },

  showCode: function (e) {
    var index = e.currentTarget.dataset.index
    var section = this.data.sections[index]
    section.isShow = !section.isShow
    this.setData({ sections: this.data.sections })
  },

  onShareAppMessage: function () {

  }
})