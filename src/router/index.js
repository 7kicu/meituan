import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import getcity from '@/common/city/getcity'
import seach from '@/components/seach'
import my from '@/components/my'
import user from '@/components/mychildren/user'
import phone from '@/components/mychildren/phone'
import list1 from '@/components/Navlist/components/list1'
import list2 from '@/components/Navlist/components/list2'
import list2children from '@/components/Navlist/components/components/list2children'
import list2children2 from '@/components/Navlist/components/components/list2children2'
import hotel from '@/components/Navlist/components/components/hotel'
import list3 from '@/components/Navlist/components/list3'
import list4 from '@/components/Navlist/components/list4'
import list5 from '@/components/Navlist/components/list5'
import list6 from '@/components/Navlist/components/list6'
import list7 from '@/components/Navlist/components/list7'
import list8 from '@/components/Navlist/components/list8'
import list8child from '@/components/Navlist/components/list8child/list8child'
import list8child1 from '@/components/Navlist/components/list8child/list8child1'
import list9 from '@/components/Navlist/components/list9'
import list10 from '@/components/Navlist/components/list10'
import list11 from '@/components/Navlist/components/list11'
import list12 from '@/components/Navlist/components/list12'
import list12child from '@/components/Navlist/components/list12child/list12child'
import list13 from '@/components/Navlist/components/list13'
import list14 from '@/components/Navlist/components/list14'
import list15 from '@/components/Navlist/components/list15'
import list16 from '@/components/Navlist/components/list16'
import list17 from '@/components/Navlist/components/list17'
import TabChildren from '@/components/Navlist/components/list17/TabChildren'
import list18 from '@/components/Navlist/components/list18'
import list18Child1 from '@/components/Navlist/components/list18/list18Child1'
import Design from '@/components/Navlist/components/list18/Design'
import Materials from '@/components/Navlist/components/list18/Materials'
import Electrical from '@/components/Navlist/components/list18/Electrical'
import Hypermarket from '@/components/Navlist/components/list18/Hypermarket'
import Design1 from '@/components/Navlist/components/list18/Design1'
import Materials1 from '@/components/Navlist/components/list18/Materials1'
import Electrical1 from '@/components/Navlist/components/list18/Electrical1'
import Hypermarket1 from '@/components/Navlist/components/list18/Hypermarket1'
import Classify from '@/components/Navlist/components/list18/Classify'
import list19 from '@/components/Navlist/components/list19'
import list20 from '@/components/Navlist/components/list20'
import listone from '@/components/Navlist/components/list1components/listone'
import listtwo from '@/components/Navlist/components/list1components/listtwo'
import listthree from '@/components/Navlist/components/list1components/listthree'
import listfour from '@/components/Navlist/components/list1components/listfour'
import listfive from '@/components/Navlist/components/list1components/listfive'
import listsix from '@/components/Navlist/components/list1components/listsix'
import listseven from '@/components/Navlist/components/list1components/listseven'
import listeight from '@/components/Navlist/components/list1components/listeight'
// import babyList from '@/components/Navlist/components/baby/babyList'
import guess from '@/components/Navlist/components/baby/babyList/guess'
import child from '@/components/Navlist/components/baby/babyList/child'
import film from '@/components/Navlist/components/baby/babyList/film'
import english from '@/components/Navlist/components/baby/babyList/english'

import guess1 from '@/components/Navlist/components/baby/babyList/guess1'
import child1 from '@/components/Navlist/components/baby/babyList/child1'
import film1 from '@/components/Navlist/components/baby/babyList/film1'
import english1 from '@/components/Navlist/components/baby/babyList/english1'
import content from '@/common/content'
import content1 from '@/common/content1'
import content2 from '@/common/content2'
import content3 from '@/common/content3'
import content4 from '@/common/content4'
import content5 from '@/common/content5'
import content6 from '@/common/content6'
import content7 from '@/common/content7'
import content8 from '@/common/content8'
import content9 from '@/common/content9'
import content10 from '@/common/content10'
import content11 from '@/common/content11'
import submit from '@/common/submit'
import submit1 from '@/common/submit1'
import submit2 from '@/common/submit2'
import submit3 from '@/common/submit3'
import submit4 from '@/common/submit4'
import submit5 from '@/common/submit5'
import submit6 from '@/common/submit6'
import submit7 from '@/common/submit7'
import submit8 from '@/common/submit8'
import submit9 from '@/common/submit9'
import submit10 from '@/common/submit10'
import submit11 from '@/common/submit11'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home
  }, {
    path: '/seach',
    name: 'seach',
    component: seach
  },
  {
    path: '/getcity',
    name: 'getcity',
    component: getcity
  }, {
    path: '/my',
    name: 'my',
    component: my,
    children: [{
      path: '/user',
      name: 'user',
      component: user
    }, {
      path: '/phone',
      name: 'phone',
      component: phone
    }, {
      path: '/my/',
      component: user
    }]
  }, {
    path: '/list1',
    name: 'list1',
    component: list1
  },
  {
    path: '/list2',
    name: 'list2',
    component: list2,
    children: [{
      path: '/list2children',
      name: 'list2children',
      component: list2children
    }, {
      path: '/list2children2',
      name: 'list2children2',
      component: list2children2
    }, {
      path: '/list2/',
      component: list2children
    }]
  },
  {
    path: '/list3',
    name: 'list3',
    component: list3
  }, {
    path: '/hotel',
    name: 'hotel',
    component: hotel
  },
  {
    path: '/list4',
    name: 'list4',
    component: list4
  },
  {
    path: '/list5',
    name: 'list5',
    component: list5
  },
  {
    path: '/list6',
    name: 'list6',
    component: list6
  },
  {
    path: '/list7',
    name: 'list7',
    component: list7
  },
  {
    path: '/list8',
    name: 'list8',
    component: list8,
    children: [{
      path: '/list8child',
      name: 'list8child',
      component: list8child
    }, {
      path: '/list8child1',
      name: 'list8child1',
      component: list8child1
    }, {
      path: '/list8/',
      component: list8child
    }]
  },
  {
    path: '/list9',
    name: 'list9',
    component: list9
  },
  {
    path: '/list10',
    name: 'list10',
    component: list10
  },
  {
    path: '/list11',
    name: 'list11',
    component: list11
  },
  {
    path: '/list12',
    name: 'list12',
    component: list12,
    children: [{
      path: '/list12child',
      name: 'list12child',
      component: list12child
    }, {
      path: '/list12/',
      component: list12child
    }]
  },
  {
    path: '/list13',
    name: 'list13',
    component: list13
  },
  {
    path: '/list14',
    name: 'list14',
    component: list14
  },
  {
    path: '/list15',
    name: 'list15',
    component: list15,
    children: [{
      path: '/guess',
      name: 'guess',
      component: guess
    }, {
      path: '/child',
      name: 'child',
      component: child
    }, {
      path: '/film',
      name: 'film',
      component: film
    }, {
      path: '/english',
      name: 'english',
      component: english

    }, {
      path: '/list15/',
      component: guess
    }]
  },
  {
    path: '/list16',
    name: 'list16',
    component: list16,
    children: [{
      path: '/guess1',
      name: 'guess1',
      component: guess1
    }, {
      path: '/child1',
      name: 'child1',
      component: child1
    }, {
      path: '/film1',
      name: 'film1',
      component: film1
    }, {
      path: '/english1',
      name: 'english1',
      component: english1

    }, {
      path: '/list16/',
      component: guess1
    }]
  },
  {
    path: '/list17',
    name: 'list17',
    component: list17,
    children: [{
      path: '/TabList',
      name: '/TabList',
      component: TabChildren
    }, {
      path: '/list17/',
      component: TabChildren
    }]
  },
  {
    path: '/list18',
    name: 'list18',
    component: list18,
    children: [{
      path: '/list18Child1',
      name: 'list18Child1',
      component: list18Child1,
      children: [{
        path: '/',
        name: 'Design',
        component: Design
      }, {
        path: '/Materials',
        name: 'Materials',
        component: Materials
      }, {
        path: '/Electrical',
        name: 'Electrical',
        component: Electrical
      }, {
        path: '/Hypermarket',
        name: 'Hypermarket',
        component: Hypermarket
      }, {
        path: '/Design/',
        component: Design
      }]
    }, {
      path: '/Classify',
      name: 'Classify',
      component: Classify,
      children: [{
        path: '/',
        name: 'Design1',
        component: Design1
      }, {
        path: '/Design1',
        name: 'Design1',
        component: Design1
      }, {
        path: '/Materials1',
        name: 'Materials1',
        component: Materials1
      }, {
        path: '/Electrical1',
        name: 'Electrical1',
        component: Electrical1
      }, {
        path: '/Hypermarket1',
        name: 'Hypermarket1',
        component: Hypermarket1
      }, {
        path: '/Design1/',
        component: Design1
      }]
    },
    {
      path: '/list18/',
      component: list18Child1
    }
    ]
  },
  {
    path: '/list19',
    name: 'list19',
    component: list19
  },
  {
    path: '/list20',
    name: 'list20',
    component: list20
  },
  {
    path: '/listone',
    name: 'listone',
    component: listone
  }, {
    path: '/listtwo',
    name: 'listtwo',
    component: listtwo
  }, {
    path: '/listthree',
    name: 'listthree',
    component: listthree
  }, {
    path: '/listfour',
    name: 'listfour',
    component: listfour
  }, {
    path: '/listfive',
    name: 'listfive',
    component: listfive
  }, {
    path: '/listsix',
    name: 'listsix',
    component: listsix
  }, {
    path: '/listseven',
    name: 'listseven',
    component: listseven
  }, {
    path: '/listeight',
    name: 'listeight',
    component: listeight
  }, {
    path: '/content',
    name: 'content',
    component: content
  }, {
    path: '/content1',
    name: 'content1',
    component: content1
  }, {
    path: '/content2',
    name: 'content2',
    component: content2
  }, {
    path: '/content3',
    name: 'content3',
    component: content3
  }, {
    path: '/content4',
    name: 'content4',
    component: content4
  }, {
    path: '/content5',
    name: 'content5',
    component: content5
  }, {
    path: '/content6',
    name: 'content6',
    component: content6
  }, {
    path: '/content7',
    name: 'content7',
    component: content7
  }, {
    path: '/content8',
    name: 'content8',
    component: content8
  }, {
    path: '/content9',
    name: 'content9',
    component: content9
  }, {
    path: '/content10',
    name: 'content10',
    component: content10
  }, {
    path: '/content11',
    name: 'content11',
    component: content11
  }, {
    path: '/submit',
    name: 'submit',
    component: submit
  }, {
    path: '/submit1',
    name: 'submit1',
    component: submit1
  }, {
    path: '/submit2',
    name: 'submit2',
    component: submit2
  }, {
    path: '/submit3',
    name: 'submit3',
    component: submit3
  }, {
    path: '/submit4',
    name: 'submit4',
    component: submit4
  }, {
    path: '/submit5',
    name: 'submit5',
    component: submit5
  }, {
    path: '/submit6',
    name: 'submit6',
    component: submit6
  }, {
    path: '/submit7',
    name: 'submit7',
    component: submit7
  }, {
    path: '/submit8',
    name: 'submit8',
    component: submit8
  }, {
    path: '/submit9',
    name: 'submit9',
    component: submit9
  }, {
    path: '/submit10',
    name: 'submit10',
    component: submit10
  }, {
    path: '/submit11',
    name: 'submit11',
    component: submit11
  }
  ]
})
