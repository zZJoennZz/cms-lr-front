import type { NextApiRequest, NextApiResponse } from 'next';
import type { Pages } from '../../types/appTypes';

// interface PageContent {
//     id: number,
//     internalName: string,
//     pageTitle: string,
//     pageSlug: string,
//     pageContent: string, //this will be HTML format
//     isHome: boolean,
//     metaTitle: string,
//     metaDescription: string,
//     metaRobots: string,
//     metaKeywords: string,
//     otherMetaData: string, //this will be meta HTML tags
// }

export default function pagesList(req: NextApiRequest, res: NextApiResponse<Pages>) {
    const dummyData : Pages = {
        pages: 
            [
                {
                    id: 1,
                    pageName: "Home",
                    pageSlug: "home",
                },
                {
                    id: 2,
                    pageName: "About",
                    pageSlug: "about",
                }
            ]
    }
    res.status(200).json(dummyData);
}