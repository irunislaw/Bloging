export interface Blog {
    _id: string,
    title: string,
    tags: string[],
    views: number,
    likes: number,
    shortContent: string,
    authorName: string,
    authorImage: string,
    createdAt: string,
    updatedAt: string
}
