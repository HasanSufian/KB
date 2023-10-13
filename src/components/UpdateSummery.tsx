import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import summeryList from '../data/updateSummeryList.json';

type ListItem = {
    id: string,
    title: string,
    desc: string,
    time: string,
    link: string
};

const ListItem = ({ id, title, desc, time, link }: ListItem) => (
    <a href={link} dir='rtl'>
        <li key={id} className={styles.listItem}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <p className={styles.time} dir='ltr'>{time}</p>
        </li>
    </a>
);

 // Define the options for date formatting
 const timeOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'Africa/Cairo',
  };

const UpdateSummery = () => {

    const currentDate = new Date().toLocaleDateString();
    const todayPosts = summeryList.filter(item => item.time === currentDate);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayDate = yesterday.toLocaleDateString();
    const yesterdayPosts = summeryList.filter(item => item.time === yesterdayDate);
    const otherPosts = summeryList.filter(item => item.time !== currentDate && item.time !== yesterdayDate);

    return (
        <div className={styles.updateSummerySection}>
            {/*  title */}
            <h2 className={styles.updateSummeryTitle}>Update Summery</h2>
            <div className={clsx(styles.updateSummeryBody)}>
                {/* details section */}
                <div className={styles.listNav} dir='rtl'>
                    <h3>التفاصيل</h3>
                    <p>يمكن تفعيل كارت التجديد من خلال النظام الاساسي</p>
                    <p>{currentDate}</p>
                </div>
                {/* summery list */}
                <ul style={{ flex: '2 0 0' }} className={styles.scrollableList}>
                    {todayPosts.length > 0 && (
                        <section>
                            <h2 dir='rtl'>اليوم ( {todayPosts.length} )</h2>
                            <ul>
                                {todayPosts.map(item => (
                                    <ListItem id={item.id} title={item.title} desc={item.details} time={item.time} link={item.link} />
                                ))}
                            </ul>
                        </section>
                    )}

                    {yesterdayPosts.length > 0 && (
                        <section>
                            <h2 dir='rtl'>امس ( {yesterdayPosts.length} )</h2>
                            <ul>
                                {yesterdayPosts.map(item => (
                                    <ListItem id={item.id} title={item.title} desc={item.details} time={item.time} link={item.link} />
                                ))}
                            </ul>
                        </section>
                    )}

                    {otherPosts.length > 0 && (
                        <section>
                            <h2 dir='rtl'>تاريخ سابق ( {otherPosts.length} )</h2>
                            <ul>
                                {otherPosts.map(item => (
                                    <ListItem id={item.id} title={item.title} desc={item.details} time={item.time} link={item.link} />
                                ))}
                            </ul>
                        </section>
                    )}
                </ul>

            </div>

        </div>
    );
};

export default UpdateSummery;