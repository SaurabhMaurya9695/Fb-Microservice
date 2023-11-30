package com.request.entity;

import jakarta.persistence.*;
import lombok.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "friendRequest" )
public class FriendRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer friendId;
    @Column(name = "userId")
    private String senderFromId;
    private String senderToId;
    private String status; // send means sended ...accepted means accept.
}
