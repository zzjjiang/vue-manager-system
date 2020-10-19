import Cookie from 'js-cookie'
export default {
  state: {
    isCollapse: false,
    currentMenu: null,
    menu: [],
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ]
  },
  mutations: {
    setMenu(state, val) {
      state.menu = val
      Cookie.set('menu', JSON.stringify(val))
      console.log(val, 'vuex')
    },
    clearMenu(state) {
      state.menu = ''
      Cookie.remove('menu')
    },
    addMenu(state, router) {
      let menuStr = Cookie.get('menu')
      if (!menuStr) {
        return
      }
      let menu = JSON.parse(menuStr)
      state.menu = menu
      let currentMenu = [
        {
          path: '/',
          component: () => import('@/views/Main'),
          children: []
        }
      ]
      console.log(menu)
      menu.forEach(item => {
        if (item.children) {
          item.children = item.children.map(item => {
            item.component = () => import(`@/views/${item.url}`)
          })
          currentMenu[0].children.push(...item.children)
        } else {
          item.component = () => import(`@/views/${item.url}`)
          currentMenu[0].children.push(item)
        }
      })
      console.log(currentMenu, 'cur')
      router.addRoutes(currentMenu)
    },
    selectMenu(state, val) {
      if (val.name !== 'home') {
        state.currentMenu = val
        let result = state.tabsList.findIndex(item => item.name === val.name)
        result === -1 ? state.tabsList.push(val) : ''
        Cookie.set('tagList', JSON.stringify(state.tabsList))
      } else {
        state.currentMenu = null
      }
    },
    getMenu(state) {
      let tagListStr = Cookie.get('tagList')
      if (tagListStr) {
        let tagList = JSON.parse(tagListStr)
        state.tabsList = tagList
      }
    },
    closeTab(state, val) {
      var result = state.tabsList.findIndex(item => item.name === val.name)
      state.tabsList.splice(result, 1)
    },
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {}
}
