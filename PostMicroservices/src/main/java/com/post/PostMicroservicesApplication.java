package com.post;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableDiscoveryClient // byname now we can call an api
@EnableFeignClients
public class PostMicroservicesApplication {

    public static void main(String[] args) {
        SpringApplication.run(PostMicroservicesApplication.class, args);
    }

}
