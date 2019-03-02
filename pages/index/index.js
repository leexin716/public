// pages/index/index.js
const ui = require('../../utils/ui')
const { $Toast } = require('../../dist/base/index')
const http = require('../../utils/http')
Page({
  data: {
    loading:false
  },
  handleText() {
    $Toast({
      content: '这是文本提示'
    });
  },
  onLoad: function (options) {
    // ui.showLoading('loading')
    // setTimeout(() => {
    //   ui.hideLoading()
    // },2000)
    // ui.showToast('提示信息')
    // ui.showModal('提示','确认删除吗',false)
    http.get({
      url:'',
      showLoading:true,
      success:(res) => {
        console.log(res)
      }
    })
  }
})