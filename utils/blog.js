import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

const markdownToHtml = async (markdown) => {
  const result = await remark()
    .use(html)
    .use(remarkGfm)
    .process(markdown);
  
  return result.toString();
}

const getDir = (path) => join(process.cwd(), path);
const BLOG_DIR = getDir("/_posts");

const getFileNames = (dir) => {
  return fs.readdirSync(dir);
}

const getBlogFileNames = () => {
  return getFileNames(BLOG_DIR);
}

const getItemInPath = (filePath) => {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const {data, content} = matter(fileContent);
  return {...data, content};
}

const getBlog = (name) => {
  const blog = getItemInPath(join(BLOG_DIR, name));
  blog.slug = name.replace(/\.md$/, "");
  return blog;
}

const getBlogBySlug = async (slug) => {
  const fileName = slug + '.md';
  const blog = getBlog(fileName);
  blog.content = await markdownToHtml(blog.content);
  return blog;
}

const getBlogs = () => {
  const names = getBlogFileNames();

  const items = names.map(getBlog);
  return items;
}

async function getInitialBlogs() {
  const blogs = getBlogs();
  return blogs;
}

export {
  getBlogFileNames,
  getBlogs,
  getBlogBySlug,
  getInitialBlogs
}