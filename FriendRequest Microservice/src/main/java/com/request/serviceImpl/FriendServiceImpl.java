package com.request.serviceImpl;


import com.request.entity.FriendRequest;
import com.request.exception.ResourceNotFoundException;
import com.request.repo.RequestRepo;
import com.request.response.ApiResponse;
import com.request.service.FriendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FriendServiceImpl implements FriendService {

    @Autowired
    private RequestRepo requestRepo;

    @Override
    public FriendRequest createRequest(FriendRequest friendRequest) {
        friendRequest.setStatus("SEND");
        return this.requestRepo.save(friendRequest);
    }

    @Override
    public ApiResponse deleteFriendRequest(Integer friendId) {
        FriendRequest x = this.requestRepo.findById(friendId).
                orElseThrow(() -> new ResourceNotFoundException("Friend Id Does'nt Exist"));
        this.requestRepo.delete(x);
        return ApiResponse.builder().code(HttpStatus.OK).message("Deleted Successfully").build() ;
    }

    @Override
    public List<FriendRequest> getAllFRBySenderFromId(String senderFromId) {
        List<FriendRequest> friendRequestList = this.requestRepo.findAllBySenderFromId(senderFromId);
        return friendRequestList;
    }

    @Override
    public FriendRequest getSingleRequest(Integer friendId) {
        return this.requestRepo.findById(friendId)
                .orElseThrow(() -> new ResourceNotFoundException("Friend Id Does'nt Exist"));
    }

    @Override
    public List<FriendRequest> getAllRequest() {
        return this.requestRepo.findAll();
    }

    @Override
    public FriendRequest updateRequest(Integer friendId, String status) {
        FriendRequest request = this.requestRepo.findById(friendId)
                .orElseThrow(() -> new ResourceNotFoundException("Friend Id Does'nt Exist"));
        request.setStatus(status);
        FriendRequest friendRequest = this.requestRepo.save(request);
        return friendRequest;
    }

    @Override
    public List<FriendRequest> getByStatus(String status) {
        return this.requestRepo.findAllByStatus(status);
    }
}
