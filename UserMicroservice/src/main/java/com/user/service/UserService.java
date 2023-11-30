package com.user.service;

import com.user.controller.Auth;
import com.user.dto.UserDto;
import com.user.response.ApiResponse;

import java.util.List;

public interface UserService {
    //create User
    public UserDto createUser(UserDto userDto);


    //getSingleUser
    public UserDto getUserById(String userId);

    //getAllUser
    public List<UserDto> getAllUser();

    //UpdateUser
    public UserDto updateUser(UserDto userDto , String userId);

    //deleteUser
    public ApiResponse deleteUser(String userId);

    ApiResponse authenticate(Auth auth);
}
