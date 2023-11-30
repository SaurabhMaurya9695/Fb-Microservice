package com.request.controller;

import com.request.entity.FriendRequest;
import com.request.response.ApiResponse;
import com.request.service.FriendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/request")
@RestController
public class FriendRequestController {

    @Autowired
    private FriendService friendService;

    //create Request
    @PostMapping("/")
    public ResponseEntity<FriendRequest> createRequest(@RequestBody FriendRequest request){
        return ResponseEntity.ok(this.friendService.createRequest(request));
    }

    //delete FriendRequest
    @DeleteMapping("/{friendId}")
    public ResponseEntity<ApiResponse> deleteRequest(@PathVariable("friendId") Integer friendId){
        return ResponseEntity.ok(this.friendService.deleteFriendRequest(friendId));
    }

    //get all request by senderFromId
    @GetMapping("/by/{senderFromId}")
    public ResponseEntity<List<FriendRequest>> getAllRequestBySenderFromId(@PathVariable("senderFromId") String senderFromId){
        return ResponseEntity.ok(this.friendService.getAllFRBySenderFromId(senderFromId));
    }

    //get Single FR
    @GetMapping("/{friendId}")
    public ResponseEntity<FriendRequest> getRequestById
                                                (@PathVariable("friendId") Integer friendId){
        return ResponseEntity.ok(this.friendService.getSingleRequest(friendId));
    }

    //get all Request
    @GetMapping("/")
    public ResponseEntity<List<FriendRequest>> getAllRequest(){
        return ResponseEntity.ok(this.friendService.getAllRequest());
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<FriendRequest>> getAllByStatus(@PathVariable("status") String status){
        return ResponseEntity.ok(this.friendService.getByStatus(status));
    }

    //updateStatus OF request

    @PutMapping("/{friendId}")
    public  ResponseEntity<FriendRequest> updateStatus(@PathVariable("friendId") Integer  friendId ,
                                                        @RequestParam("status") String status) {
        return ResponseEntity.ok(this.friendService.updateRequest(friendId , status));
    }


}
