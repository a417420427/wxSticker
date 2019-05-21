


Page({
  data: {
    current: 'homepage',
    tabList: [{
      'title': '主页',
      'key': 'homePage',
      'icon': 'homepage',
      'current-icon': "homepage_fill",
      'url': '/pages/index/index'
    }, {
      'title': '收藏',
      'key': 'collection',
      'icon': 'collection',
      'current-icon': "collection_fill",
      'url': '/pages/collection/collection'
    }, {
      'title': '搜索',
      'key': 'search',
      'icon': 'search',
      'current-icon': "search_fill",
      'url': '/pages/search/search'
    }]
  },
  onLoad: function () {
    //<i-tab-bar-item  key="homepage" icon="homepage" current-icon="homepage_fill" title="Home"><
    const tabList = []
  },
  handleChange(e) {
   
    console.log(this)
    const currentTab = this.data.tabList.find(v => v.key === e.detail.key)
    wx.switchTab({
      url: currentTab.url
    })
    this.setData({
      current: currentTab.key
    });
  },
  tapName(e) {
    console.log(e)
  },
  handleClick(e) {
    console.log(e, '--------')
  },
  switchTab(e) {




    // const data = e.currentTarget.dataset;
    // const url = data.path;
    // app.globalData.selectedIndex = data.index;
    // wx.switchTab({ 
    //   url: url
    // })
  }
})