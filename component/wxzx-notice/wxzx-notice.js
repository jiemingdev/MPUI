const app = getApp()
var interval = null
Component({
  properties: {
    backgroundColor: {
      type: String,
      value: '#FAFAD2'
    },
    color: {
      type: String,
      value: '#d4237a'
    },
    showIcon: {
      type: Boolean,
      value: false
    },
    showClose: {
      type: Boolean,
      value: false
    },
    text: {
      type: String,
      value: ''
    },
    src: {
      type: String,
      value: '../../img/laba.png'
    },
    // 是否滚动显示
    isScroll: {
      type: Boolean,
      value: false
    },
    // 是否首尾衔接滚动
    isJoin: {
      type: Boolean,
      value: false
    },
    // 滚动一次所需时间
    speed: {
      type: [String, Number],
      value: 1
    }
  },
  data: {
    notice_hidden: false,
    fontSize: 24 / app.globalData.systemInfo.pixelRatio,
    left1: 0,
    left2: 0
  },

  ready: function () {
    if (this.data.showIcon && this.data.showClose) {
      this.setData({ notice_class: 'icon_close_class' })
    } else {
      if (this.data.showClose) {
        this.setData({ notice_class: 'close_class' })
      } else if (this.data.showIcon) {
        this.setData({ notice_class: 'icon_class' })
      } else {
        this.setData({ notice_class: 'normal_class' })
      }
    }

    var that = this
    if (this.data.isScroll) {
      wx.createSelectorQuery().in(this).select('#notice_text').boundingClientRect(function (rect) {
        console.log(rect)
        console.log(that.data.isJoin)
        if (that.data.isJoin) {
          console.log(rect.width)
          that.setData({ left2: rect.width })
        }
        that.startScroll(rect.width)
      }).exec()
    }
  },

  detached: function () {
    if (interval) {
      clearInterval(interval)
    }
  },

  attached: function () {
    if (!this.data.src && this.data.showIcon) {
      this.setData({ src: '../../img/laba.png' })
    }
  },

  methods: {
    close: function () {
      this.setData ({ notice_hidden: true })
      this.triggerEvent('close', {}, null);
    },
    noticeClick: function () {
      this.triggerEvent('noticeClick', {}, null);
    },
    startScroll: function (width) {
      var that = this
      var startLeft1 = true
      var startLeft2 = false
      var length = that.data.text.length * that.data.fontSize
      var blankWidth = 60
      if (length < width - 60) {
        blankWidth = width - 60
      }
      console.log(blankWidth)
      interval = setInterval(function () {
        if (-that.data.left1 >= length) {
          that.setData({ left1: width }) 
          if (that.data.isJoin) {
            startLeft1 = false
          } else {
            startLeft1 = true
          }
        }
        if (-that.data.left2 > length && that.data.isJoin) {
          that.setData({ left2: width }) 
          startLeft2 = false
        }
        

        if (-that.data.left1 - (length - width) > blankWidth && that.data.isJoin) {
          if (!startLeft2) {
            startLeft2 = true
          }
        }
        if (-that.data.left2 - (length - width) > blankWidth && that.data.isJoin) {
          if (!startLeft1) {
            startLeft1 = true
          }
        }
        if (startLeft1) {
          that.setData({ left1: that.data.left1 - that.data.speed })
        } 
        if (startLeft2) {
          that.setData({ left2: that.data.left2 - that.data.speed })
        }
      }, 50)
    }
  }
}) 