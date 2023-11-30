package com.user.entity;


import com.user.others.FriendRequest;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "User")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    private String userId;
    private String username;
    @Column(name = "email" , unique = true)
    private String email;  // end with com ,  in , org
    private Date dob;  // at least 13 years old
    private String gender ;
    private String password; //secure min length 8 and max length 16
    private String bio ;

    @Transient
    private List<FriendRequest> friendRequest ;

}
