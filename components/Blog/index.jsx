import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";


const Blog = ({ blogs }) => {
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 mb-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
        
        <Link href={"/blog"} className="mt-8 mx-auto block">
          <button
            className="block mx-auto duration-80 w-fit mb-4 cursor-pointer rounded-md border border-transparent bg-primary py-3 px-10 text-center text-base font-medium text-white outline-none transition ease-in-out hover:bg-opacity-80 hover:shadow-signUp focus-visible:shadow-none"
          >
            Read All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
