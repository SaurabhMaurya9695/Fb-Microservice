package com.comment.service;

import com.comment.entity.Comment;
import com.comment.response.ApiResponse;

import java.util.List;

public interface CommentService {

//    Create Comment
    Comment createComment(Comment comment);

    //getAllComment
    List<Comment> getAllComment();

    //getAllCommentOfPostId
    List<Comment> getAllCommentOfPost(Integer postId);

    //delete Comment by Id
    ApiResponse deleteComment(Integer commentId);

    //get Specific Comment
    Comment getCommentById(Integer commentId);

    Comment updateComment(Integer commentId , Comment comment);

    List<Comment> getAllCommentByUserOnPost(Integer postId, String commentedBy);
}
