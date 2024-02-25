import { getSingleBlog } from '@/api/getSingleBlog';
import BlogDetailsPage from '@/components/BlogDetailsPage/BlogDetailsPage';
import React from 'react';

const page = async() => {
  
    return (
        <div>
            <BlogDetailsPage/>
        </div>
    );
};

export default page;