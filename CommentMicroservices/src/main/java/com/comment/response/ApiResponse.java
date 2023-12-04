package com.comment.response;

import lombok.*;
import org.springframework.http.HttpStatus;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class ApiResponse {

    private String message;
    private HttpStatus code;
}
