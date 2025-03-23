import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore('modal', () => {
    const isOpen = ref(false);
    const data = ref({
        title: '',
        address: '',
        images: [],
        info: '',
        location: { latitude: null, longitude: null }
    });

    const openModal = (newData) => {
        data.value = { ...newData };
        isOpen.value = true;
    }

    const closeModal = () => {
        data.value = { title: '', address: '', images: [], info: '', location: { latitude: null, longitude: null } };
        isOpen.value = false;
    }

    return { isOpen, data, openModal, closeModal };
});