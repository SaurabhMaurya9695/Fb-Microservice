package com.comment.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer commentId;
    private Integer postId;
//    private List<Replies> repliesList = new ArrayList<>();
    private String comments;
    private String commentedBy;

}
