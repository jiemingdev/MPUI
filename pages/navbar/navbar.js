const app = getApp()
Page({
  data: {
    navTitle: "Navbar",
    sections: [
      {
        title: "改变导航栏文字颜色",
        tips: "文字颜色",
        type: 'navColor',
        memo: 'nav-color 属性设置文字颜色',
        code: '<wxzx-navbar nav-color="ff6600"></wxzx-navbar>'
      },
      {
        title: "改变导航栏按钮颜色",
        tips: "按钮颜色",
        type: 'navBtnColor',
        memo: 'nav-btn-color 属性设置返回按钮颜色',
        code: '<wxzx-navbar nav-btn-color="ff6600"></wxzx-navbar>'
      },
      {
        title: "改变导航栏文字大小",
        tips: "文字大小",
        type: 'navFontSize',
        memo: 'nav-font-size 属性设置文字大小',
        code: '<wxzx-navbar nav-font-size="28"></wxzx-navbar>'
      },
      {
        title: "改变导航栏背景颜色",
        tips: "背景颜色",
        type: 'navBackColor',
        memo: 'nav-back-color 属性设置背景颜色',
        code: '<wxzx-navbar nav-back-color="ff0000"></wxzx-navbar>'
      },
      {
        title: "改变导航栏文字",
        tips: "文字",
        type: 'navTitle',
        memo: 'nav-title 属性设置文字',
        code: '<wxzx-navbar nav-title="我变了"></wxzx-navbar>'
      }
    ]
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

  onLoad: function (options) {
    var navHeight = app.globalData.systemInfo.statusBarHeight + 44
    var bodyHeight = app.globalData.systemInfo.screenHeight - navHeight
    this.setData({
      bodyHeight: bodyHeight,
      navHeight: navHeight
    })
  },

  changeNav: function (e) {
    var _type = e.currentTarget.dataset.type
    if (_type == 'navFontSize') {
      this.setData({ navFontSize: 28 })
    } else if (_type == 'navColor') {
      this.setData({ navColor: "#ff6600" })
    } else if (_type == 'navBackColor') {
      this.setData({ navBackColor: "#ff0000" })
    } else if (_type == 'navBtnColor') {
      this.setData({ navBtnColor: "#ff6600" })
    } else if (_type == 'navTitle') {
      this.setData({ navTitle: "我变了" })
    }
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