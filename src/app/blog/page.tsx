import { NextPage } from 'next';
import Link from 'next/link';
import { buildClient, getAllBlogs } from '../lib/api';
import { formatDate } from '../lib/utils';

const client = buildClient();

const BlogPage: NextPage = async () => {
  const allBlogs = await getAllBlogs();

  return (
    <div>
      <div className="mb-8">
        <h1>Blog</h1>
      </div>

      <ul>
        {allBlogs.map((blog) => (
          <li key={blog.fields.slug} className="mb-4">
            <Link href={`/blog/${blog.fields.slug}`}>
              <h2 className="text-blue-600 hover:text-blue-800 text-xl font-bold mb-2">
                {blog.fields.title}
              </h2>
            </Link>
            <div className="">
              <p>
                <time dateTime={blog.sys.createdAt}>
                  {formatDate(blog.sys.createdAt)}
                </time>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
