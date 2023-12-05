package com.comment.ServiceImpl;

import com.comment.entity.Comment;
import com.comment.repo.CommentRepository;
import com.comment.response.ApiResponse;
import com.comment.service.CommentService;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    String s = "comments";

    @Autowired
    private KafkaTemplate<String,Comment> kafkaTemplate;

    KafkaConsumer<String, Comment> consumer ;


    @Override
    public Comment createComment(Comment comment) {
        Comment comment1 = this.commentRepository.save(comment);
        Message<Comment> message = MessageBuilder
                .withPayload(comment1)
                .setHeader(KafkaHeaders.TOPIC, "comments")
                .build();
        kafkaTemplate.send(message);
        return comment;
    }

    @KafkaListener(topics = "comments" , groupId = "comment-group")
    public void getMessage(Comment comment){
        log.info("Comment is {} :" ,comment.toString());
        System.out.println(comment.getComments());
    }



    @Override
    public List<Comment> getAllComment() {
        List<Comment> all = this.commentRepository.findAll();
//        List<Comment> all = new ArrayList<>();
//        ConsumerRecords<String, Comment> messages = this.consumer.poll(Duration.ofDays(100000L));
//        for (ConsumerRecord<String, Comment> record : messages) {
//            all.add(record.value());
//        }
        return all ;
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
