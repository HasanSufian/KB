import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

interface ListItem {
    title: string;
    description: string;
    dateTime: string;
}

const items: ListItem[] = [];

const UpdateSummery = () => {
    const items = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);

    return (
        <div className={styles.updateSummerySection}>
            <h2 className={styles.updateSummeryTitle}>Update Summery</h2>
            <div className={clsx(styles.updateSummeryBody)}>
                <div className={styles.listNav}>
                    <p>jhkgjkdsf</p>
                </div>
                <div style={{ flex: '2 0 0' }}>
                    <ul className={clsx(styles.scrollableList, 'col')}>

                        {items.map((item, index) => (
                            <li key={index} className={styles.listItem}>
                                <a href='#'><h3>{item}</h3></a>
                                <p>{item}</p>
                                <p style={{ position: 'absolute', top: '8px', right: '10px' }}>{item}</p>
                            </li>
                        ))}

                    </ul>
                </div>

            </div>

        </div>
    );
};

export default UpdateSummery;