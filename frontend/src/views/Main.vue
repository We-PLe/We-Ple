<script setup>
import {useTemplateRef, watch, ref, onMounted} from 'vue';
import {GoogleMap} from 'vue3-google-map';

const map = {
    key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "", // google key 초기화
    language: 'ko',
    region: 'KR',
    center: {lat: 37.5665, lng: 126.9780}, // 서울 시청 좌표
    zoom: 12,
    minZoom: 2,
    maxZoom: 20,
    streetViewControl: false
};

let gmap = null;

const mapRef = useTemplateRef('map-ref');

let markerData = [
    {
        position: { lat: 37.5665, lng: 126.978 }, // 예시 위치
        title: "서울",
    },
    {
        position: { lat: 35.1796, lng: 129.0756 }, // 부산 예시
        title: "부산",
    },
]

let markers = [];   // 마커 저장해 둘 배열열

watch(() => mapRef.value?.ready, ready => {
    if (ready) {
        gmap = mapRef.value.map;

        markerData.forEach((markerInfo) => {
            const marker = new google.maps.Marker({
                position: markerInfo.position,
                map: gmap,
                title: markerInfo.title,
            });

            marker.addListener("click", () => {
                console.log(`마커 클릭됨: ${markerInfo.title}`);
            });

            markers.push(marker);

            // console.log("추가된 마커 개수:", markers.length); // 디버깅용
        });

    }
});

function zoomChanged() {
    // 줌 변경
}

function centerChanged() {
    const center = gmap.getCenter();
}

function onMapClick(event) {
    const clickedLat = event.latLng.lat();
    const clickedLng = event.latLng.lng();
    console.log("클릭한 위치:", clickedLat, clickedLng);
    popupModal(clickedLat, clickedLng);
}

function popupModal(){

} 


let searchQuery = ''; // 검색어 입력값

let intervalId = null;

onMounted(() => {
    setInterval(filteredKeywords, 10000);   // 10초마다 실행
});

let keywords = ref([
    "맛집",
    "카페",
    "콜키지",
    "와인",
    "와인마시고싶다",
    "프랑스 와인 좋긴한데 비싸",
    "스페인도 ㄱㅊ",
    "BDM도 맛있지",
    "햄버거",
    "햄부기햄북햄북어햄북스딱스함부르크햄부가우가햄비기햄부거햄부가티햄부기온앤온",
]);

function filteredKeywords() {

    const lastElement = keywords.value.pop(); // 마지막 요소 제거
    keywords.value.unshift(lastElement); // 마지막 요소를 맨 앞에 추가
    
    // console.log(keywords.value);
    // return keywords;
    // return keywords.filter((word) =>
    //     word.toLowerCase().includes(searchQuery.toLowerCase())
    // );
}

</script>

<template>

    <div class="search-container mt-4">
        <a-input-search placeholder="검색어를 입력하세요" allow-clear loading enter-button="검색" size="large" style="width: 50rem; margin-top: 10px;"/>
        <!-- @search="onSearch" -->

        <div class="live-results">
            <h2>실시간 검색어 순위</h2>
            <ul>

                <li v-for="(word, index) in keywords" :key="index" class="li_no_dot">
                    {{ index + 1 }}위: {{ word }}
                </li>


            </ul>
        </div>
    </div>
    
    <GoogleMap
        id="map"
        ref="map-ref"
        :api-key="map.key"
        :language="map.language"
        :region="map.region"
        :center="map.center"
        :zoom="map.zoom"
        :min-zoom="map.minZoom"
        :max-zoom="map.maxZoom"
        :street-view-control="map.streetViewControl"
        @zoom_changed="zoomChanged"
        @center_changed="centerChanged"
        @click="onMapClick"
        >
        
    </GoogleMap>



   
</template>

<style scoped>
/* html,
body, */
#app {

}

#map {
    height: 80vh;
}

body {
}

.live-results {
    text-align: left; /* 왼쪽 정렬 */
    margin-left: 19%; /* 왼쪽 여백 */
}

.li_no_dot{
    list-style-type: none;
    margin-left: -3%; /* 왼쪽 여백 */
}
</style>
