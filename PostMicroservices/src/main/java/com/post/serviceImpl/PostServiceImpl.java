package com.post.serviceImpl;

import com.post.entity.Post;
import com.post.repo.PostRepo;
import com.post.response.ApiResponse;
import com.post.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepo postRepo ;

    @Override
    public Post createPost(Post posts) {
        return this.postRepo.save(posts);
    }

    @Override
    public List<Post> getAllPost() {
        return this.postRepo.findAll();
    }

    @Override
    public Post getSinglePost(Integer postId) throws Exception {
        return this.postRepo.findById(postId).orElseThrow(() -> new Exception("PostId Not Found"));
    }

    @Override
    public Post updateLikes(Integer postId, Long likeCnt) throws Exception {
        Post found = this.postRepo.findById(postId).orElseThrow(() -> new Exception("PostId Not Found"));
        found.setLikeCnt(likeCnt);
        return this.postRepo.save(found);
    }

    @Override
    public Post updatePost(Integer postId, Post post) throws Exception {
        Post found = this.postRepo.findById(postId).orElseThrow(() -> new Exception("PostId Not Found"));
        found.setLikeCnt(post.getLikeCnt());
        found.setImage(post.getImage());
        found.setPrivacy(post.getPrivacy());
        found.setDescription(post.getDescription());
        found.setDate(post.getDate());
        return this.postRepo.save(found);
    }

    @Override
    public ApiResponse deletePost(Integer postId) throws Exception {
        Post found = this.postRepo.findById(postId).orElseThrow(() -> new Exception("PostId Not Found"));
        this.postRepo.delete(found);
        return ApiResponse.builder().code(HttpStatus.OK).message("Post Deleted Successfully").build();
    }

    @Override
    public List<Post> getAllPostByUser(String userId) {
        return this.postRepo.findAllByUserId(userId);
    }

    @Override
    public ApiResponse deleteAllPostOfUser(String userId) {
        List<Post> allByUserId = this.postRepo.findAllByUserId(userId);
        List<Object> list = allByUserId.stream().map(post -> {
            this.postRepo.deleteById(post.getPostId());
            return null;
        }).collect(Collectors.toList());
        return ApiResponse.builder().code(HttpStatus.OK).message("Post Deleted for User " + userId + " Successfully ").build();
    }


}
