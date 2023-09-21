import { getAllBlogs, getBlog } from '@/app/lib/api';
import { formatDate } from '@/app/lib/utils';
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

const BlogEntryPage: NextPage<Props> = async ({ params }) => {
  const blog = await getBlog(params.slug);

  return (
    <article>
      <h1 className="font-bold text-3xl tracking-wide">{blog.fields.title}</h1>
      <div className="">
        <p>
          <time dateTime={blog.sys.createdAt}>
            {formatDate(blog.sys.createdAt)}
          </time>
        </p>
      </div>
      <div className="content">
        {blog.fields.body ? documentToReactComponents(blog.fields.body) : <></>}
      </div>
    </article>
  );
};

export default BlogEntryPage;
