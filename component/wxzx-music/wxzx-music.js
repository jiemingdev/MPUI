// 在外围抱一个view position为relative
Component({
  properties: {
    lineCount: {
      type: [Number, String],
      value: 4,
      observer: function (newVal, oldVal, changedPath) {
        console.log("newVal = " + newVal)
        this.setData({ lineCount: parseInt(newVal) })
      }
    },
    liveState: {
      type: String,
      value: "die"
    },
    lineColor: {
      type: String,
      value: '#ff6600'
    },
    lineWidth: {
      type: [Number, String],
      value: 6
    },
    lineHeight: {
      type: [Number, String],
      value: 40
    }
  },
  data: {
    
  },

  attached: function () {
   
  },
  methods: {
  }
}) 