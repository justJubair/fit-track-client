const getAllBlogs = async () => {
  const allBlogs = await fetch("http://localhost:5000/api/v1/all-blogs");
  return allBlogs.json();
};

export default getAllBlogs;
