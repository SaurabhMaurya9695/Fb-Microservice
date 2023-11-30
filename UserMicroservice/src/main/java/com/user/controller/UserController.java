package com.user.controller;


import com.user.dto.UserDto;
import com.user.response.ApiResponse;
import com.user.service.UserService;
import jakarta.validation.Valid;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/users")
@RestController
public class UserController {

    @Autowired
    private UserService userService ;
    //create User
    @PostMapping("/")
    public ResponseEntity<UserDto> createUser(@Valid @RequestBody UserDto userDto){
        UserDto user = this.userService.createUser(userDto);
        return new ResponseEntity<UserDto>(user , HttpStatus.CREATED);
    }

    //getAllUser
    @GetMapping("/")
    public ResponseEntity<List<UserDto>> getAllUser(){
        return ResponseEntity.ok(this.userService.getAllUser());
    }

    //getSingleUser
    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> getUser(@PathVariable("userId") String userId){
        return ResponseEntity.ok(this.userService.getUserById(userId));
    }

    //deleteUser
    @DeleteMapping ("/{userId}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable("userId") String userId){
        return ResponseEntity.ok(this.userService.deleteUser(userId));
    }

    //updateUser
    @PutMapping("/{userId}")
    public ResponseEntity<UserDto> updateUser(@Valid @RequestBody UserDto userDto ,@PathVariable("userId") String userId){
        return ResponseEntity.ok(this.userService.updateUser(userDto , userId));
    }

    @PostMapping("/auth")
    public ResponseEntity<ApiResponse> authUser(@RequestBody Auth auth){
        return ResponseEntity.ok(this.userService.authenticate(auth));
    }



}
