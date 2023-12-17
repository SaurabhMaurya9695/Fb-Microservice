package com.post.serviceImpl;

import com.post.execption.BadApiRequestException;
import com.post.service.imageUploadService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.UUID;


@Service
@Slf4j
public class ImageUploadServiceImpl  implements imageUploadService {
    @Override
    public String uploadFiles(MultipartFile file, String path) throws IOException {
        String originamFileName = file.getOriginalFilename(); // abc.png
        String filename = UUID.randomUUID().toString(); // generated random Id ;
        String ext = originamFileName.substring(originamFileName.lastIndexOf("."));
        String fileNameWithExtension = filename + ext ;
        log.info("Original File Name is : {} , FileNameWithEx is {} " , originamFileName , fileNameWithExtension);
        String fullPathNameWithFileExtension = path  + fileNameWithExtension;


        if(ext.equalsIgnoreCase(".jpg") || ext.equalsIgnoreCase(".jpeg") || ext.equalsIgnoreCase(".png")) {
            //Now we can save file on this path ;
            // if folder is not there then first create folder then put file in this path

            File folder = new File(path);
            if(! folder.exists() ) {
                folder.mkdirs();
            }
            //then  you can save file at this path ;

            Files.copy(file.getInputStream(), Paths.get(fullPathNameWithFileExtension) ) ; // it will give exception
            return fullPathNameWithFileExtension;
        }
        else {
            throw new BadApiRequestException("File With This " + ext + " Extension Not Allowed!!..");
        }
    }

    @Override
    public InputStream getResource(String path, String name) throws FileNotFoundException {
        String fullpath = path  + name ;
        log.info("Full path is : {} ",fullpath);
        InputStream inputStream = new FileInputStream(fullpath);
        return inputStream;
    }
}
