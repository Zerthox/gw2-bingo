import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {SEO} from "./seo";
import {LinkButton} from "../elements/button";
import * as styles from "./layout.module.scss";
import * as spacing from "./spacing.module.scss";

export interface LayoutProps {
    children: React.ReactNode;
    title?: string;
    isHome?: boolean;
}

interface LayoutData {
    site: {
        siteMetadata: {
            title: string;
            description: string;
            author: string;
        }
    }
}

export const Layout = ({title = "", isHome = false, children}: LayoutProps): JSX.Element => {
    const {site} = useStaticQuery<LayoutData>(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `);

    return (
        <>
            <SEO
                title={title ? `${title} - ${site.siteMetadata.title}` : site.siteMetadata.title}
                description={site.siteMetadata.description}
                author={site.siteMetadata.author}
            />
            <div className={styles.main}>
                <div className={styles.inner}>
                    <div className={styles.header}>{title || site.siteMetadata.title}</div>
                    <div className={styles.content}>
                        {children}
                        {!isHome ? <LinkButton to="/" className={spacing.top20}>Back to home</LinkButton> : null}
                    </div>
                </div>
            </div>
        </>
    );
};
