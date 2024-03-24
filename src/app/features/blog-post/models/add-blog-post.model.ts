export interface AddBlogPost {
  title: string;
  shortDescription: string;
  content: string;
  FeaturedImageUrl: string;
  urlHandler: string;
  author: string;
  publishedDate: Date;
  isVisible: boolean;
}
