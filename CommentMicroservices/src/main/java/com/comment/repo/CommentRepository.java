package com.comment.repo;

import com.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
    List<Comment> findAllByPostId(Integer postId) ;

    Optional<List<Comment>> findAllByPostIdAndCommentedBy(Integer postId , String commentedBy);
}
