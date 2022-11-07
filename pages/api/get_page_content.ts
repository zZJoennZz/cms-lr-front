import type { NextApiRequest, NextApiResponse } from 'next';
import type { PageContent } from '../../types/appTypes';

export default function pageContent(req: NextApiRequest, res: NextApiResponse<PageContent>) {

    const dummyData : PageContent = {
        id: 1,
        internalName: 'home',
        pageSlug: '/home',
        pageTitle: 'Home',
        pageContent: `
            <div>
                HEY THERE!
            </div>
        `,
        isHome: true,
        metaDescription: '',
        metaKeywords: '',
        metaRobots: '',
        otherMetaData: '',
    }
    res.status(200).json(dummyData);
}