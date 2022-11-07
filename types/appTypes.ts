interface PageList {
    id: number,
    pageName: string,
    pageSlug: string,
}

interface Pages {
    pages: PageList[],
}

interface Meta {
    pageTitle: string,
    metaDescription?: string,
    metaRobots?: string,
    metaKeywords?: string,
    otherMetaData?: string, //this will be meta HTML tags
}

interface PageContent {
    id: number,
    internalName: string,
    pageTitle: string,
    pageSlug: string,
    pageContent: string, //this will be HTML format
    isHome: boolean,
    metaDescription?: string,
    metaRobots?: string,
    metaKeywords?: string,
    otherMetaData?: string, //this will be meta HTML tags
}


export type { PageList, Pages, Meta, PageContent }