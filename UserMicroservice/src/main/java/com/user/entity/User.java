package com.user.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.util.Date;

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

}
