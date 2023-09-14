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

export const BlogEntryPage: NextPage<Props> = async ({ params }) => {
  const blog = await getBlog(params.slug);
  const formattedDate = new Date(blog.sys.createdAt).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    },
  );

  return (
    <article>
      <h1 className="font-bold text-3xl tracking-wide">{blog.fields.title}</h1>
      <div className="">
        <p>
          <time dateTime={blog.sys.createdAt}>{formattedDate}</time>
        </p>
      </div>
      <div className="content">
        {blog.fields.body ? documentToReactComponents(blog.fields.body) : <></>}
      </div>
    </article>
  );
};

export default BlogEntryPage;
