const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sections: [
      {
        tips: "进度",
        memo: 'percent 属性设置进度的百分比',
        percent: 60,
        width: 500,
        strokeWidth: 10,
        activeColor: '#ff6600',
        backgroundColor: '#e1e1e1',
        radius: 5,
        bufferColor: '#181818',
        value: 20, 
        min: 0,
        max: 40,
        blockColor: '#fff',
        blockSize: 40,
        isCustom: false,
        blockSrc: null,
        blockImageWidth: 0,
        blockImageHeight: 0,
        code: '<wxzx-slider value="20" min="0" max="40" percent="60" buffer-color="#181818"></wxzx-slider>'
      },
      {
        tips: "长度",
        memo: 'width 属性设置长度',
        percent: 60,
        width: 550,
        strokeWidth: 10,
        activeColor: '#ff6600',
        backgroundColor: '#e1e1e1',
        radius: 5,
        bufferColor: '#181818',
        value: 20,
        min: 0,
        max: 40,
        blockColor: '#fff',
        blockSize: 40,
        isCustom: false,
        blockSrc: null,
        blockImageWidth: 0,
        blockImageHeight: 0,
        code: '<wxzx-slider width="550" value="20" min="0" max="40" percent="60" buffer-color="#181818"></wxzx-slider>'
      },
      {
        tips: "宽度",
        memo: 'stroke-width 属性设置高度',
        percent: 60,
        width: 500,
        strokeWidth: 16,
        activeColor: '#ff6600',
        backgroundColor: '#e1e1e1',
        radius: 8,
        bufferColor: '#181818',
        value: 20,
        min: 0,
        max: 40,
        blockColor: '#fff',
        blockSize: 40,
        isCustom: false,
        blockSrc: null,
        blockImageWidth: 0,
        blockImageHeight: 0,
        code: '<wxzx-slider stroke-width="16" value="20" min="0" max="40" percent="60" buffer-color="#181818"></wxzx-slider>'
      },
      {
        tips: "颜色",
        memo: 'active-color 属性设置进度颜色',
        percent: 60,
        width: 500,
        strokeWidth: 10,
        activeColor: '#ff0000',
        backgroundColor: '#e1e1e1',
        radius: 5,
        bufferColor: '#181818',
        value: 20,
        min: 0,
        max: 40,
        blockColor: '#fff',
        blockSize: 40,
        isCustom: false,
        blockSrc: null,
        blockImageWidth: 0,
        blockImageHeight: 0,
        code: '<wxzx-slider active-color="#ff0000" value="20" min="0" max="40" percent="60" buffer-color="#181818"></wxzx-slider>'
      },
      {
        tips: "背景颜色",
        memo: 'background-color 属性设置背景颜色',
        percent: 60,
        width: 500,
        strokeWidth: 10,
        activeColor: '#ff6600',
        backgroundColor: '#b0b0b0',
        radius: 5,
        bufferColor: '#181818',
        value: 20,
        min: 0,
        max: 40,
        blockColor: '#fff',
        blockSize: 40,
        isCustom: false,
        blockSrc: null,
        blockImageWidth: 0,
        blockImageHeight: 0,
        code: '<wxzx-slider background-color="#b0b0b0" value="20" min="0" max="40" percent="60" buffer-color="#181818"></wxzx-slider>'
      },
      {
        tips: "圆角",
        memo: 'radius 属性设置圆角',
        percent: 60,
        width: 500,
        strokeWidth: 10,
        activeColor: '#ff6600',
        backgroundColor: '#e1e1e1',
        radius: 0,
        bufferColor: '#181818',
        value: 20,
        min: 0,
        max: 40,
        blockColor: '#fff',
        blockSize: 40,
        isCustom: false,
        blockSrc: null,
        blockImageWidth: 0,
        blockImageHeight: 0,
        code: '<wxzx-slider radius="0" value="20" min="0" max="40" percent="60" buffer-color="#181818"></wxzx-slider>'
      },
      {
        tips: "渐变",
        memo: 'active-color 属性设置进度颜色',
        percent: 60,
        width: 500,
        strokeWidth: 10,
        activeColor: '#ffff00, #ff6600',
        backgroundColor: '#e1e1e1',
        radius: 5,
        bufferColor: '#181818',
        value: 20,
        min: 0,
        max: 40,
        blockColor: '#fff',
        blockSize: 40,
        isCustom: false,
        blockSrc: null,
        blockImageWidth: 0,
        blockImageHeight: 0,
        code: '<wxzx-slider active-color="#ffff00, #ff6600" value="20" min="0" max="40" percent="60" buffer-color="#181818"></wxzx-slider>'
      },
      {
        tips: "滑块颜色",
        memo: 'block-color 属性设置滑块颜色',
        percent: 60,
        width: 500,
        strokeWidth: 10,
        activeColor: '#d4237a',
        backgroundColor: '#e1e1e1',
        radius: 5,
        bufferColor: '#181818',
        value: 20,
        min: 0,
        max: 40,
        blockColor: '#d4237a',
        blockSize: 40,
        isCustom: false,
        blockSrc: null,
        blockImageWidth: 0,
        blockImageHeight: 0,
        code: '<wxzx-slider active-color="#d4237a" value="20" min="0" max="40" percent="60" buffer-color="#181818"></wxzx-slider>'
      },
      {
        tips: "自定义滑块",
        memo: 'is-custom 属性设置自定义滑块',
        percent: 60,
        width: 500,
        strokeWidth: 10,
        activeColor: '#d4237a',
        backgroundColor: '#e1e1e1',
        radius: 5,
        bufferColor: '#181818',
        value: 20,
        min: 0,
        max: 40,
        blockColor: '#d4237a',
        blockSize: 40,
        isCustom: true,
        blockSrc: null,
        blockImageWidth: 0,
        blockImageHeight: 0,
        code: '<wxzx-slider is-custom="true" value="20" min="0" max="40" percent="60" buffer-color="#181818"><view class="block" wx:if="{{item.isCustom}}"></view></wxzx-slider>'
      },
      {
        tips: "滑块大小",
        memo: 'block-size 属性设置滑块大小',
        percent: 60,
        width: 500,
        strokeWidth: 10,
        activeColor: '#d4237a',
        backgroundColor: '#e1e1e1',
        radius: 5,
        bufferColor: '#181818',
        value: 20,
        min: 0,
        max: 40,
        blockColor: '#d4237a',
        blockSize: 20,
        isCustom: false,
        blockSrc: null,
        blockImageWidth: 0,
        blockImageHeight: 0,
        code: '<wxzx-slider block-size="20" value="20" min="0" max="40" percent="60" buffer-color="#181818"></wxzx-slider>'
      },
      {
        tips: "滑块图片",
        memo: 'block-size 属性设置滑块图片',
        percent: 60,
        width: 500,
        strokeWidth: 10,
        activeColor: '#d4237a',
        backgroundColor: '#e1e1e1',
        radius: 5,
        bufferColor: '#181818',
        value: 20,
        min: 0,
        max: 40,
        blockColor: '#d4237a',
        blockSize: 20,
        isCustom: false,
        blockSrc: '../../img/slider.png',
        blockImageWidth: 54,
        blockImageHeight: 54,
        code: '<wxzx-slider block-src="../../img/slider.png" value="20" min="0" max="40" percent="60" buffer-color="#181818"></wxzx-slider>'
      },
      {
        tips: "slider方向",
        memo: 'orientation 属性设置slider方向',
        percent: 60,
        width: 500,
        strokeWidth: 10,
        activeColor: '#d4237a',
        backgroundColor: '#e1e1e1',
        radius: 5,
        bufferColor: '#181818',
        value: 20,
        min: 0,
        max: 40,
        blockColor: '#d4237a',
        blockSize: 20,
        isCustom: false,
        blockSrc: '../../img/slider.png',
        blockImageWidth: 54,
        blockImageHeight: 54,
        code: '<wxzx-slider orientation="portrait" value="20" min="0" max="40" percent="60" buffer-color="#181818"></wxzx-slider>'
      }
    ],
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