package com.user.serviceimpl;

import com.user.controller.Auth;
import com.user.dto.UserDto;
import com.user.entity.User;
import com.user.exception.ResourceNotFoundException;
import com.user.repo.UserRepository;
import com.user.response.ApiResponse;
import com.user.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;
    @Override
    public UserDto createUser(UserDto userDto) {
        String userId = UUID.randomUUID().toString();
        userDto.setUserId(userId);
        User user = modelMapper.map(userDto, User.class);
        User saved =  this.userRepository.save(user);
        return modelMapper.map(saved , UserDto.class);
    }

    @Override
    public UserDto getUserById(String userId) {
        User user = this.userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User Not Foubd In Db"));
        return modelMapper.map(user , UserDto.class);
    }

    @Override
    public List<UserDto> getAllUser() {
        List<User> users = this.userRepository.findAll();
        List<UserDto> userDtos = users.stream().map(user -> {
            return modelMapper.map(user, UserDto.class);
        }).collect(Collectors.toList());
        return userDtos;
    }

    @Override
    public UserDto updateUser(UserDto userDto, String userId) {
        User user = this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User Not Found With this UserId"));
        // here no need to set userId
        user.setBio(userDto.getBio());
        user.setDob(userDto.getDob());
        user.setEmail(userDto.getEmail());
        user.setGender(userDto.getGender());
        user.setEmail(userDto.getEmail());
        user.setUsername(userDto.getUsername());

        // now save this user again in db
        this.userRepository.save(user);
        // all the details updated now
        return modelMapper.map(user , UserDto.class);
    }

    @Override
    public ApiResponse deleteUser(String userId) {
        User user = this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User Not Found With this UserId"));
        this.userRepository.delete(user);
        return ApiResponse.builder().message("User Deleted Successfully").code(HttpStatus.OK).build();

    }

    @Override
    public ApiResponse authenticate(Auth auth) {
        User user = this.userRepository.findByEmail(auth.getEmail()).orElseThrow(() -> new ResourceNotFoundException("Invalid Email"));
        if(user.getPassword().equals(auth.getPassword())){
            return ApiResponse.builder().message("Validation Successfull").code(HttpStatus.OK).build();
        }
        return ApiResponse.builder().message("Invalid Password").code(HttpStatus.NO_CONTENT).build();
    }
}

