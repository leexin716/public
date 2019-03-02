
//显示提示
export const showToast = function (content, duration) {
  if (!duration) duration = 1500
  wx.showToast({
    title: content,
    icon: 'none',
    duration: duration,
  })
}

//显示提示
export const showModal = function (title, content, showCancel, cancelText, confirmText) {
  if (!cancelText) cancelText = '取消'
  if (!confirmText) confirmText = '确定'
  wx.showModal({
    title: title,
    content: content,
    showCancel: showCancel,
    cancelText: cancelText,
    confirmText: confirmText,
    success(res) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
}

//显示loading
var isShowLoading = false
export const showLoading = function (title) {
  if (isShowLoading) return
  wx.showLoading({
    title: title ? title : '',
    mask: true,
    success: () => {
      isShowLoading = true
    }
  })
}
//停止loading
export const hideLoading = function () {
  if (!isShowLoading) return
  isShowLoading = false
  wx.hideLoading()
}

//跳转页面
var isClick = false
export const navigateTo = (url) => {
  if (isClick) return
  isClick = true
  wx.navigateTo({
    url: url,
    success: function (res) {
      // success
    },
    fail: function () {
      // fail
    },
    complete: function () {
      // complete
    }
  })
  setTimeout(() => { isClick = false }, 500)
}
