package com.user.exception;

import com.user.response.ApiResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiResponse> resourceNotFoundExceptionHandler(ResourceNotFoundException ex){
        // when ResourceNotFoundException is generated then this function is called automatically;
        logger.info("Exceptional Handler Invoke!!!");
        ApiResponse apiResponseMessage = new ApiResponse() ;
        apiResponseMessage.setMessage(ex.getMessage());
        apiResponseMessage.setCode(HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(apiResponseMessage,HttpStatus.NOT_FOUND);
    }

    //This will execute when on validations fails
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> methodArgumentNotValidFoundExceptionHandler(MethodArgumentNotValidException ex){
        List<ObjectError> allErrors = ex.getBindingResult().getAllErrors();
        Map<String, Object> mp = new HashMap<>();
        allErrors.stream().forEach(e -> {
            String errorMsg = e.getDefaultMessage() ;
            String field = ((FieldError)e).getField() ;
            mp.put(field, errorMsg);
        });

        return new ResponseEntity<Map<String,Object>>(mp, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(SQLIntegrityConstraintViolationException.class)
    public ResponseEntity<ApiResponse> sqlIntegrityConstraintViolationException(SQLIntegrityConstraintViolationException ex){
        ApiResponse apiResponse = ApiResponse.builder().message(ex.getMessage()).code(HttpStatus.FORBIDDEN).build();
        return new ResponseEntity<ApiResponse>(apiResponse,HttpStatus.FORBIDDEN);
    }
}