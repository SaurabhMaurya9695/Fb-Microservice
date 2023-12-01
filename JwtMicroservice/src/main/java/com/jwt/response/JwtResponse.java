package com.jwt.response;

import com.jwt.dto.UserDto;
import com.jwt.entity.User;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class JwtResponse {
    private String jwttoken;
    private UserDto user;
}
