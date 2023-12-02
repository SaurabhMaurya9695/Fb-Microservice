package com.user.exception;

public class BadApiRequestException extends RuntimeException{

    public BadApiRequestException() {
        super("RBad Api Request!!!");
    }

    public BadApiRequestException(String msg) {
        super(msg);
    }
}
