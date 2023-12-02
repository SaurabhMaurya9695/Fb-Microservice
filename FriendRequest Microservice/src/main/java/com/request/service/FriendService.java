package com.request.service;

import com.request.entity.FriendRequest;
import com.request.response.ApiResponse;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface FriendService {
    //create FriendRequest
    FriendRequest createRequest(FriendRequest friendRequest);

    //delete FriendRequest
    ApiResponse deleteFriendRequest(Integer friendId);

    //get all request by senderFromId
    List<FriendRequest> getAllFRBySenderFromId(String senderFromId);

    //get Single FR
    FriendRequest getSingleRequest(Integer friendId);

    //getAllRequest
    List<FriendRequest> getAllRequest();

    FriendRequest updateRequest(Integer friendId, String status);


    List<FriendRequest> getByStatus(String status);

    ApiResponse deleteAllRequestOfUser(String userId);
}
