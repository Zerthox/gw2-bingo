import React, {useRef, useState} from "react";
import {PageProps} from "gatsby";
import classNames from "classnames";
import {toBlob} from "html-to-image";
import {Layout, spacing} from "../../components/layout";
import {Button, Paragraph} from "../../components/elements";
import {Bingo} from "../../components/bingo";
import {useFieldCount} from "../../hooks";
import {decode} from "../../convert/v1";

const isBrowser = typeof window !== "undefined";

const App = ({location}: PageProps): JSX.Element => {
    const fieldCount = useFieldCount();
    const ref = useRef();
    const [msg, setMsg] = useState<string>(null);

    const ids = decode(location.search.slice(1));
    const isValid = ids.length === 9 && ids.every((id) => id < fieldCount);

    return (
        <Layout title="Bingo Card">
            {isBrowser ? (
                isValid ? (
                    <>
                        <Bingo ref={ref} ids={ids}/>
                        <div className={classNames(spacing.top10, spacing.bottom20)}>
                            <Button
                                onClick={async () => {
                                    try {
                                        const blob = await toBlob(ref.current);
                                        navigator.clipboard.write([
                                            new ClipboardItem({[blob.type]: blob})
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
                )
            ) : null}
        </Layout>
    );
};

export default App;
