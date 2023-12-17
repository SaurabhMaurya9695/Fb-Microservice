package com.post.controller;

import com.post.entity.Post;
import com.post.response.ApiResponse;
import com.post.response.ImageResponse;
import com.post.service.PostService;
import com.post.serviceImpl.ImageUploadServiceImpl;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.List;

@RestController
@RequestMapping("/post")
@Slf4j
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private ImageUploadServiceImpl fileService;

    @Value("${post.image.path}")
    private String imageUploadPath;

    //create Post
    @PostMapping("/")
    public ResponseEntity<Post>  createPost(@RequestBody Post post){
        Post post1 = this.postService.createPost(post);
        return new ResponseEntity<>(post1 , HttpStatus.CREATED);
    }

    //getAllPost
    @GetMapping("/")
    public ResponseEntity<List<Post>>  getAllPost(){
        List<Post> allPost = this.postService.getAllPost();
        return new ResponseEntity<>(allPost , HttpStatus.OK);
    }

    //GetSinglePost
    @GetMapping("/{postId}")
    public ResponseEntity<Post>  getSinglePost(@PathVariable("postId") Integer postId) throws Exception {
        Post singlePost = this.postService.getSinglePost(postId);
        return new ResponseEntity<>(singlePost , HttpStatus.OK);
    }

    //updateLikes
    @PutMapping("/updateLike/{postId}")
    public ResponseEntity<Post>  updatePostLikeCnt(@PathVariable("postId") Integer postId ,
                                              @RequestParam("likeCnt") Long likeCnt) throws Exception {
        System.out.println(likeCnt);
        Post updateLikes = this.postService.updateLikes(postId, likeCnt);
        return new ResponseEntity<>(updateLikes , HttpStatus.OK);
    }

    @PutMapping("/{postId}")
    public ResponseEntity<Post>  updatePost(@PathVariable("postId") Integer postId ,
                                                   @RequestBody Post post) throws Exception {
        Post updatePost = this.postService.updatePost(postId,post);
        return new ResponseEntity<>(updatePost , HttpStatus.OK);
    }

    //deletePost
    @DeleteMapping("/{postId}")
    public ResponseEntity<ApiResponse>  deletePost(@PathVariable("postId") Integer postId) throws Exception {
        ApiResponse response = this.postService.deletePost(postId);
        return new ResponseEntity<>(response , HttpStatus.OK);
    }

    @GetMapping("/users/{userId}")
    public ResponseEntity<List<Post>>  postByUser(@PathVariable("userId") String userId) throws Exception {
        List<Post> postByUser = this.postService.getAllPostByUser(userId);
        return new ResponseEntity<>(postByUser , HttpStatus.OK);
    }

    @DeleteMapping("/clear-post/users/{userId}")
    public ResponseEntity<ApiResponse>  deleteAllPostOfUser(@PathVariable("userId") String userId) throws Exception {
        ApiResponse response = this.postService.deleteAllPostOfUser(userId);
        return new ResponseEntity<>(response , HttpStatus.OK);
    }

    @PostMapping("/image/{postId}")
    public ResponseEntity<ImageResponse> uploadFile(@RequestParam("image") MultipartFile file,
                                                    @PathVariable("postId") Integer postId) throws Exception {

        log.info("File name is : {} , id is : {} ", file.getOriginalFilename(), postId);
        // we have to update imageName in db corresponding to userId
        String imgName = this.fileService.uploadFiles(file, imageUploadPath);
        String updatedName = imgName.substring(imgName.lastIndexOf("/") + 1);
        log.info("Image Name after uploading :{}", imgName);
        log.error("updatedFileName is :{}", updatedName);

        Post post = this.postService.getSinglePost(postId);
        post.setImage(updatedName);

        Post updatePost = this.postService.updatePost(postId, post);

        ImageResponse imageResponse = new ImageResponse();
        imageResponse.setImageName(updatedName);
        imageResponse.setMessage("File uploaded Sucessfully");
        imageResponse.setCode(HttpStatus.CREATED);
        imageResponse.setSuccess(true);
        return new ResponseEntity<ImageResponse>(imageResponse, HttpStatus.CREATED);
    }

    @GetMapping("/image/{postId}")
    public void serveImage(@PathVariable("postId") Integer postId, HttpServletResponse response) throws Exception {

        // first get all the user data ;
        // after getting the data find the imageName you want
        Post post = this.postService.getSinglePost(postId);
        log.info("User Image name is : {}", post.getImage());
        String ImgName = post.getImage();
        InputStream inputStream = this.fileService.getResource(imageUploadPath, ImgName);

        // we get the data in form of InputStream;
        // for that we have to send in response via HttpServletResponse -> output ;

        response.setContentType(MediaType.IMAGE_JPEG_VALUE);

        // now we have to send the response

        StreamUtils.copy(inputStream, response.getOutputStream());

    }


}

