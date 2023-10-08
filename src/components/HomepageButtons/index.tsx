import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

type HomePageButton = {
  title: string;
};

const HomePageButtons: HomePageButton[] = [
  {
    title: 'CRM Guide',
  },
  {
    title: 'Branches',
  },
  {
    title: 'Important Contacts',
  },

];

function HomeButton({ title }: HomePageButton) {
  return (
    <button type="button" className={clsx('btn btn-primary rounded-md', styles.homePagebuttons)}>{title}</button>
  );

};


export default function HomepageButtons(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {HomePageButtons.map((props, idx) => (
            <HomeButton key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
