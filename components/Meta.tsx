import Head from 'next/head'
import Parse from 'html-react-parser'
import type { Meta as MetaType } from '../types/appTypes'

export default function Meta(props : MetaType) {
    return (
        <Head>
            <title>{props.pageTitle}</title>
            {props.metaDescription && <meta name="description" content={props.metaDescription} />}
            {props.metaKeywords && <meta name="keywords" content={props.metaKeywords} />}
            {props.metaRobots && <meta name="robots" content={props.metaRobots} />}
            {props.otherMetaData && Parse(props.otherMetaData)}
        </Head>
    )
}