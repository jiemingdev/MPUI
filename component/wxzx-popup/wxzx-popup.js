Component({
  properties: {
    // 动画效果
    // left: 从左往右
    // right: 从右往左
    // top: 从上往下
    // bottom: 从下往上
    // scale: 0 -> 1 缩放
    popupStyle: {
      type: String,
      value: ''
    }, 
    mask: {
      type: Boolean,
      value: false
    },
    zIndex: {
      type: [String, Number],
      value: 999
    },
    // popup内部视图在popup中的位置
    // center: 居中
    // left: 左中
    // right: 右中
    // top: 上中
    // bottom: 下中
    contentAlignment: {
      type: 'String',
      value: 'normal'
    },
    offset: {
      type: [String, Number],
      value: 0
    },
    popupShow: {
      type: Boolean,
      value: false,
      observer: function (newVal, oldVal, changedPath) {
        var that = this
        var offset = that.data.offset
        if (newVal) {
          if (that.data.popupStyle == 'scale') {
            that.setData({ scale: 1.0 })
          } else if (that.data.popupStyle == 'top') {
            that.setData({ top: offset })
          } else if (that.data.popupStyle == 'left') {
            that.setData({ left: offset })
          } else if (that.data.popupStyle == 'bottom') {
            that.setData({ bottom: offset })
          } else if (that.data.popupStyle == 'right') {
            that.setData({ right: offset })
          }
        } else {
          var height = that.data.height
          if (that.data.popupStyle == 'scale') {
            that.setData({ scale: offset })
          } else if (that.data.popupStyle == 'top') {
            that.setData({ top: -height })
          } else if (that.data.popupStyle == 'left') {
            that.setData({ left: -height })
          } else if (that.data.popupStyle == 'bottom') {
            that.setData({ bottom: height })
          } else if (that.data.popupStyle == 'right') {
            that.setData({ right: height })
          }
        }
      }
    }
  },
  data: {
    scale: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },

  attached: function () {
    var info = wx.getSystemInfoSync()
    var height = info.screenHeight
    this.setData ({
      top: -height,
      left: -height,
      bottom: height,
      right: height,
      height: height
    })
  },
  methods: {
    maskHide: function () {
      console.log(this.data.mask)
      if (!this.data.mask) {
        console.log("mask")
        this.setData ({ popupShow: false })
      }
    }
  }
}) 