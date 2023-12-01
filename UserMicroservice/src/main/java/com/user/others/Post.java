package com.user.others;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Post {
    private Integer postId;
    private String image;
    private String description ;
    private String privacy ;
    private Long likeCnt ;
    private Date date;
    private String userId;
}
