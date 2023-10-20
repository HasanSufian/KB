import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import summeryList from '../data/updateSummeryList.json';

type ListItem = {
    id?: string,
    title?: string,
    desc?: string,
    date?: string,
    time?: string,
    link?: string,
    location?: string
};

// chack  if item details are read 
const isRead: Boolean = true;

// create unique id
function createId(titleLength:number) {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDay();
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const id = `${titleLength}${year}${month}${day}${hour}${minutes}${seconds}`
    return id;
    }

// The item of the summery list
const SummaryListItem  = ({ id, title, desc, date, time, link, location }: ListItem) => (
    <div dir='rtl'>
        <li key={createId(title.length)} className={styles.listItem} style={itemStyles}>
            <h3>{title}</h3>
            {/* <p>{desc}</p> */}
            <a href={link}>
                <p>{location}</p>
            </a>
            <p className={styles.time} dir='ltr'>{date} {time}</p>
        </li>
     </div>
);

// conditional styles of the item
const itemStyles = {
    borderRight: !isRead && '3px solid',
};

// Define the options for date formatting
const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  

const UpdateSummery = () => {
    const currentDate = new Date().toLocaleDateString();
    const todayPosts = summeryList.filter(item => item.date === currentDate);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayDate = yesterday.toLocaleDateString();
    const yesterdayPosts = summeryList.filter(item => item.date === yesterdayDate);
    const otherPosts = summeryList.filter(item => item.date !== currentDate && item.date !== yesterdayDate);

    return (
        <div className={styles.updateSummerySection}>
            {/*  title */}
            <h2 className={styles.updateSummeryTitle}>Update Summery</h2>
            <div className={clsx(styles.updateSummeryBody)}>
                {/* details section */}
                <div className={styles.listNav} dir='rtl'>
                    <h3>التفاصيل</h3>
                    <p>يمكن تفعيل كارت التجديد من خلال النظام الاساسي</p>
                    <p dir='ltr'>{createId(23)}</p>
                </div>
                {/* summery list */}
                <ul style={{ flex: '2 0 0' }} className={styles.scrollableList}>
                    {todayPosts.length > 0 && (
                        <section>
                            <h2 dir='rtl'>اليوم ( {todayPosts.length} )</h2>
                            <ul>
                                {todayPosts.map(item => (
                                    <SummaryListItem location={item.location}  id={item.id} title={item.title} desc={item.details} time={item.time} link={item.link} />
                                ))}
                            </ul>
                        </section>
                    )}

                    {yesterdayPosts.length > 0 && (
                        <section>
                            <h2 dir='rtl'>امس ( {yesterdayPosts.length} )</h2>
                            <ul>
                                {yesterdayPosts.map(item => (
                                    <SummaryListItem location={item.location}  id={item.id} title={item.title} desc={item.details} date={new Date(item.date).toLocaleDateString('ar-EG')} time={new Date(item.time).toLocaleTimeString()} link={item.link} />
                                ))}
                            </ul>
                        </section>
                    )}

                    {otherPosts.length > 0 && (
                        <section>
                            <h2 dir='rtl'>تاريخ سابق</h2>
                            <ul>
                                {otherPosts.map(item => (
                                    <SummaryListItem location={item.location}  id={item.id} title={item.title} desc={item.details} date={item.date} time={item.time} link={item.link} />
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