const app = getApp()
// E27359
// E68C5B
Component({
  properties: {
    navTitleFontSize: {
      type: [Number, String],
      value: 18
    },
    navTitleColor: {
      type: String,
      value: '#000000'
    },
    navTitle: {
      type: String,
      value: ''
    },
    navBackgroundColor: {
      type: [String, Array],
      value: '#ffffff',
      observer: function (newVal, oldVal, changedPath) {
        let navBackgroundColor = this.data.navBackgroundColor;
        if (navBackgroundColor == null) {
          this.setData({
            activeLineColor: null
          })
        }
        if (navBackgroundColor && !!~navBackgroundColor.indexOf(',')) {
          this.setData({
            activeLineColor: navBackgroundColor.split(',')
          })
        }
      }
    },
    navBackButtonColor: {
      type: String,
      value: '#000000'
    },
    isTabbar: {
      type: Boolean,
      value: false
    }
  },
  data: {
    isHidden: true,
    isHideHome: true
  },
  attached: function () {
    let navTitleFontSize = this.data.navTitleFontSize;
    if (navTitleFontSize > 30) {
      this.setData({
        navTitleFontSize: 30
      })
    } else if (navTitleFontSize < 18) {
      this.setData({
        navTitleFontSize: 18
      })
    }
    var pages = getCurrentPages()
    var page = pages[0]
    if (pages.length == 1) {
      this.setData({ isHidden: true, isHideHome: this.data.isTabbar })
    } else {
      this.setData({ isHidden: false, isHideHome: true })
    }
    
    this.setData({ navbarHeight: app.globalData.systemInfo.statusBarHeight + 44, statusBarHeight: app.globalData.systemInfo.statusBarHeight })
  },
  methods: {
    backLastView: function (e) {
      wx.navigateBack({})
    },
    backHome: function (e) {
      wx.reLaunch({
        url: '../index/index'
      })
    } 
  }
})
