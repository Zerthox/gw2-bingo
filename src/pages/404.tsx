import React from "react";
import Layout, {Paragraph} from "../components/layout";

const NotFound = (): JSX.Element => (
    <Layout title="404 Not Found">
        <Paragraph align="center">Nothing to see here</Paragraph>
    </Layout>
);

export default NotFound;
