import axios from 'axios'

axios.defaults.baseURL = '../../../static/data'

function getguess () {
  return axios.get('guess.json')
}

function getNavList () {
  return axios.get('navlist.json')
}

function getNavList2 () {
  return axios.get('navlist2.json')
}

function getNavList4 () {
  return axios.get('navlist4.json')
}

function getGation () {
  return axios.get('Navigation.json')
}

function getVideo () {
  return axios.get('maoyan.json')
}

function getHotel () {
  return axios.get('hotel.json')
}

function getEat () {
  return axios.get('eat.json')
}

function getVouchers () {
  return axios.get('vouchers.json')
}

function getEates () {
  return axios.get('eates.json')
}

function getsearch () {
  return axios.get('../../../static/data/list/list11components/list11-search.json')
}

function getallcity () {
  return axios.get('../../../static/data/list/list11components/allcity.json')
}

function getsort () {
  return axios.get('../../../static/data/list/list11components/sort.json')
}

function getullist () {
  return axios.get('../../../static/data/list/list11components/ullist.json')
}

function getKtv () {
  return axios.get('ktv.json')
}

function getspa () {
  return axios.get('spa1.json')
}

function getList20 () {
  return axios.get('list20.json')
}

function getlist1List () {
  return axios.get('list1-list.json')
}

function gethuoguo () {
  return axios.get('huoguo.json')
}

function getBaby () {
  return axios.get('baby.json')
}

function getlist5List () {
  return axios.get('list5-list.json')
}

function getfood () {
  return axios.get('food.json')
}

function getlist11Content () {
  return axios.get('list11-content.json')
}

function getContent () {
  return axios.get('Content.json')
}

function getBeauty () {
  return axios.get('beauty.json')
}

function getLive () {
  return axios.get('list12-content.json')
}

function getSnack () {
  return axios.get('snack.json')
}

function getlist14 () {
  return axios.get('list14.json')
}

function getlist16img () {
  return axios.get('list16img.json')
}

function getlist16List () {
  return axios.get('ullist.json')
}

function getHun () {
  return axios.get('navlist17.json')
}

function getBanner () {
  return axios.get('banner.json')
}
export {
  getguess,
  getNavList,
  getNavList2,
  getGation,
  getVideo,
  getHotel,
  getEat,
  getVouchers,
  getEates,
  getsearch,
  getallcity,
  getsort,
  getullist,
  getNavList4,
  getKtv,
  getspa,
  getList20,
  getlist1List,
  gethuoguo,
  getBaby,
  getlist5List,
  getfood,
  getlist11Content,
  getContent,
  getBeauty,
  getLive,
  getSnack,
  getlist14,
  getlist16img,
  getHun,
  getlist16List,
  getBanner
}
