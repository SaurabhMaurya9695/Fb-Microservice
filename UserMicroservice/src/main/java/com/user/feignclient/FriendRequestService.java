package com.user.feignclient;


import com.user.others.FriendRequest;
import com.user.response.ApiResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "REQUEST-SERVICE" )
public interface FriendRequestService {

    // path is : localhost:port/REQUEST-SERVICE/by/id
    @GetMapping("/request/by/{senderFromId}")
    List<FriendRequest> getAllFRBySenderFromId(@PathVariable("senderFromId") String senderFromId);

    //delete All Friend request For user
    @DeleteMapping("/request/clear-request/user/{userId}")
    ApiResponse deleteAllRequestOfUser(@PathVariable("userId") String userId);
}
