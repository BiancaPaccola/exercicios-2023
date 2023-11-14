export type CommentType = {
    subject: string
    author: string;
    comment: string;
    likes: number;
    replys: ReplyType[] | [],
    isAvaliabe: boolean;
    isCommentActive: boolean
}

export type ReplyType = {
    author: string;
    comment: string;
    userType: string;
}