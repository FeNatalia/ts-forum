interface PostItem {
    title: string,
    description: string,
    postId: string,
    _id?: string,
}

interface PostComment {
    title: string,
    description: string,
    itemId: string,
    owner: string,
    _id?: string,
}

interface Posts extends Array<PostItem>{}
interface Comments extends Array<PostComment>{}

export type { PostItem, PostComment, Posts, Comments };