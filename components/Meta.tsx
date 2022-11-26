import Head from 'next/head'
import Parse from 'html-react-parser'
import type { Meta as MetaType } from '../types/appTypes'

export default function Meta(props : MetaType) {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
            {props.metaDescription && <meta name="description" content={props.metaDescription} />}
            {props.metaKeywords && <meta name="keywords" content={props.metaKeywords} />}
            {props.metaRobots && <meta name="robots" content={props.metaRobots} />}
            {props.otherMetaData && Parse(props.otherMetaData)}
            <title>{props.pageTitle}</title>
            <base />
        </Head>
    )
}