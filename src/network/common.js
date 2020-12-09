import {request2Get} from '@/utils/request'

export function getLatestNews() {
  return request2Get({
    url: '/latest-news'
  })
}
