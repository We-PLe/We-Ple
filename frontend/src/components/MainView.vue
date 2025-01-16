<template>


    <div id="map-container" class="border" style="height: 600px;">
        <!-- <button class="btn-primary">ads</button>
        <img src="../../img/123.png" class="" style="width:1000px;"> -->
        
        <gmpx-api-loader key="API키 넣는 곳" solution-channel="GMP_GE_mapsandplacesautocomplete_v2">
        </gmpx-api-loader>
        <gmp-map center="40.749933,-73.98633" zoom="13" map-id="DEMO_MAP_ID">
            <div slot="control-block-start-inline-start" class="place-picker-container">
                <gmpx-place-picker placeholder="Enter an address"></gmpx-place-picker>
            </div>
            <gmp-advanced-marker></gmp-advanced-marker>
        </gmp-map>
        
    </div>

    <!-- <div class="input-group mt-3">
        <input type="" class="form-control" placeholder="검색어를 입력하세요" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">검색</button>
    </div> -->
</template>

<script>
    import '@googlemaps/extended-component-library';

    export default {
        name: 'MainView',
        // 지도 최초 세팅 //
        data() {
            return {
            center: "40.749933,-73.98633", // 초기 맵 중심
            zoom: 13, // 초기 줌 레벨
            };
        },
        // 지도 최초 세팅 //
      
        mounted() {
            this.init();
        },
        methods: {
            async init() {
                await customElements.whenDefined('gmp-map');

                const map = document.querySelector('gmp-map');
                const marker = document.querySelector('gmp-advanced-marker');
                const placePicker = document.querySelector('gmpx-place-picker');
                const infowindow = new google.maps.InfoWindow();

                // 맵 설정
                map.innerMap.setOptions({
                    mapTypeControl: false
                });

                // 장소 선택 이벤트 핸들러
                placePicker.addEventListener('gmpx-placechange', () => {
                    const place = placePicker.value;

                    if (!place.location) {
                    window.alert(
                        "No details available for input: '" + place.name + "'"
                    );
                    infowindow.close();
                    marker.position = null;
                    return;
                    }

                    if (place.viewport) {
                    map.innerMap.fitBounds(place.viewport);
                    } else {
                    map.center = place.location;
                    map.zoom = 17;
                    }

                    marker.position = place.location;
                    infowindow.setContent(
                    `<strong>${place.displayName}</strong><br>
                    <span>${place.formattedAddress}</span>
                    `);
                    infowindow.open(map.innerMap, marker);
                });
            }
        }
    };
    

    // document.addEventListener('DOMContentLoaded', init);
</script>

<!-- <script type="module" src="https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js">
        </script> -->
        <!-- <script src="./index.js"></script> -->
<style scoped>

    html,
    body {
    height: 100%;
    margin: 0;
    padding: 0;
    }

    .place-picker-container {
    padding: 20px;
    }

</style>
