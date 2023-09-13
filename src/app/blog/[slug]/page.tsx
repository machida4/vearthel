import { getAllBlogs, getBlog } from '@/app/lib/api';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { NextPage } from 'next';

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const allBlogs = await getAllBlogs();

  return allBlogs.map((blog) => ({
    slug: blog.fields.slug,
  }));
};

type Props = { params: { slug: string } };

export const BlogPage: NextPage<Props> = async ({ params }) => {
  const blog = await getBlog(params.slug);

  return (
    <main>
      {blog.fields.title}
      <div className="content">
        {blog.fields.body ? documentToReactComponents(blog.fields.body) : <></>}
      </div>
    </main>
  );
};

export default BlogPage;
