// next react 는 server rendering 사용
// 아래 방식은 client rendering 방식 이기 때문에 client use 선언
"use client";

import React, { useState } from 'react';
import styles from '../page.module.css';
import FirstComponent from './component/NkFirstPage';
import SecondComponent from './component/NkSecondPage';

const NkPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('first');

    const renderComponent = () => {
        switch (activeTab) {
            case 'first':
                return <FirstComponent />;
            case 'second':
                return <SecondComponent />;
            default:
                return <FirstComponent />;
        }
    }

    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>Welcome to the NK page!</p>
                <button onClick={() => setActiveTab('first')}>first component</button>
                <button onClick={() => setActiveTab('second')}>second component</button>
            </div>
            <div className={styles.content}>
                {renderComponent()}
            </div>
        </main>
    );
};

export default NkPage;
