declare global {
  interface Window {
    kakao: any
  }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export type MapObject = window.kakao.maps.Map

export class MapService {
  public markPlace(view: HTMLElement, latitude: number, longitude: number): MapObject {
    const position = new window.kakao.maps.LatLng(latitude, longitude)
    const options = { // 지도를 생성할 때 필요한 기본 옵션
      center: position, // 지도의 중심좌표.
      level: 3 // 지도의 레벨(확대, 축소 정도)
    }

    const map = new window.kakao.maps.Map(view, options) // 지도 생성 및 객체 리턴
    const marker = new window.kakao.maps.Marker({
      position: position
    })
    marker.setMap(map)
    return map
  }
}

export const mapService = new MapService()
