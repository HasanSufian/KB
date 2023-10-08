import Link from '@docusaurus/Link';
import React from 'react';

type homePageLink = {
    href: string,
    className: string | (((isActive: boolean) => string) & string),

}

export default function HomePageButton({href,className}:homePageLink) {
    return (
        <Link href={href} className={className}/>
    );
}