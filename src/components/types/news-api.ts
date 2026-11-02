export interface NewsSource {
    id: string | null;
    name: string;
}

export interface SourcesResponse {
    status: string;
    sources: NewsSource[];
}

export interface NewsArticle {
    source: NewsSource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface NewsApiResponse {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}
