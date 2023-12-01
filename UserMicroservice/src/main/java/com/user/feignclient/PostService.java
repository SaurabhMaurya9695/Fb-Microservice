package com.user.feignclient;


import com.user.others.Post;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "POST-SERVICE" )
public interface PostService {

    @GetMapping("/users/{userId}")
    List<Post> getAllPostByUser(@PathVariable("userId") String userId);
}
