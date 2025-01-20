<!-- Copyright (C) 2020-2025 INOV - All rights reserved. -->
<script setup>
import { useTemplateRef, watch } from 'vue';
import { GoogleMap } from 'vue3-google-map';

console.log('[GMap] Setup');

const map = {
  key: '', // google key 입력
  language: 'ko',
  region: 'KR',
  center: { lat: 37.5665, lng: 126.9780 }, // 서울 시청 좌표
  zoom: 12,
  minZoom: 2,
  maxZoom: 20,
  streetViewControl: false
};

let gmap = null;

const mapRef = useTemplateRef('map-ref');

watch(() => mapRef.value?.ready, ready => {
  if (ready) {
    gmap = mapRef.value.map;
  }
});

function zoomChanged() {
  // 줌 변경
}

function centerChanged() {
  const center = gmap.getCenter();
}
</script>

<template>
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
  />
</template>

<style>
html,
body,
#app {
  height: 100%; /* 모든 부모 요소에 높이를 100%로 설정 */
}
#map {
  height: 100vh;
}

body {
  margin: 0; /* 기본 여백 제거 */
}
</style>
