const app = getApp()
Page({
  data: {
    sections: [
      {
        tips: "线条数量",
        memo: 'line-count 属性设置线条数量',
        count: 3,
        color: '#ff6600',
        lineWidth: 6,
        lineHeight: 40,
        liveState: 'living',
        isShow: false,
        code: '<wxzx-music line-count="3"></wxzx-music>'
      },
      {
        tips: "线条颜色",
        memo: 'line-color 属性设置线条颜色',
        count: 4,
        color: '#b0b0b0', 
        lineWidth: 6,
        lineHeight: 40,
        liveState: 'die',
        isShow: false,
        code: '<wxzx-music line-color="#b0b0b0"></wxzx-music>'
      },
      {
        tips: "线条宽度",
        memo: 'line-width 属性设置线条宽度',
        count: 4,
        color: '#ff6600',
        lineWidth: 10,
        lineHeight: 40,
        liveState: 'die',
        isShow: false,
        code: '<wxzx-music line-width="10"></wxzx-music>'
      },
      {
        tips: "线条高度",
        memo: 'line-height 属性设置线条高度',
        count: 4,
        color: '#ff6600',
        lineWidth: 6,
        lineHeight: 60,
        liveState: 'die',
        isShow: false,
        code: '<wxzx-music line-height="60"></wxzx-music>'
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

  change: function (e) {
    var _type = e.currentTarget.dataset.type
    var index = e.currentTarget.dataset.index
    var section = this.data.sections[index]
    if (_type == 'start') {
      if (section.liveState == 'living') { return } 
      section.liveState = 'living'
    } else {
      if (section.liveState == 'die') { return }
      section.liveState = 'die'
    }
    this.setData({ sections: this.data.sections })
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