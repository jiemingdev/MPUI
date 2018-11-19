const app = getApp()
Page({
  data: {
    sections: [
      {
        tips: "截断行数",
        memo: 'line 属性设置截断行数 默认为1',
        line: 1,
        isShow: false,
        showText: false,
        code: '<wxzx-elip line="1" custom-class="elip_view"></wxzx-elip>'
      }, {
        tips: "自定义样式",
        memo: 'custom-class 属性设置样式',
        line: 2,
        isShow: false,
        showText: false,
        code: '<wxzx-elip line="2" custom-class="elip_view"></wxzx-elip>'
      }, {
        tips: "传值",
        memo: 'text 属性设置value值',
        line: 1,
        isShow: false,
        showText: true,
        code: '<wxzx-elip text="这是一个需要截断的文本这是一个需要截断的文本这是一个需要截断的文本这是一个需要截断的文本这是一个需要截断的文本这是一个需要截断的文本" custom-class="elip_view"></wxzx-elip>'
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