const app = getApp()
Page({
  data: {
    list: [
      {
        index: 0,
        title: "music",
        rows: [
          {
            index: 0,
            title: 'music',
            url: '../music/music'
          }
        ]
      },
      {
        index: 1,
        title: "navbar",
        rows: [
          {
            index: 0,
            title: 'navbar',
            url: '../navbar/navbar'
          }
        ]
      },
      {
        index: 2,
        title: "popup",
        rows: [
          {
            index: 0,
            title: 'popup',
            url: '../popup/popup'
          }
        ]
      },
      {
        index: 3,
        title: "progress",
        rows: [
          {
            index: 0,
            title: 'progress',
            url: '../progress/progress'
          }
        ]
      },
      {
        index: 4,
        title: "slider",
        rows: [
          {
            index: 0,
            title: 'slider',
            url: '../slider/slider'
          }
        ]
      },
      {
        index: 5,
        title: "elip",
        rows: [
          {
            index: 0,
            title: 'elip',
            url: '../elip/elip'
          }
        ]
      },
      {
        index: 6,
        title: "notice",
        rows: [
          {
            index: 0,
            title: 'notice',
            url: '../notice/notice'
          }
        ]
      }
    ] 
  },

  rowClick: function (e) {
    var sectionIndex = e.currentTarget.dataset.sectionindex
    var rowIndex = e.currentTarget.dataset.rowindex
    var section = this.data.list[sectionIndex]
    var row = section.rows[rowIndex]
    wx.navigateTo({
      url: row.url
    })
  },

  onLoad: function (options) {
    var navHeight = app.globalData.systemInfo.statusBarHeight + 44
    var bodyHeight = app.globalData.systemInfo.windowHeight - navHeight
    this.setData ({ 
      bodyHeight: bodyHeight,
      navHeight: navHeight 
    })
  },

  onShow: function () {

  },

  onShareAppMessage: function () {
    return {
      title: '基于小程序的组件库 MPUI',
      path: "pages/index/index"
    }
  }
})