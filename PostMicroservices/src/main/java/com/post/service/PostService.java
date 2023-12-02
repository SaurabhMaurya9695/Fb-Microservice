package com.post.service;

import com.post.entity.Post;
import com.post.response.ApiResponse;

import java.util.List;

public interface PostService {

    //create A post
    Post createPost(Post post);

    // getAllPost
    List<Post> getAllPost();

    //getSinglePost
    Post getSinglePost(Integer postId) throws Exception;

    // update Likes
    Post updateLikes(Integer postId , Long likeCnt) throws Exception;

    //update post's
    Post updatePost(Integer postId , Post post) throws Exception;


    //deletePost
    ApiResponse deletePost(Integer postId) throws Exception;

    //getAllPostByUser
    List<Post> getAllPostByUser(String userId) ;

   ApiResponse deleteAllPostOfUser(String userId) ;

}
