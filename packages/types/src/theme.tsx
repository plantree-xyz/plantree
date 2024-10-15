import { PropsWithChildren } from 'react'

export type Site = {
  id: string
  name: string
  description: string
  about: string
  logo: string | null
  font: string
  image: string | null
  socials: Record<string, any>
  config: Record<string, any>
  subdomain: string | null
  customDomain: string | null
  memberCount: number
  postCount: number
  message404: string | null
  themeName: string
  symbolName: string | null
  spaceAddress: string | null
  createdAt: Date
  updatedAt: Date
}

export enum PostType {
  ARTICLE = 'ARTICLE',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  AUDIO = 'AUDIO',
  NFT = 'NFT',
  FIGMA = 'FIGMA',
}

export enum GateType {
  FREE = 'FREE',
  MEMBER_ONLY = 'MEMBER_ONLY',
}

export enum PostStatus {
  PUBLISHED = 'PUBLISHED',
  DRAFT = 'DRAFT',
  ARCHIVED = 'ARCHIVED',
}

export type Post = {
  id: string
  title: string
  description: string
  content: string
  slug: string
  type: PostType
  gateType: GateType
  readingTime: {
    text: string
    minutes: number
    time: number
    words: number
  }
  status: PostStatus
  image: string | null
  publishedAt: Date
  archivedAt: Date
  createdAt: Date
  updatedAt: Date
  userId: string
  postTags: PostTag[]
}

export type PostTag = {
  id: string
  tagId: string
  tag: Tag
}

export type Tag = {
  id: string
  name: string
  color: string
  postCount: string
}

export interface HomeLayoutProps {
  path: string
}

export interface PostLayoutProps {}

export interface HomeProps {
  posts: Post[]
}

export interface AboutProps {}

export interface PostProps {
  isGated: boolean
  post: Post
}

export type Theme = {
  HomeLayout?: ({ children }: PropsWithChildren<HomeLayoutProps>) => JSX.Element
  PostLayout?: ({ children }: PropsWithChildren<PostLayoutProps>) => JSX.Element
  Home?: ({ posts }: HomeProps) => JSX.Element
  Post?: ({ post, isGated }: PostProps) => JSX.Element
  About?: ({}: AboutProps) => JSX.Element
}
