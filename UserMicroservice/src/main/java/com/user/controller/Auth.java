package com.user.controller;


import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Auth {
    private String email;
    private String password;
}
