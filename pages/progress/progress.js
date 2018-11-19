const app = getApp()
Page({
  data: {
    percent: 60,
    width: 500,
    strokeWidth: 6,
    backgroundColor: '#b0b0b0',
    radius: 3,
    sections: [
      {
        title: "改变进度条进度",
        tips: "进度",
        memo: 'percent 属性设置进度的百分比',
        activeColor: '#ff6600',
        code: '<wxzx-progress percent="90"></wxzx-progress>'
      },
      {
        title: "改变进度条长度",
        tips: "长度",
        memo: 'width 属性设置长度',
        activeColor: '#ff6600',
        code: '<wxzx-progress width="550"></wxzx-progress>'
      },
      {
        title: "改变进度条宽度",
        tips: "宽度",
        memo: 'stroke-width 属性设置高度',
        activeColor: '#ff6600',
        code: '<wxzx-progress stroke-width="10"></wxzx-progress>'
      },
      {
        title: "改变进度条颜色",
        tips: "颜色",
        memo: 'active-color 属性设置进度颜色',
        activeColor: '#ff0000',
        code: '<wxzx-progress active-color="ff0000"></wxzx-progress>'
      },
      {
        title: "改变进度条背景颜色",
        tips: "背景颜色",
        memo: 'background-color 属性设置背景颜色',
        activeColor: '#ff6600',
        code: '<wxzx-progress background-color="#181818"></wxzx-progress>'
      },
      {
        title: "改变进度条圆角",
        tips: "圆角",
        memo: 'radius 属性设置圆角',
        activeColor: '#ff6600',
        code: '<wxzx-progress radius="0"></wxzx-progress>'
      },
      {
        title: "进度条颜色渐变",
        tips: "渐变",
        memo: 'active-color 属性设置进度颜色',
        activeColor: '#ffff00, #ff6600',
        code: '<wxzx-progress active-color="#ffff00,#ff6600"></wxzx-progress>'
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

  showCode: function (e) {
    var index = e.currentTarget.dataset.index
    var section = this.data.sections[index]
    section.isShow = !section.isShow
    this.setData({ sections: this.data.sections })
  },

  onShareAppMessage: function () {

  }
})