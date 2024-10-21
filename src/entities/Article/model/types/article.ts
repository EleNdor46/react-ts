import { User } from "entities/User";

export enum ArticleTypeBlock {
    CODE = "CODE",
    IMAGE = "IMAGE",
    TEXT = "TEXT",
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleTypeBlock;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleTypeBlock.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleTypeBlock.IMAGE;
    src: string;
    title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleTypeBlock.TEXT;
    paragraphs: string[];
    title?: string;
}

export type ArticleBlock =
    | ArticleCodeBlock
    | ArticleImageBlock
    | ArticleTextBlock;

export enum ArticleView {
    BIG = "BIG",
    SMALL = "SMALL",
}

export enum ArticleType {
    "IT" = "IT",
    "SCIENCE" = "SCIENCE",
    ECONOMICS = "ECONOMICS",
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: Array<ArticleType>;
    user: User;
    blocks: ArticleBlock[];
}
