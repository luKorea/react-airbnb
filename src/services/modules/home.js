import FDRequest from '../index'

export function getHomeGoodPriceData() {
  return FDRequest.get({
    url: "/home/goodprice"
  })
}


export function getHomeHighScoreData() {
  return FDRequest.get({
    url: "/home/highscore"
  })
}


export function getHomeDiscountData() {
  return FDRequest.get({
    url: "/home/discount"
  })
}


export function getHomeHotRecommendData() {
  return FDRequest.get({
    url: "/home/hotrecommenddest"
  })
}


export function getHomeLongforData() {
  return FDRequest.get({
    url: "/home/longfor"
  })
}


export function getHomePlusData() {
  return FDRequest.get({
    url: "/home/plus"
  })
}