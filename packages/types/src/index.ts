import { PropsWithChildren } from 'react'

enum AuthType {
  GOOGLE = 'GOOGLE',
  REOWN = 'REOWN',
  PRIVY = 'PRIVY',
}

enum StorageProvider {
  IPFS = 'IPFS',
  R2 = 'R2',
  VERCEL_BLOB = 'VERCEL_BLOB',
  SUPABASE_STORAGE = 'SUPABASE_STORAGE',
}

enum SiteMode {
  BASIC = 'BASIC',
  NOTE_TAKING = 'NOTE_TAKING',
}

export interface Socials {
  farcaster: string
  x: string
  mastodon: string
  github: string
  facebook: string
  youtube: string
  linkedin: string
  threads: string
  instagram: string
  medium: string
  [key: string]: string
}

export type Site = {
  id: string
  name: string
  description: string
  about: any
  logo: string | null
  spaceId: string | null
  font: string
  image: string | null
  mode: SiteMode
  privyAppId: string
  privyAppSecret: string
  authType: AuthType
  authConfig?: {
    [key: string]: string
  }
  storageProvider: StorageProvider
  storageConfig?: {
    vercelBlobToken: string
    [key: string]: string
  }
  socials: Socials
  config: Record<string, any>
  themeConfig: Record<string, any>
  subdomain: string | null
  customDomain: string | null
  memberCount: number
  postCount: number
  message404: string | null
  themeName: string
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
  NOTE = 'NOTE',
}

export enum GateType {
  FREE = 'FREE',
  PAID = 'PAID',
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
  content: any
  slug: string
  cid: string
  nodeId: string
  creationId: number
  type: PostType
  gateType: GateType
  readingTime: {
    text: string
    minutes: number
    time: number
    words: number
  }
  status: PostStatus
  featured: boolean
  collectible: boolean
  image: string | null
  commentCount: number
  publishedAt: Date
  archivedAt: Date
  createdAt: Date
  updatedAt: Date
  userId: string
  postTags: PostTag[]
  user: User
}

export type User = {
  id: string
  name: string
  displayName: string
  ensName: string
  email: string
  image: string | null
  cover: string
  bio: string
  about: string
  accounts: Array<{
    id: string
    providerType: string
    providerAccountId: string
    providerInfo: any
    refreshToken: string
    accessToken: string
  }>
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

interface Attrs {
  readonly [attr: string]: any
}
