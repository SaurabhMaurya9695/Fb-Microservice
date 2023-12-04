package com.comment.controller;


import com.comment.entity.Comment;
import com.comment.response.ApiResponse;
import com.comment.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/comment")
@RestController
public class CommentController {

    @Autowired
    private CommentService commentService;

    //create Comment
    @PostMapping("/")
    public ResponseEntity<?> createComment(@RequestBody Comment comment){
        return new ResponseEntity<>(this.commentService.createComment(comment) , HttpStatus.CREATED);
    }


    //getAllComment
    @GetMapping("/")
    public ResponseEntity<List<Comment>> getAllComment(){
        return new ResponseEntity<List<Comment>>(this.commentService.getAllComment(), HttpStatus.OK);
    }

    //getAllCommentOfPost
    @GetMapping("/by-post/{postId}")
    public ResponseEntity<List<Comment>> getAllCommentOfPost(@PathVariable("postId") Integer postId){
        return new ResponseEntity<List<Comment>>(this.commentService.getAllCommentOfPost(postId), HttpStatus.OK);
    }

    //deleteComment
    @DeleteMapping("{commentId}")
    public ResponseEntity<ApiResponse> deleteComment(@PathVariable("commentId") Integer commentId){
        return new ResponseEntity<ApiResponse>(this.commentService.deleteComment(commentId), HttpStatus.OK);
    }

    @GetMapping("{commentId}")
    public ResponseEntity<Comment> getComment(@PathVariable("commentId") Integer commentId){
        return new ResponseEntity<Comment>(this.commentService.getCommentById(commentId), HttpStatus.OK);
    }

    @PutMapping("/{commentId}")
    public ResponseEntity<Comment> updateComment(@PathVariable("commentId") Integer commentId ,
                                                 @RequestBody Comment comment){
        return new ResponseEntity<Comment>(this.commentService.updateComment(commentId, comment), HttpStatus.OK);
    }

    @GetMapping("/{postId}/user/{commentedBy}")
    public ResponseEntity<List<Comment>> getCommentOnPostByUser(@PathVariable("postId") Integer postId ,
                                                          @PathVariable("commentedBy") String commentedBy){
        return new ResponseEntity<List<Comment>>(this.commentService.getAllCommentByUserOnPost(postId,commentedBy), HttpStatus.OK);
    }



}
