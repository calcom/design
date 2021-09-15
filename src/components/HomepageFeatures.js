import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const CategoryList = [
  {
    link: "/docs/branding",
    title: "Cal Branding",
    Svg: require("../../static/img/categories/default.svg").default,
    description: (
      <>Our branding guidelines and *.svgs to download.</>
    ),
  },
  {
    link: "/docs/colors",
    title: "Colors",
    Svg: require("../../static/img/categories/colors.svg").default,
    description: (
      <>Our color palette that all of our applications and services use.</>
    ),
  },
  {
    link: "/docs/typography",
    title: "Typography",
    Svg: require("../../static/img/categories/typography.svg").default,
    description: (
      <>The fonts that we use and the best practices surrounding text.</>
    ),
  },
  {
    link: "/docs/icons",
    title: "Icons",
    Svg: require("../../static/img/categories/icons.svg").default,
    description: (
      <>Our icon set and guidelines on when to use each type of icon.</>
    ),
  },
];

function Category({Svg, title, description, link}) {
    return (
        <Link to={link} className={clsx('col col--4')}>
            <div>
                <div className={styles.backing}>
                    <Svg className={styles.featureSvg} alt={title} />
                </div>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );
}

export default function HomepageCategories() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {CategoryList.map((props, idx) => (
                        <Category key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
