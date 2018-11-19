const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sections: [
      {
        tips: "popup-style content-alignment",
        memo: 'center center',
        code: '<wxzx-popup popup-style="center" content-alignment="center"></wxzx-popup>'
      },
      {
        tips: "popup-style content-alignment",
        memo: 'center scale',
        code: '<wxzx-popup popup-style="center" content-alignment="scale"></wxzx-popup>'
      },
      {
        tips: "popup-style content-alignment",
        memo: 'top top',
        code: '<wxzx-popup popup-style="top" content-alignment="top"></wxzx-popup>'
      },
      {
        tips: "popup-style content-alignment",
        memo: 'bottom bottom',
        code: '<wxzx-popup popup-style="bottom" content-alignment="bottom"></wxzx-popup>'
      },
      {
        tips: "popup-style content-alignment",
        memo: 'left left',
        code: '<wxzx-popup popup-style="left" content-alignment="left"></wxzx-popup>'
      },
      {
        tips: "popup-style content-alignment",
        memo: 'right right',
        code: '<wxzx-popup popup-style="right" content-alignment="right"></wxzx-popup>'
      },
      {
        tips: "offset",
        memo: 'offset 设置距边缘的距离',
        code: '<wxzx-popup offset="64" z-index="9990"></wxzx-popup>'
      }
    ],
    showPopup1: false,
    showPopup2: false,
    showPopup3: false,
    showPopup4: false,
    showPopup5: false,
    showPopup6: false,
    showPopup7: false
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

  change: function (e) {
    var index = e.currentTarget.dataset.index
    if (index == 0) {
      this.setData({ showPopup1: true })
    } else if (index == 1) {
      this.setData({ showPopup2: true })
    } else if (index == 2) {
      this.setData({ showPopup3: true })
    } else if (index == 3) {
      this.setData({ showPopup4: true })
    } else if (index == 4) {
      this.setData({ showPopup5: true })
    } else if (index == 5) {
      this.setData({ showPopup6: true })
    } else if (index == 6) {
      this.setData({ showPopup7: true })
    }
  }, 

  close: function () {
    this.setData({ showPopup6: false })
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