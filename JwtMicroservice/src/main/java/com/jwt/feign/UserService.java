package com.jwt.feign;

import com.jwt.dto.UserDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "USER-SERVICE")
public interface UserService {

    //getUserById
    @GetMapping("/users/{userId}")
    UserDto getUser(@PathVariable("userId") String userId);
}
