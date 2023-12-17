package com.jwt.dto;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Comment {
    private Integer commentId;
    private Integer postId;
    private String comments;
    private String commentedBy;
}