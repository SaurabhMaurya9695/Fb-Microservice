package com.post.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer postId;
    private String image;
    private String description ;
    private String privacy = "Everyone" ; // Friends  , Everyone
    private Long likeCnt ;
    private Date date = new Date();

    private String userId;

}
