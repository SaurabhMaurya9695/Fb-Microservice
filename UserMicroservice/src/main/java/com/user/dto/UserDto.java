package com.user.dto;

import com.user.others.FriendRequest;
import com.user.others.Post;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.Date;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {

    private String userId;
    private String username;
    @Pattern(regexp = "^[a-z0-9][-a-z0-9._]+@([-a-z0-9]+\\.)+[a-z]{2,5}$" , message = "Invalid Email")
    @NotBlank
    private String email;  // end with com ,  in , org
    private Date dob = new Date();  // at least 13 years old
    private String gender ;
    @Size(min = 8 , max = 16 , message = "Please Enter Your password in the range of 8 to 16")
    @NotBlank(message = "Password is required")
    private String password;
    @NotBlank(message = "Please Write Something about Yourself")
    private String bio ;

    private String image ;

    private List<FriendRequest> friendRequest ;
    private List<Post> post ;
}
