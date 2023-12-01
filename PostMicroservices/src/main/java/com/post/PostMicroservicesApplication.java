package com.post;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient // byname now we can call an api
public class PostMicroservicesApplication {

    public static void main(String[] args) {
        SpringApplication.run(PostMicroservicesApplication.class, args);
    }

}
