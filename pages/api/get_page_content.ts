import type { NextApiRequest, NextApiResponse } from 'next';
import type { PageContent } from '../../types/appTypes';

export default function pageContent(req: NextApiRequest, res: NextApiResponse<PageContent[]>) {

    const dummyData: PageContent[]  = [ 
        {
            id: 1,
            internalName: 'home',
            pageSlug: '/home',
            pageTitle: 'Home',
            pageContent: [
                {
                    id: 1,
                    name: 'Test',
                    content: `
                        <div>
                            ASDASDASD
                        </div>
                    `,
                    isPublished: true,
                }
            ],
            isHome: true,
            metaDescription: 'ASDASDASDASDASDASD',
            metaKeywords: 'test, fight, me',
            metaRobots: 'test',
            otherMetaData: '<meta name="author" content="Joenn Aquilino" />',
            isPublished: true,
        },{
            id: 2,
            internalName: 'test',
            pageSlug: '/test',
            pageTitle: 'Test',
            pageContent: [
                {
                    id: 1,
                    name: 'Test',
                    content: `
                        <div>
                            ASDASDASD
                        </div>
                    `,
                    isPublished: true,
                }
            ],
            isHome: true,
            metaDescription: 'ASDASDASDASDASDASD',
            metaKeywords: 'test, fight, me',
            metaRobots: 'test',
            otherMetaData: '<meta name="author" content="Joenn Aquilino" />',
            isPublished: true,
        }
    ];

    res.status(200).json(dummyData);
}