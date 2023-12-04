package com.comment.ServiceImpl;

import com.comment.entity.Comment;
import com.comment.repo.CommentRepository;
import com.comment.response.ApiResponse;
import com.comment.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;
    @Override
    public Comment createComment(Comment comment) {
        return this.commentRepository.save(comment);
    }

    @Override
    public List<Comment> getAllComment() {
        return this.commentRepository.findAll();
    }

    @Override
    public List<Comment> getAllCommentOfPost(Integer postId) {
        return this.commentRepository.findAllByPostId(postId);
    }

    @Override
    public ApiResponse deleteComment(Integer commentId) {
        Comment comment = this.commentRepository.findById(commentId).orElseThrow(() -> new RuntimeException("Comment Id Not Find"));
        this.commentRepository.delete(comment);
        return ApiResponse.builder().code(HttpStatus.OK).message("Comment Deleted SuccessFully").build();
    }

    @Override
    public Comment getCommentById(Integer commentId) {
        return this.commentRepository.findById(commentId).orElseThrow(() ->
                new RuntimeException("Comment Id Not Found"));
    }


    @Override
    public Comment updateComment(Integer commentId , Comment comment){
        Comment comment1 = this.commentRepository.findById(commentId).orElseThrow(() ->
                new RuntimeException("Comment Id Not Found"));
        comment1.setComments(comment.getComments());
        return this.commentRepository.save(comment1);
    }

    @Override
    public List<Comment> getAllCommentByUserOnPost(Integer postId , String commentedBy){
//        verify first if these exist or not
        List<Comment> commentList = this.commentRepository.findAllByPostIdAndCommentedBy(postId, commentedBy).orElseThrow(() ->
                new RuntimeException("Some Error In postId or UserId"));
        return commentList;
    }
}
