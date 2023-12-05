package com.post.feignClient;

import com.post.entity.Comment;
import com.post.response.ApiResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "COMMENT-SERVICE" )
public interface CommentService {

    @GetMapping("/comment/by-post/{postId}")
    List<Comment> getAllCommentOfPost(@PathVariable("postId") Integer postId);

    @DeleteMapping("/comment/{commentId}")
    ApiResponse deleteComment(@PathVariable("commentId") Integer commentId);
}
