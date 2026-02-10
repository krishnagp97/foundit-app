import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: "active",
        },
    });

    const navigate = useNavigate();
    const userData =  useSelector((state) => state.auth.userData);
    const submit = async (data) => {
        
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id,{
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col lg:flex-row gap-4">

 
  <div className="w-full lg:w-2/3 px-1">
    <Input
      label="Title :"
      placeholder="Title"
      className="mb-4"
      {...register("title", { required: true })}
    />

    <RTE
      label="Content :"
      name="content"
      control={control}
      defaultValue={getValues("content")}
    />
  </div>

 
  <div className="w-full lg:w-1/3 px-1">
    <Input
      label="Image :"
      type="file"
      className="mb-4"
      accept="image/png, image/jpg, image/jpeg, image/gif"
      {...register("image", { required: !post })}
    />

    {post && (
      <div className="w-full mb-4">
        <img
          src={appwriteService.getFileView(post.featuredImage)}
          alt={post.title}
          className="rounded-lg w-full object-cover max-h-64"
        />
      </div>
    )}

    <Button
      type="submit"
      bgColor={post ? "bg-green-500" : undefined}
      className="w-full mt-2"
    >
      {post ? "Update" : "Submit"}
    </Button>
  </div>

</form>

    );
}