package com.post.controller;

import com.post.entity.Post;
import com.post.response.ApiResponse;
import com.post.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    private PostService postService;

    //create Post
    @PostMapping("/")
    public ResponseEntity<Post>  createPost(@RequestBody Post post){
        Post post1 = this.postService.createPost(post);
        return new ResponseEntity<>(post1 , HttpStatus.CREATED);
    }

    //getAllPost
    @GetMapping("/")
    public ResponseEntity<List<Post>>  getAllPost(){
        List<Post> allPost = this.postService.getAllPost();
        return new ResponseEntity<>(allPost , HttpStatus.OK);
    }

    //GetSinglePost
    @GetMapping("/{postId}")
    public ResponseEntity<Post>  getSinglePost(@PathVariable("postId") Integer postId) throws Exception {
        Post singlePost = this.postService.getSinglePost(postId);
        return new ResponseEntity<>(singlePost , HttpStatus.OK);
    }

    //updateLikes
    @PutMapping("/updateLike/{postId}")
    public ResponseEntity<Post>  updatePostLikeCnt(@PathVariable("postId") Integer postId ,
                                              @RequestParam("likeCnt") Long likeCnt) throws Exception {
        System.out.println(likeCnt);
        Post updateLikes = this.postService.updateLikes(postId, likeCnt);
        return new ResponseEntity<>(updateLikes , HttpStatus.OK);
    }

    @PutMapping("/{postId}")
    public ResponseEntity<Post>  updatePost(@PathVariable("postId") Integer postId ,
                                                   @RequestBody Post post) throws Exception {
        Post updatePost = this.postService.updatePost(postId,post);
        return new ResponseEntity<>(updatePost , HttpStatus.OK);
    }

    //deletePost
    @DeleteMapping("/{postId}")
    public ResponseEntity<ApiResponse>  deletePost(@PathVariable("postId") Integer postId) throws Exception {
        ApiResponse response = this.postService.deletePost(postId);
        return new ResponseEntity<>(response , HttpStatus.OK);
    }

    @GetMapping("/users/{userId}")
    public ResponseEntity<List<Post>>  postByUser(@PathVariable("userId") String userId) throws Exception {
        List<Post> postByUser = this.postService.getAllPostByUser(userId);
        return new ResponseEntity<>(postByUser , HttpStatus.OK);
    }

}

