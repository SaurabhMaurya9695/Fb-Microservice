package com.user.others;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class FriendRequest {
    private Integer friendId;
    private String senderFromId;
    private String senderToId;
    private String status;
}
