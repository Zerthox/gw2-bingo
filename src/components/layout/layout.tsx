import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import SEO from "./seo";
import * as Styles from "./layout.module.scss";

export interface LayoutProps {
    children: React.ReactNode;
    title?: string;
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

const Layout = ({title = "", children}: LayoutProps): JSX.Element => {
    const {site}: LayoutData = useStaticQuery(graphql`
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
            <div className={Styles.main}>
                <div className={Styles.inner}>
                    <div className={Styles.header}>{title || site.siteMetadata.title}</div>
                    <div className={Styles.content}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
