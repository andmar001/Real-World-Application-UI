export interface BlogPost {
  id: number;
  title: string;
  shortDescription: string;
  content: string;
  featuredUImageUrl: string;
  urlHandle: string;
  author: string;
  publishedDate: Date;
  isVisible: boolean;
}
