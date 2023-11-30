package com.request.repo;


import com.request.entity.FriendRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RequestRepo extends JpaRepository<FriendRequest , Integer> {
    List<FriendRequest> findAllBySenderFromId(String senderFromId);
    List<FriendRequest> findAllByStatus(String status);
}