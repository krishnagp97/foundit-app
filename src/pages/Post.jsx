import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    document.title = "Foundit | Post";
  }, []);

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/all-posts");
      }
    });
  };

  return post ? (
    <div className="py-6 sm:py-8">
      <Container>

       
        <div className="
          w-full 
          flex justify-center 
          mb-6 
          relative 
          border 
          rounded-xl 
          p-2
        ">
          <img
            src={appwriteService.getFileView(post.featuredImage)}
            alt={post.title}
            className="
              w-full 
              max-w-4xl 
              max-h-[420px] 
              object-cover 
              rounded-xl
            "
          />

         
          {isAuthor && (
            <div className="
              absolute 
              right-3 top-3 
              sm:right-6 sm:top-6 
              flex gap-2
            ">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500">
                  Edit
                </Button>
              </Link>

              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>

        
        <div className="w-full mb-4">
          <h1 className="
            text-xl sm:text-2xl md:text-3xl 
            font-bold
          ">
            {post.title}
          </h1>
        </div>

        
        <div className="
          prose 
          prose-sm sm:prose-base lg:prose-lg 
          max-w-none
        ">
          {parse(post.content)}
        </div>

      </Container>
    </div>
  ) : null;
}
