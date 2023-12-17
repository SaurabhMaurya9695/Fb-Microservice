package com.post.execption;

public class BadApiRequestException extends  RuntimeException{

    public BadApiRequestException() {
        super("Bad Api Request ");
    }

    public BadApiRequestException(String message) {
        super(message);
    }
}
