package com.user.feignclient;


import com.user.others.Post;
import com.user.response.ApiResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "POST-SERVICE" )
public interface PostService {

    @GetMapping("/post/users/{userId}")
    List<Post> getAllPostByUser(@PathVariable("userId") String userId);


    @DeleteMapping("/post/clear-post/users/{userId}")
    ApiResponse deleteAllPostOfUser(@PathVariable("userId") String userId);
}
