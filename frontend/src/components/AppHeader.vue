<template>
    <div id="app" class="border" style="width: 1500px; margin-top: 10rem;">

        <a-menu v-model:selectedKeys="current" mode="horizontal">
            <a-menu-item key="mail">
                <template #icon>
                    <HomeOutlined />
                </template>
                <router-link to="/">Main</router-link>
            </a-menu-item>

            <a-menu-item key="app">
                <template #icon>
                    <appstore-outlined />
                </template>
                <router-link to="/account">회원가입</router-link>
                
            </a-menu-item>

            <a-sub-menu>
                <template #icon>
                    <setting-outlined />
                </template>
                <template #title>
                    마이페이지
                </template>

                <a-menu-item-group title="Item 1">
                    <a-menu-item key="setting:1">Option 1</a-menu-item>
                    <a-menu-item key="setting:2">Option 2</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group title="Item 2">
                    <a-menu-item key="setting:3">Option 3</a-menu-item>
                    <a-menu-item key="setting:4">Option 4</a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>

            <a-menu-item key="alipay">
                <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
                ant design vue - 링크
                </a>
            </a-menu-item>
        </a-menu>

    </div>
  
</template>
  
<script setup>
    import { h, ref } from 'vue';
    import { HomeOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';

    const current = ref(['mail']);

</script>
  
<style scoped>
    .item {
    margin-top: 2rem;
    display: flex;
    position: relative;
    }

    .details {
    flex: 1;
    margin-left: 1rem;
    }

    i {
    display: flex;
    place-items: center;
    place-content: center;
    width: 32px;
    height: 32px;

    color: var(--color-text);
    }

    h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
    }
  
    @media (min-width: 1024px) {
        .item {
        margin-top: 0;
        padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
        }
    
        i {
        top: calc(50% - 25px);
        left: -26px;
        position: absolute;
        border: 1px solid var(--color-border);
        background: var(--color-background);
        border-radius: 8px;
        width: 50px;
        height: 50px;
        }
    
        .item:before {
        content: ' ';
        border-left: 1px solid var(--color-border);
        position: absolute;
        left: 0;
        bottom: calc(50% + 25px);
        height: calc(50% - 25px);
        }
    
        .item:after {
        content: ' ';
        border-left: 1px solid var(--color-border);
        position: absolute;
        left: 0;
        top: calc(50% + 25px);
        height: calc(50% - 25px);
        }
    
        .item:first-of-type:before {
        display: none;
        }
    
        .item:last-of-type:after {
        display: none;
        }
    }
  </style>
  