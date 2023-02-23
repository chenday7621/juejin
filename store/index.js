export const state=()=>{
  return{
    articles:[],
    content:{},
    tab1_categories:[
      {
        id: 1,
        attributes: {
          name: '首页',
          labelName: null,
          hasLabel: false,
          createdAt: '2023-02-21T13:50:56.045Z',
          updatedAt: '2023-02-21T13:52:03.714Z',
          publishedAt: '2023-02-21T13:52:03.712Z'
        }
      },
      {
        id: 2,
        attributes: {
          name: '沸点',
          labelName: null,
          hasLabel: false,
          createdAt: '2023-02-21T13:51:58.737Z',
          updatedAt: '2023-02-21T13:51:59.566Z',
          publishedAt: '2023-02-21T13:51:59.565Z'
        }
      },
      {
        id: 3,
        attributes: {
          name: '课程',
          labelName: null,
          hasLabel: false,
          createdAt: '2023-02-21T13:52:11.283Z',
          updatedAt: '2023-02-21T13:52:11.745Z',
          publishedAt: '2023-02-21T13:52:11.744Z'
        }
      },
      {
        id: 4,
        attributes: {
          name: '活动',
          labelName: '邀请有礼',
          hasLabel: true,
          createdAt: '2023-02-21T13:52:34.077Z',
          updatedAt: '2023-02-21T13:52:34.963Z',
          publishedAt: '2023-02-21T13:52:34.962Z'
        }
      }
    ],
    tab2_categories:[
      {
        id: 1,
        attributes: {
          CNname: '综合',
          ENname: 'recommended',
          createdAt: '2023-02-22T01:02:36.370Z',
          updatedAt: '2023-02-22T01:02:36.876Z',
          publishedAt: '2023-02-22T01:02:36.875Z'
        }
      },
      {
        id: 2,
        attributes: {
          CNname: '后端',
          ENname: 'backend',
          createdAt: '2023-02-22T01:03:15.935Z',
          updatedAt: '2023-02-22T01:03:17.107Z',
          publishedAt: '2023-02-22T01:03:17.106Z'
        }
      },
      {
        id: 3,
        attributes: {
          CNname: '前端',
          ENname: 'frontend',
          createdAt: '2023-02-22T01:03:32.196Z',
          updatedAt: '2023-02-22T01:03:32.855Z',
          publishedAt: '2023-02-22T01:03:32.854Z'
        }
      },
      {
        id: 4,
        attributes: {
          CNname: ' Android',
          ENname: 'android',
          createdAt: '2023-02-22T01:03:54.804Z',
          updatedAt: '2023-02-22T01:03:55.701Z',
          publishedAt: '2023-02-22T01:03:55.700Z'
        }
      },
      {
        id: 5,
        attributes: {
          CNname: 'IOS',
          ENname: 'ios',
          createdAt: '2023-02-22T01:04:21.895Z',
          updatedAt: '2023-02-22T01:04:22.962Z',
          publishedAt: '2023-02-22T01:04:22.961Z'
        }
      },
      {
        id: 6,
        attributes: {
          CNname: '人工智能',
          ENname: 'ai',
          createdAt: '2023-02-22T01:04:34.511Z',
          updatedAt: '2023-02-22T01:04:35.416Z',
          publishedAt: '2023-02-22T01:04:35.415Z'
        }
      }
    ]
  }
}

export const mutations={
  updateArticles(state,payload){
    state.articles=payload
  },
  updateArticle(state,payload){
    let all=state.articles
    for(let i=0;i<all.length;i++){
      if(all[i].id===payload){
        state.content=all[i]
      }
    }
  },
  updateTabOne(state,payload){
    state.tab1_categories=payload
  },
  updateTabTwo(state,payload){
    state.tab2_categories=payload
  }
}
export const actions={
  // nuxtServerInit({commit}){
  //   commit('updateArticles',)
  // }
}
