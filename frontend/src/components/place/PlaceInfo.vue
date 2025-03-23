<template>
    <Teleport to="body">
        <a-modal v-model:open="isOpen" width="80%" @cancel="closeModal" :footer="null"
                 :bodyStyle="{ height: '75vh', overflow: 'auto' }" :style="{ top: '5%'}">
            <template #title>
                <h3>{{ data.title }}</h3>
            </template>
            <div>
                {{ data.address }}
            </div>

            <div>
                {{ data.info }}
            </div>

            <div>
                <span>좌표 {{ data.location.latitude }} : {{ data.location.longitude }}</span>
            </div>

            <div class="image-gallery">
                <a-row :gutter="[16, 16]" justify="center">
                    <a-col v-for="(image, index) in data.images" :key="index" :span="6">
                        <img :src="image" class="gallery-image" />
                    </a-col>
                </a-row>
            </div>
        </a-modal>
    </Teleport>
</template>

<script setup>
import {useModalStore} from '@/stores/modalStore.js';
import {storeToRefs} from 'pinia';

const modalStore = useModalStore();
const {isOpen, data} = storeToRefs(modalStore);
const {closeModal} = modalStore;
</script>

<style scoped>
:deep(.ant-row-center) {
    justify-content: flex-start !important;
}

.image-gallery {
    display: flex;
    justify-content: start;
    align-items: center;
    overflow-x: auto;
    padding: 10px 0;
    white-space: nowrap;
}

.gallery-image {
    width: 100%;
    height: auto;
    max-height: 300px;
    object-fit: cover;
    border-radius: 8px;
}
</style>