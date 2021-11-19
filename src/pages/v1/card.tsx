import React, {useRef, useState} from "react";
import {PageProps} from "gatsby";
import classNames from "classnames";
import {toBlob} from "html-to-image";
import Layout, {spacing} from "../../components/layout";
import {Button, Paragraph} from "../../components/elements";
import Bingo from "../../components/bingo";
import convert from "../../convert/v1";
import {fields} from "../../data";

const App = ({location}: PageProps): JSX.Element => {
    const ref = useRef();
    const [msg, setMsg] = useState<string>(null);
    const ids = convert.decode(location.search.slice(1));
    return (
        <Layout title="Bingo Card">
            {ids.length > 0 && ids.every((id) => id < fields.all.length) ? (
                <>
                    <Bingo ref={ref} ids={ids}/>
                    <div className={classNames(spacing.top10, spacing.bottom20)}>
                        <Button
                            onClick={async () => {
                                try {
                                    const blob = await toBlob(ref.current);
                                    navigator.clipboard.write([
                                        new ClipboardItem({
                                            // temporary error bypass until typescript fixes this
                                            [blob.type]: blob as unknown as ClipboardItemData
                                        })
                                    ]);
                                    setMsg("Copied to clipboard.");
                                } catch (err) {
                                    console.error(err);
                                    setMsg("Error copying to clipboard. May be due to missing permissions or using an unsupported browser.");
                                }
                            }}
                        >Copy as image</Button>
                        {msg ? (
                            <Paragraph>{msg}</Paragraph>
                        ) : null}
                    </div>
                </>
            ) : (
                <>
                    <Paragraph>Seems like you have gotten a malformed bingo link.</Paragraph>
                    <Paragraph>Maybe generate a new one on the home page instead?</Paragraph>
                </>
            )}
        </Layout>
    );
};

export default App;
