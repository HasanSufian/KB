import React from 'react';
import styles from './styles.module.css';

const UpdateSummery = () => {
    const items = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);

    return (
        <>
            <div className="row">
                <h2 className={styles.updateSummeryTitle}>Update Summery</h2>
                <button>Go</button>

            </div>
            <table className={styles.scrollableList}>
                <thead>
                    <tr>
                        <th>Date & Time</th>
                        <th>Update</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item}</td>
                            <td>{item}</td>
                            <td>{item}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    );
};

export default UpdateSummery;