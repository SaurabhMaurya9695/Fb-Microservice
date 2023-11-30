package com.user.feignclient;


import com.user.others.FriendRequest;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "REQUEST-SERVICE" )
public interface FriendRequestService {

    // path is : localhost:port/REQUEST-SERVICE/by/id
    @GetMapping("/request/by/{senderFromId}")
    List<FriendRequest> getAllFRBySenderFromId(@PathVariable("senderFromId") String senderFromId);
}
