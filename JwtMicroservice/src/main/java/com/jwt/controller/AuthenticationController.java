package com.jwt.controller;

import com.jwt.dto.UserDto;
import com.jwt.exception.BadApiRequestException;
import com.jwt.feign.UserService;
import com.jwt.response.JwtRequest;
import com.jwt.response.JwtResponse;
import com.jwt.security.JwtHelper;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authenticate")
@CrossOrigin("*")
@Slf4j
public class AuthenticationController {

    @Autowired
    private UserDetailsService userDetailsService;


    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private JwtHelper jwtHelper;

    @Autowired
    private ModelMapper modelMapper;
    
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest jwtRequest) {
        // now we have username and password here from jwtrequest;
        System.out.println(jwtRequest.getEmail());
        this.doAuthenticate(jwtRequest.getEmail(), jwtRequest.getPassword());

//		if no exception came till now then now generate the token
        UserDetails details = userDetailsService.loadUserByUsername(jwtRequest.getEmail());
        String token = this.jwtHelper.generateToken(details);

        if(token == null){
            return null;
        }
        JwtResponse jwtResponse = new JwtResponse();
        jwtResponse.setJwttoken(token);
        UserDto userDto = modelMapper.map(details, UserDto.class);
        //now add userDto to user's with the friendRequest and posts
        UserDto user = this.userService.getUser(userDto.getUserId());
        jwtResponse.setUser(user);

        return new ResponseEntity<JwtResponse>(jwtResponse, HttpStatus.OK);

    }

    private void doAuthenticate(String email, String password) {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email,
                password);
        try {
            manager.authenticate(authenticationToken).isAuthenticated();
        } catch (BadCredentialsException e) {
            throw new BadApiRequestException("Invalid credentials ");
        }

    }

    @GetMapping("/test")
    public String test(){
        return "TEST";
    }
}
