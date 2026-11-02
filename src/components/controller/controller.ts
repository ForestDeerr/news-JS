import { NewsApiResponse, SourcesResponse } from '../types/news-api';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: (data: SourcesResponse) => void): void {
        super.getResp<SourcesResponse>(
            {
                endpoint: 'mocks/sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: NewsApiResponse) => void): void {
        let target = e.target;
        const newsContainer = e.currentTarget;

        if (!(newsContainer instanceof HTMLElement)) {
            return;
        }

        while (target !== newsContainer) {
            if (!(target instanceof Element)) {
                return;
            }

            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (!sourceId) {
                    return;
                }
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<NewsApiResponse>(
                        {
                            endpoint: 'mocks/everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }

            target = target.parentNode;
        }
    }
}

export default AppController;
