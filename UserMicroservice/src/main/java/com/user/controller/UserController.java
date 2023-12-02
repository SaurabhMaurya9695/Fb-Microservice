package com.user.controller;


import com.user.dto.UserDto;
import com.user.response.ApiResponse;
import com.user.response.ImageResponse;
import com.user.service.FileService;
import com.user.service.UserService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@RequestMapping("/users")
@RestController
public class UserController {

    @Autowired
    private UserService userService ;
    @Autowired
    private FileService fileService ;

    @Value("${user.profile.image.path}")
    private String imageUploadPath;

    private Logger logger = LoggerFactory.getLogger(UserController.class);
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


    @PostMapping("/image/{userId}")
    public ResponseEntity<ImageResponse> uploadFile(@RequestParam("image") MultipartFile file,
                                                    @PathVariable("userId") String userId) throws IOException {

        logger.info("File name is : {} , id is : {} ", file.getOriginalFilename(), userId);
        // we have to update imageName in db corresponding to userId
        String imgName = this.fileService.uploadFiles(file, imageUploadPath);
        String updatedName = imgName.substring(imgName.lastIndexOf("/") + 1);
        logger.info("Image Name after uploading :{}", imgName);
        logger.error("updatedFileName is :{}", updatedName);

        UserDto currentUser = this.userService.getUserById(userId);
        currentUser.setImage(updatedName);

        @SuppressWarnings("unused")
        UserDto updatedWithImg = this.userService.updateUser(currentUser, userId); // image upload at server db;

        ImageResponse imageResponse = new ImageResponse();
        imageResponse.setImageName(updatedName);
        imageResponse.setMessage("File uploaded Sucessfully");
        imageResponse.setCode(HttpStatus.CREATED);
        imageResponse.setSuccess(true);
        return new ResponseEntity<ImageResponse>(imageResponse, HttpStatus.CREATED);
    }

    @GetMapping("/image/{userId}")
    public void serveImage(@PathVariable("userId") String userId, HttpServletResponse response) throws IOException {

        // first get all the user data ;
        // after getting the data find the imageName you want
        UserDto userData = this.userService.getUserById(userId);
        logger.info("User Image name is : {}", userData.getImage());
        String ImgName = userData.getImage();
        InputStream inputStream = this.fileService.getResource(imageUploadPath, ImgName);

        // we get the data in form of InputStream;
        // for that we have to send in response via HttpServletResponse -> output ;

        response.setContentType(MediaType.IMAGE_JPEG_VALUE);

        // now we have to send the response

        StreamUtils.copy(inputStream, response.getOutputStream());

    }



}
